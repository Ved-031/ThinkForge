import { Quizzes } from "@/lib/data";
import { SolveQuiz } from "../_components/solve-quiz";

interface QuizIdPageProps {
    params: Promise<{ quizId: string }>;
}

const QuizIdPage = async ({ params }: QuizIdPageProps) => {

    const { quizId } = await params;
    if(!quizId) {
        throw new Error("Quiz ID is required");
    }

    // [API CALL] : Fetch quiz data from DB using quizId
    const quiz = Quizzes.find(q => q.id.toString() === quizId);
    if (!quiz) {
        throw new Error(`Quiz with ID ${quizId} not found`);
    }

    return <SolveQuiz quiz={quiz} />
}

export default QuizIdPage;
