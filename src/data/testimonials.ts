export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rakib Hasan",
    role: "Junior Developer",
    quote:
      "This platform completely changed how I learn. The courses are practical and easy to follow.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Software Engineer",
    quote:
      "Clear explanations, structured lessons, and real-world examples. Highly recommended!",
  },
  {
    id: 3,
    name: "Mahmudul Islam",
    role: "Freelancer",
    quote:
      "I was able to land my first client after completing the Laravel course here.",
  },
  {
    id: 4,
    name: "Fahim Rahman",
    role: "CS Student",
    quote:
      "The progress tracking and certificates motivated me to finish courses properly.",
  },
];
