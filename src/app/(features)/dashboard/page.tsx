import { Quizzes } from "@/lib/data";

import { columns } from "./_components/table/columns";
import { DataTable } from "./_components/table/data-table";
import { SectionCards } from "./_components/section-card";
import { ChartAreaInteractive } from "./_components/chart-area-interactive";


const DashboardPage = () => {

    const data = Quizzes.map((quiz) => ({
        id: quiz.id,
        grade: quiz.class_name,
        subject: quiz.subject,
        topic: quiz.topic,
        questions: quiz.questions.length,
        difficulty: quiz.difficulty,
        deadline: quiz.deadline,
    }))

    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <SectionCards />
                    <div className="px-4 lg:px-6">
                        <ChartAreaInteractive />
                    </div>
                    <div className="px-4 lg:px-6">
                        <DataTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;
