"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PlusCircle, StickyNote } from "lucide-react";

import { Quizzes } from "@/lib/data";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/page-heading";
import { Card, CardContent } from "@/components/ui/card";

import { QuizCard } from "./_components/quiz-card";


type AttemptedQuizzes = Record<string, Record<string, string>>;

const QuizzesPage = () => {

    const router = useRouter();
    const [inputValue, setInputValue] = useState("");
    const [filteredData, setFilteredData] = useState(Quizzes);

    const getAttemptedQuizzes = (): AttemptedQuizzes => {
        if (typeof window === "undefined") return {};
        const stored = localStorage.getItem("attemptedQuizzes");
        return stored ? JSON.parse(stored) : {};
    }

    const attemptedQuizzes = getAttemptedQuizzes();

    useEffect(() => {
        const quizzes = Quizzes.filter(quiz => quiz.topic.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredData(quizzes);
    }, [inputValue]);

    const getQuiz = (quizId: string) => {
        return Quizzes.find(q => q.id === quizId);
    }

    return (
        <div className="w-full">
            {/* Page Heading */}
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
            {/* Solved Quizzes */}
            <div className="mt-10">
                <h1 className="text-xl md:text-2xl font-bold">Solved Quizzes</h1>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        Object.keys(attemptedQuizzes).length === 0 ? (
                            <Card
                                className="shadow-none border-2 border-dashed py-3 min-w-[400px]"
                            >
                                <CardContent className="flex flex-col gap-y-4 items-center justify-center">
                                    <StickyNote className="size-16 text-gray-200" />
                                    <span className="text-gray-500 text-center">No quiz solved yet.</span>
                                </CardContent>
                            </Card>
                        ) : (
                            Object.keys(attemptedQuizzes).map((item) => {
                                const quiz = getQuiz(item);
                                if (!quiz) return;
                                return <QuizCard quiz={quiz} key={item} isSolved />
                            })
                        )
                    }
                </div>
            </div>
            {/* All Quizzes */}
            <div className="mt-10">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl md:text-2xl font-bold">Quizzes</h1>
                    <Input
                        type="search"
                        placeholder="Search for topic..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-[300px]"
                    />
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        filteredData.length === 0 ? (
                            <Card
                                onClick={() => router.push("/quiz/create")}
                                className="shadow-none border-2 border-dashed py-3 min-w-[400px] cursor-pointer"
                            >
                                <CardContent className="flex flex-col gap-y-4 items-center justify-center">
                                    <StickyNote className="size-16 text-gray-200" />
                                    <div className="flex flex-col gap-y-1 text-center">
                                        <span className="text-gray-500">No quiz found.</span>
                                        <span className="text-gray-500 text-sm">Create one to get started!</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            filteredData.map((item) => (
                                <QuizCard key={item?.id} quiz={item} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default QuizzesPage;
