export interface HomeCourse {
  id: number;
  title: string;
  description: string;
  duration: string;
  modules: number;
  students: number;
  image: string;
}

export const homeCourses: HomeCourse[] = [
  {
    id: 1,
    title: "২০ ঘন্টায় কুরআন শেখা —উপহার কোর্স",
    description:
      "কুরআন শেখার ইচ্ছা আছে কিন্তু কোথা থেকে শুরু করবেন বুঝতে পারছেন না? এই কোর্সটি এমনভাবে তৈরি করা হয়েছে যেন যে কেউ, যেকোনো বয়সে, অল্প সময়েই কুরআন পড়ার ভিত্তি গড়ে তুলতে পারেন",
    duration: "২০ দিন",
    modules: 20,
    students: 3200,
    image: "/images/quran-course-poster.png",
  },
  {
    id: 2,
    title: "ফিনান্সিয়াল ফ্রিডম কোর্স",
    description:
      "আয় বাড়ানো, খরচ নিয়ন্ত্রণ ও দীর্ঘমেয়াদি পরিকল্পনার মাধ্যমে একটি স্বাধীন ও নিরাপদ আর্থিক ভবিষ্যৎ তৈরি করুন।",
    duration: "৮ সপ্তাহ",
    modules: 14,
    students: 5400,
    image: "/images/financial-course.jpg",
  },
  {
    id: 3,
    title: "আত্মিক উন্নয়ন কোর্স",
    description:
      "মানসিক প্রশান্তি, আত্মনিয়ন্ত্রণ ও জীবনের উদ্দেশ্য খুঁজে পেতে একটি ধীর কিন্তু গভীর আত্মিক যাত্রা।",
    duration: "৮ সপ্তাহ",
    modules: 30,
    students: 6100,
    image: "/images/spiritual-course.jpg",
  },
];
