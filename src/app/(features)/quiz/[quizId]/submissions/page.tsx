import { Quizzes } from "@/lib/data";
import CommingSoon from "@/components/coming-soon";

const SubmissionPage = async ({ params }: { params: Promise<{ quizId: string }> }) => {
    const { quizId } = await params;
    if(!quizId) {
        throw new Error("Quiz ID is required");
    }

    const quiz = Quizzes.find(q => q.id === quizId);
    if(!quiz) {
        throw new Error("Quiz not found");
    }

    return <CommingSoon />;
}

export default SubmissionPage;
