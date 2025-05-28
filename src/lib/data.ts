import { Difficulty } from "@/types";
import {
  BookOpenCheck,
  LayoutDashboard,
  Lightbulb,
  MessageCircle,
  UserCheck,
} from "lucide-react";

export const user = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  avatar: "/avatar.jpg",
  role: "Teacher",
};

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
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    difficulty: Difficulty.HARD,
    createdAt: new Date(),
    additional_info_context:
      "This quiz covers basic concepts of algebra for beginners.",
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
    deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 days from now
    difficulty: Difficulty.EASY,
    createdAt: new Date(),
    additional_info_context:
      "This quiz covers basic knowledge of continents and oceans.",
  },
  {
    id: "quiz-5",
    class_name: "10th Grade",
    subject: "History",
    topic: "World Wars",
    questions: [
      {
        id: "q1",
        text: "When did World War I begin?",
        options: [
          { id: "o1", text: "1914" },
          { id: "o2", text: "1918" },
          { id: "o3", text: "1939" },
          { id: "o4", text: "1945" },
        ],
        correctOptionId: "o1",
      },
      {
        id: "q2",
        text: "Who was the leader of Nazi Germany during World War II?",
        options: [
          { id: "o1", text: "Adolf Hitler" },
          { id: "o2", text: "Winston Churchill" },
          { id: "o3", text: "Joseph Stalin" },
          { id: "o4", text: "Franklin D. Roosevelt" },
        ],
        correctOptionId: "o1",
      },
    ],
    num_questions: 2,
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.MEDIUM,
    createdAt: new Date(),
  },
  {
    id: "quiz-6",
    class_name: "10th Grade",
    subject: "English",
    topic: "Grammar",
    questions: [
      {
        id: "q1",
        text: "Which of the following is a noun?",
        options: [
          { id: "o1", text: "Run" },
          { id: "o2", text: "Beautiful" },
          { id: "o3", text: "Happiness" },
          { id: "o4", text: "Quickly" },
        ],
        correctOptionId: "o3",
      },
      {
        id: "q2",
        text: "What is the past tense of 'go'?",
        options: [
          { id: "o1", text: "Goes" },
          { id: "o2", text: "Went" },
          { id: "o3", text: "Gone" },
          { id: "o4", text: "Going" },
        ],
        correctOptionId: "o2",
      },
    ],
    num_questions: 2,
    deadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.HARD,
    createdAt: new Date(),
  },
  {
    id: "quiz-7",
    class_name: "10th Grade",
    subject: "Biology",
    topic: "Human Anatomy",
    questions: [
      {
        id: "q1",
        text: "What is the largest organ in the human body?",
        options: [
          { id: "o1", text: "Heart" },
          { id: "o2", text: "Liver" },
          { id: "o3", text: "Skin" },
          { id: "o4", text: "Brain" },
        ],
        correctOptionId: "o3",
      },
      {
        id: "q2",
        text: "What is the function of red blood cells?",
        options: [
          { id: "o1", text: "Transport oxygen" },
          { id: "o2", text: "Fight infections" },
          { id: "o3", text: "Clot blood" },
          { id: "o4", text: "Store energy" },
        ],
        correctOptionId: "o1",
      },
    ],
    num_questions: 2,
    deadline: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.MEDIUM,
    createdAt: new Date(),
  },
  {
    id: "quiz-8",
    class_name: "10th Grade",
    subject: "Mathematics",
    topic: "Geometry",
    questions: [
      {
        id: "q1",
        text: "What is the sum of the interior angles of a triangle?",
        options: [
          { id: "o1", text: "180°" },
          { id: "o2", text: "360°" },
          { id: "o3", text: "90°" },
          { id: "o4", text: "270°" },
        ],
        correctOptionId: "o1",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.EASY,
    createdAt: new Date(),
  },
  {
    id: "quiz-9",
    class_name: "10th Grade",
    subject: "Science",
    topic: "Chemistry",
    questions: [
      {
        id: "q1",
        text: "What is the chemical symbol for Sodium?",
        options: [
          { id: "o1", text: "Na" },
          { id: "o2", text: "So" },
          { id: "o3", text: "S" },
          { id: "o4", text: "Sn" },
        ],
        correctOptionId: "o1",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.EASY,
    createdAt: new Date(),
  },
  {
    id: "quiz-10",
    class_name: "10th Grade",
    subject: "Computer Science",
    topic: "Data Types",
    questions: [
      {
        id: "q1",
        text: "Which of the following is a primitive data type in JavaScript?",
        options: [
          { id: "o1", text: "Array" },
          { id: "o2", text: "Object" },
          { id: "o3", text: "String" },
          { id: "o4", text: "Function" },
        ],
        correctOptionId: "o3",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.MEDIUM,
    createdAt: new Date(),
  },
  {
    id: "quiz-11",
    class_name: "10th Grade",
    subject: "English",
    topic: "Vocabulary",
    questions: [
      {
        id: "q1",
        text: "What is the synonym of 'happy'?",
        options: [
          { id: "o1", text: "Sad" },
          { id: "o2", text: "Angry" },
          { id: "o3", text: "Joyful" },
          { id: "o4", text: "Tired" },
        ],
        correctOptionId: "o3",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.EASY,
    createdAt: new Date(),
  },
  {
    id: "quiz-12",
    class_name: "10th Grade",
    subject: "History",
    topic: "Indian Independence",
    questions: [
      {
        id: "q1",
        text: "In which year did India gain independence?",
        options: [
          { id: "o1", text: "1945" },
          { id: "o2", text: "1947" },
          { id: "o3", text: "1950" },
          { id: "o4", text: "1930" },
        ],
        correctOptionId: "o2",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.EASY,
    createdAt: new Date(),
  },
  {
    id: "quiz-13",
    class_name: "10th Grade",
    subject: "Mathematics",
    topic: "Trigonometry",
    questions: [
      {
        id: "q1",
        text: "What is sin(90°)?",
        options: [
          { id: "o1", text: "0" },
          { id: "o2", text: "1" },
          { id: "o3", text: "0.5" },
          { id: "o4", text: "Undefined" },
        ],
        correctOptionId: "o2",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.MEDIUM,
    createdAt: new Date(),
  },
  {
    id: "quiz-14",
    class_name: "10th Grade",
    subject: "Civics",
    topic: "Democracy",
    questions: [
      {
        id: "q1",
        text: "Which of the following is a feature of democracy?",
        options: [
          { id: "o1", text: "One-party rule" },
          { id: "o2", text: "Free and fair elections" },
          { id: "o3", text: "Dictatorship" },
          { id: "o4", text: "Military rule" },
        ],
        correctOptionId: "o2",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.EASY,
    createdAt: new Date(),
  },
  {
    id: "quiz-15",
    class_name: "10th Grade",
    subject: "Economics",
    topic: "Money and Credit",
    questions: [
      {
        id: "q1",
        text: "Which institution issues currency in India?",
        options: [
          { id: "o1", text: "SBI" },
          { id: "o2", text: "RBI" },
          { id: "o3", text: "Finance Ministry" },
          { id: "o4", text: "NABARD" },
        ],
        correctOptionId: "o2",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.MEDIUM,
    createdAt: new Date(),
  },
  {
    id: "quiz-16",
    class_name: "10th Grade",
    subject: "Science",
    topic: "Electricity",
    questions: [
      {
        id: "q1",
        text: "What is the SI unit of electric current?",
        options: [
          { id: "o1", text: "Volt" },
          { id: "o2", text: "Ampere" },
          { id: "o3", text: "Ohm" },
          { id: "o4", text: "Watt" },
        ],
        correctOptionId: "o2",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.MEDIUM,
    createdAt: new Date(),
  },
  {
    id: "quiz-17",
    class_name: "10th Grade",
    subject: "Biology",
    topic: "Nutrition",
    questions: [
      {
        id: "q1",
        text: "Which vitamin is known as the sunshine vitamin?",
        options: [
          { id: "o1", text: "Vitamin A" },
          { id: "o2", text: "Vitamin B" },
          { id: "o3", text: "Vitamin C" },
          { id: "o4", text: "Vitamin D" },
        ],
        correctOptionId: "o4",
      },
    ],
    num_questions: 1,
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    difficulty: Difficulty.EASY,
    createdAt: new Date(),
  },
];
