import { Difficulty } from "@/types";
import { BookOpenCheck, LayoutDashboard, Lightbulb, MessageCircle, UserCheck } from "lucide-react";

export const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    avatar: "/avatar.jpg",
    role: "Teacher",
}

export const NavItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Quiz Generator",
    url: "/quizzes",
    icon: Lightbulb,
  },
  {
    title: "Assignment Checker",
    url: "/assignments",
    icon: BookOpenCheck,
  },
  {
    title: "Oral Test Simulation",
    url: "/orals",
    icon: MessageCircle,
  },
  {
    title: "Personalized Guidance",
    url: "/guidance",
    icon: UserCheck,
  },
];

export const Quizzes = [
  {
    id: "quiz-1",
    class_name: "10th Grade",
    subject: "Mathematics",
    topic: "Algebra",
    questions: [
      {
        id: "q1",
        text: "What is the output of `typeof null`?",
        options: [
          { id: "o1", text: `"object"` },
          { id: "o2", text: `"null"` },
          { id: "o3", text: `"undefined"` },
          { id: "o4", text: `"number"` },
        ],
        correctOptionId: "o1",
      },
      {
        id: "q2",
        text: "Which method converts JSON to a JavaScript object?",
        options: [
          { id: "o1", text: `JSON.stringify()` },
          { id: "o2", text: `JSON.parse()` },
          { id: "o3", text: `JSON.objectify()` },
          { id: "o4", text: `JSON.convert()` },
        ],
        correctOptionId: "o2",
      },
      {
        id: "q3",
        text: "What is the result of `0.1 + 0.2 === 0.3`?",
        options: [
          { id: "o1", text: `true` },
          { id: "o2", text: `false` },
          { id: "o3", text: `undefined` },
          { id: "o4", text: `NaN` },
        ],
        correctOptionId: "o2",
      },
      {
        id: "q4",
        text: "Which of the following is a valid way to declare a variable in JavaScript?",
        options: [
          { id: "o1", text: `var x = 10;` },
          { id: "o2", text: `let y = 20;` },
          { id: "o3", text: `const z = 30;` },
          { id: "o4", text: `All of the above` },
        ],
        correctOptionId: "o4",
      },
      {
        id: "q5",
        text: "What does the `===` operator do in JavaScript?",
        options: [
          { id: "o1", text: `Checks for value equality` },
          { id: "o2", text: `Checks for type and value equality` },
          { id: "o3", text: `Checks for reference equality` },
          { id: "o4", text: `None of the above` },
        ],
        correctOptionId: "o2",
      },
    ],
    num_questions: 5,
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    difficulty: Difficulty.EASY,
    createdAt: new Date(),
    additional_info_context: "This quiz covers basic concepts of algebra for beginners.",
  },
  {
    id: "quiz-2",
    class_name: "10th Grade",
    subject: "Science",
    topic: "Physics",
    questions: [
      {
        id: "q1",
        text: "What is the unit of force?",
        options: [
          { id: "o1", text: "Newton" },
          { id: "o2", text: "Joule" },
          { id: "o3", text: "Pascal" },
          { id: "o4", text: "Watt" },
        ],
        correctOptionId: "o1",
      },
      {
        id: "q2",
        text: "What is the speed of light in a vacuum?",
        options: [
          { id: "o1", text: "300,000 km/s" },
          { id: "o2", text: "150,000 km/s" },
          { id: "o3", text: "1,000,000 km/s" },
          { id: "o4", text: "500,000 km/s" },
        ],
        correctOptionId: "o1",
      },
      {
        id: "q3",
        text: "What is the formula for calculating kinetic energy?",
        options: [
          { id: "o1", text: "KE = 0.5 * m * v^2" },
          { id: "o2", text: "KE = m * g * h" },
          { id: "o3", text: "KE = F * d" },
          { id: "o4", text: "KE = m * a" },
        ],
        correctOptionId: "o1",
      },
    ],
    num_questions: 3,
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    difficulty: Difficulty.MEDIUM,
    createdAt: new Date(),
  },
  {
    id: "quiz-4",
    class_name: "10th Grade",
    subject: "Geography",
    topic: "Continents and Oceans",
    questions: [
      {
        id: "q1",
        text: "Which is the largest continent by area?",
        options: [
          { id: "o1", text: "Asia" },
          { id: "o2", text: "Africa" },
          { id: "o3", text: "Europe" },
          { id: "o4", text: "North America" },
        ],
        correctOptionId: "o1",
      },
      {
        id: "q2",
        text: "Which ocean is the deepest?",
        options: [
          { id: "o1", text: "Atlantic Ocean" },
          { id: "o2", text: "Indian Ocean" },
          { id: "o3", text: "Pacific Ocean" },
          { id: "o4", text: "Arctic Ocean" },
        ],
        correctOptionId: "o3",
      },
      {
        id: "q3",
        text: "Which continent has the most countries?",
        options: [
          { id: "o1", text: "Asia" },
          { id: "o2", text: "Africa" },
          { id: "o3", text: "Europe" },
          { id: "o4", text: "South America" },
        ],
        correctOptionId: "o2",
      },
    ],
    num_questions: 3,
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    difficulty: Difficulty.EASY,
    createdAt: new Date(),
    additional_info_context: "This quiz covers basic knowledge of continents and oceans.",
  },
];
