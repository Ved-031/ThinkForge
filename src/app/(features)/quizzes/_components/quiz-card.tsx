"use client";

import { format } from "date-fns";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CirclePlay, ListChecks, Trash } from "lucide-react";

import { cn } from "@/lib/utils";
import { Difficulty, Quiz } from "@/types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";

import { DeleteQuizDialog } from "./delete-quiz-dialog";


interface QuizCardProps {
    quiz: Quiz;
    isSolved?: boolean;
}

const DifficultyColorMap: Record<string, string> = {
    [Difficulty.EASY]: "bg-emerald-200/60 text-emerald-600 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800",
    [Difficulty.MEDIUM]: "bg-yellow-200/60 text-yellow-600 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
    [Difficulty.HARD]: "bg-red-200/60 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
};


export const QuizCard = ({ quiz, isSolved }: QuizCardProps) => {
    const router = useRouter();
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    return (
        <>
            <DeleteQuizDialog open={openDeleteDialog} onOpen={setOpenDeleteDialog} />
            <Card className="shadow-sm min-w-[400px]">
                <CardContent className="flex flex-col gap-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>{quiz.topic}</CardTitle>
                            <CardDescription>{quiz.subject}</CardDescription>
                        </div>
                        {isSolved ? (
                            <Badge>
                                Solved
                            </Badge>
                        ) : (
                            <Button
                                variant={"outline"}
                                size={"icon"}
                                onClick={() => setOpenDeleteDialog(true)}
                                className="hover:bg-gray-100"
                            >
                                <Trash size={16} className="text-destructive cursor-pointer" />
                            </Button>
                        )}
                    </div>
                    <div className="flex items-center gap-x-3">
                        <Badge variant="secondary" className="text-xs">
                            {quiz.questions.length} Questions
                        </Badge>
                        <Badge variant="secondary" className={cn(
                            "text-xs",
                            DifficultyColorMap[quiz.difficulty]
                        )}>
                            {quiz.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                            {format(new Date(quiz.createdAt), "PPP")}
                        </Badge>
                    </div>
                </CardContent>
                <CardFooter className="flex items-center gap-x-2 justify-between">
                    {
                        isSolved ? (
                            <Button
                                size="sm"
                                onClick={() => router.push(`/quiz/${quiz.id}/result`)}
                            >
                                <ListChecks size={16} />
                                View Result
                            </Button>
                        ) : (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => router.push(`/quiz/${quiz.id}`)}
                            >
                                <CirclePlay size={16} />
                                Start Quiz
                            </Button>
                        )
                    }
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/quiz/${quiz.id}/submissions`)}
                    >
                        <ListChecks size={16} />
                        View Submissions
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
