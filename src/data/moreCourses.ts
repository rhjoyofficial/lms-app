export interface MoreCourse {
  id: number;
  title: string;
  duration: string;
  students: number;
}

export const moreCourses: MoreCourse[] = [
  {
    id: 1,
    title: "Advanced Laravel APIs",
    duration: "9h 10m",
    students: 5400,
  },
  {
    id: 2,
    title: "PHP & OOP Masterclass",
    duration: "10h 45m",
    students: 6100,
  },
  {
    id: 3,
    title: "MySQL Masterclass",
    duration: "8h 20m",
    students: 4300,
  },
  {
    id: 4,
    title: "Web Security Essentials",
    duration: "6h 40m",
    students: 3900,
  },
  {
    id: 5,
    title: "Laravel Performance Optimization",
    duration: "7h 30m",
    students: 2800,
  },
];
