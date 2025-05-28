"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PlusCircle, StickyNote } from "lucide-react";

import { Quizzes } from "@/lib/data";

import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/page-heading";
import { Card, CardContent } from "@/components/ui/card";

import { QuizCard } from "./_components/quiz-card";


const QuizzesPage = () => {

    const router = useRouter();

    return (
        <div className="w-full">
            <div className="flex items-center justify-between gap-5">
                <PageHeading
                    title="Quiz Generator"
                    helperText="Manage your quizzes and create new ones with the power of AI."
                />
                <Button className="bg-teal hover:bg-teal/80 text-white font-medium">
                    <Link href="/quiz/create" className="flex items-center gap-x-2">
                        <PlusCircle className="size-4" />
                        <span className="hidden md:block">Create New Quiz</span>
                    </Link>
                </Button>
            </div>
            <div className="mt-10">
                <h1 className="text-xl md:text-2xl font-bold">Previous Quizzes</h1>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        Quizzes.length === 0 ? (
                            <Card
                                onClick={() => router.push("/quiz/create")}
                                className="shadow-none border-2 border-dashed py-3 min-w-[400px] cursor-pointer"
                            >
                                <CardContent className="flex flex-col gap-y-4 items-center justify-center">
                                    <StickyNote className="size-16 text-gray-200" />
                                    <div className="flex flex-col gap-y-1 text-center">
                                        <span className="text-gray-500">No quizzes generated yet.</span>
                                        <span className="text-gray-500 text-sm">Create one to get started!</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            Quizzes.map((item) => (
                                <QuizCard key={item.id} quiz={item} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default QuizzesPage;
