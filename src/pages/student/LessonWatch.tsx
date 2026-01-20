import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchLesson, updateLessonProgress } from "../../api/lesson.api";

const LESSON_DURATION = 600; // seconds (10 min placeholder)

const LessonWatch = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState<any>(null);
  const [watched, setWatched] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!lessonId) return;

    fetchLesson(Number(lessonId))
      .then(setLesson)
      .catch(() => setMessage("You do not have access to this lesson."));
  }, [lessonId]);

  // Simulate watching video (demo purpose)
  useEffect(() => {
    if (!lesson || completed) return;

    const interval = setInterval(() => {
      setWatched((prev) => {
        const next = prev + 10;
        if (next >= LESSON_DURATION) {
          clearInterval(interval);
          return LESSON_DURATION;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [lesson, completed]);

  // Sync progress to backend
  useEffect(() => {
    if (!lesson || watched === 0) return;

    updateLessonProgress(Number(lessonId), watched)
      .then((res) => {
        if (res.message === "Lesson completed") {
          setCompleted(true);
        }
      })
      .catch(() => {});
  }, [watched, lessonId, lesson]);

  if (!lesson) {
    return <p className="p-6">{message || "Loading lesson..."}</p>;
  }

  const percentage = Math.min(
    Math.floor((watched / LESSON_DURATION) * 100),
    100,
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>

      {/* Video Placeholder */}
      <div className="bg-black text-white h-64 flex items-center justify-center mb-4">
        Video Player Placeholder
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-3 rounded">
        <div
          className={`h-3 rounded ${
            completed ? "bg-green-600" : "bg-blue-600"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-2 text-sm text-gray-600">
        Watched {percentage}% {completed && "• Completed"}
      </p>

      {completed && (
        <p className="mt-4 text-green-600 font-semibold">Lesson completed!</p>
      )}
    </div>
  );
};

export default LessonWatch;
