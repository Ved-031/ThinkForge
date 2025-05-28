"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ShieldAlert } from "lucide-react";

import { Quiz } from "@/types";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PageHeading } from "@/components/page-heading";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


interface SolveQuizProps {
    quiz: Quiz;
}

export const SolveQuiz = ({ quiz }: SolveQuizProps) => {

    const router = useRouter();
    const [error, setError] = useState("");
    const [question, setQuestion] = useState(quiz.questions[0]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

    const handleNextBtn = () => {
        if (!selectedOptions[question.id]) {
            setError("Please select an option before proceeding to the next question.");
            return;
        }

        setError("");
        if (currentQuestionIndex < quiz.num_questions) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setQuestion(quiz.questions[currentQuestionIndex]);
        } else {
            console.log("Quiz completed!");
        }
    }

    const onSubmit = () => {
        if (!selectedOptions[question.id]) {
            setError("Please select an option for the last question before submitting.");
            return;
        }

        setError("");

        const existing = JSON.parse(localStorage.getItem('attemptedQuizzes') || '{}');
        existing[quiz.id] = selectedOptions;
        localStorage.setItem('attemptedQuizzes', JSON.stringify(existing));

        toast.success("Quiz submitted!");

        router.push(`/quiz/${quiz.id}/result`);
    }

    return (
        <div className="space-y-6">
            <PageHeading
                title={`${quiz.subject}: ${quiz.topic}`}
                helperText={`Question ${currentQuestionIndex} of ${quiz.num_questions}`}
                showBackButton
            />
            <Progress value={(currentQuestionIndex / quiz.num_questions) * 100} />
            <Card>
                <CardHeader>
                    <CardTitle>Question {currentQuestionIndex}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className={cn(error && "text-destructive")}>{question.text}</p>
                    {error && (
                        <Alert className="mt-2" variant={"destructive"}>
                            <ShieldAlert size={16} />
                            <AlertDescription>
                                {error}
                            </AlertDescription>
                        </Alert>
                    )}
                    <div className="mt-4 space-y-2">
                        {question.options.map((option) => (
                            <button
                                key={option.id}
                                className={cn(
                                    "w-full px-4 py-2 text-left bg-white border rounded hover:bg-gray-100 cursor-pointer",
                                    selectedOptions[question.id] === option.id
                                        ? "bg-blue-100 border-blue-500 text-blue-700"
                                        : "border-gray-300 text-gray-700"
                                )}
                                onClick={() => {
                                    setSelectedOptions({
                                        ...selectedOptions,
                                        [question.id]: option.id,
                                    });
                                    setError("");
                                }}
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <Button
                        variant={"secondary"}
                        disabled={currentQuestionIndex === 1}
                        onClick={() => {
                            if (currentQuestionIndex > 1) {
                                setCurrentQuestionIndex(currentQuestionIndex - 1);
                                setQuestion(quiz.questions[currentQuestionIndex - 2]);
                            }
                        }}
                    >
                        <ChevronLeft size={16} />
                        Previous
                    </Button>
                    {currentQuestionIndex === quiz.num_questions ? (
                        <Button
                            onClick={onSubmit}
                        >
                            Submit
                        </Button>
                    ) : (
                        <Button
                            disabled={currentQuestionIndex === quiz.num_questions}
                            onClick={handleNextBtn}
                        >
                            Next
                            <ChevronRight size={16} />
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}

