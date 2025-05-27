import { Quizzes } from "@/lib/data";
import { Result } from "../../_components/result";

interface QuizResultPageProps {
    params: Promise<{ quizId: string }>;
}

const QuizResultPage = async ({ params }: QuizResultPageProps) => {

    const { quizId } = await params;
    if(!quizId) {
        throw new Error("Quiz ID is required");
    }

    const quiz = Quizzes.find(q => q.id === quizId);

    if (!quiz) {
        throw new Error(`Quiz with ID ${quizId} not found`);
    }

    return <Result quiz={quiz} />
}

export default QuizResultPage;
