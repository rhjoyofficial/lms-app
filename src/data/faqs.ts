export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I enroll in a course?",
    answer:
      "Simply create an account, choose a course, and enroll. Paid courses require payment.",
  },
  {
    id: 2,
    question: "Do I get a certificate after completion?",
    answer:
      "Yes. After completing all lessons, you will receive a verifiable certificate.",
  },
  {
    id: 3,
    question: "Can I access courses anytime?",
    answer:
      "Yes. Once enrolled, you have lifetime access to the course content.",
  },
  {
    id: 4,
    question: "What payment methods are supported?",
    answer: "Currently bKash is supported. More gateways will be added soon.",
  },
];
