"use client";

import { useRouter } from "next/navigation";

import { Quiz } from "@/types";

import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/page-heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";


interface ResultProps {
    quiz: Quiz;
}

export const Result = ({ quiz }: ResultProps) => {

    const router = useRouter();
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    useEffect(() => {
        if (typeof window === "undefined") return;
        const attemptedQuizzes = JSON.parse(localStorage.getItem("attemptedQuizzes") || "{}");
        const result = attemptedQuizzes[quiz.id];
        setSelectedOptions(result);
    }, [quiz.id]);

    if (!selectedOptions) {
        return (
            <div className="">
                <h2>No results found for this quiz.</h2>
            </div>
        );
    }

    const correctAnswers = quiz.questions.reduce((count, question) => {
        const userAnswerId = selectedOptions[question.id];
        if (userAnswerId && question.correctOptionId === userAnswerId) {
            return count + 1;
        }
        return count;
    }, 0);

    return (
        <div className="">
            <PageHeading
                title={`Quiz Result: ${quiz.subject} (${quiz.topic})`}
                helperText={`You scored ${correctAnswers} out of ${quiz.num_questions}.`}
            />
            <Card className="mt-5">
                <CardHeader>
                    <CardTitle className="text-xl font-bold">Review Your Answers</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {quiz.questions.map((question) => {
                            const userAnswerId = selectedOptions[question.id];
                            const isCorrect = question.correctOptionId === userAnswerId;
                            return (
                                <li key={question.id} className={`p-4 border rounded ${isCorrect ? 'bg-green-50 border-gray-100' : 'bg-red-50 border-red-100'}`}>
                                    <h3 className="font-semibold">{question.text}</h3>
                                    <ul className="mt-2 space-y-2">
                                        {question.options.map((option) => (
                                            <li key={option.id} className={`p-2 rounded ${userAnswerId === option.id ? 'bg-blue-100' : ''}`}>
                                                {option.text}
                                            </li>
                                        ))}
                                    </ul>
                                    {!isCorrect && (
                                        <p className="mt-2 text-red-600">Correct Answer: {question.options.find(opt => opt.id === question.correctOptionId)?.text}</p>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => router.push('/quizzes')} className="ml-auto">
                        Back to Quizzes
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

