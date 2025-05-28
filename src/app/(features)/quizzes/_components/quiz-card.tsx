"use client";

import { format } from "date-fns";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ListChecks, Trash } from "lucide-react";

import { Quiz } from "@/types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";

import { DeleteQuizDialog } from "./delete-quiz-dialog";


export const QuizCard = ({ quiz }: { quiz: Quiz }) => {
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
                        <Button variant={"outline"} size={"icon"} onClick={() => setOpenDeleteDialog(true)}>
                            <Trash size={16} className="text-destructive cursor-pointer" />
                        </Button>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <Badge variant="secondary" className="text-xs">
                            {quiz.questions.length} Questions
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                            {quiz.difficulty}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                            {format(new Date(quiz.createdAt), "PPP")}
                        </Badge>
                    </div>
                </CardContent>
                <CardFooter className="flex items-center gap-x-2 justify-between">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/quiz/${quiz.id}`)}
                    >
                        <ListChecks size={16} />
                        Start Quiz
                    </Button>
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
