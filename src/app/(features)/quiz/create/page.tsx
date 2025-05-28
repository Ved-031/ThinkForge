"use client";

import * as z from "zod";
import { toast } from "sonner";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { CalendarIcon, Lightbulb } from "lucide-react";

import { cn } from "@/lib/utils";
import { Difficulty } from "@/types";
import { createQuizSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { PageHeading } from "@/components/page-heading";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const CreateQuizPage = () => {

    const form = useForm<z.infer<typeof createQuizSchema>>({
        resolver: zodResolver(createQuizSchema),
        defaultValues: {
            class_name: '',
            subject: '',
            topic: '',
            deadline: new Date(),
            num_questions: 5,
            difficulty: Difficulty.MEDIUM,
            additional_info_context: '',
        }
    });

    const onSubmit = (data: z.infer<typeof createQuizSchema>) => {
        console.log("Form submitted with data:", data);
        toast.success("Quiz created", {
            description: (
                <div className="text-xs mt-1">
                    <p>Subject: {data.subject}</p>
                    <p>Topic: {data.topic}</p>
                </div>
            ),
        });
        form.reset();
    };

    return (
        <div className="h-full">
            <PageHeading
                title="Create a New Quiz"
                helperText="Use the form below to generate a quiz with AI."
                showBackButton
            />
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Quiz Details</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                        Fill in the information below to generate your quiz.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    name="class_name"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Grade</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
                                                    disabled={form.formState.isSubmitting}
                                                    placeholder="e.g. 5, 6, etc."
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="subject"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    disabled={form.formState.isSubmitting}
                                                    placeholder="e.g. Mathematics, Science, History, etc."
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    name="topic"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Topic</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    disabled={form.formState.isSubmitting}
                                                    placeholder="e.g. Python Basics, JavaScript Fundamentals, etc."
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="num_questions"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Number of Questions</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="number"
                                                    disabled={form.formState.isSubmitting}
                                                    placeholder="e.g. 5"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    name="difficulty"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Difficulty Level</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a difficulty level for quiz" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {Object.keys(Difficulty).map((level) => (
                                                        <SelectItem key={level} value={Difficulty[level as keyof typeof Difficulty]}>
                                                            {level.charAt(0).toUpperCase() + level.slice(1).toLowerCase()}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="deadline"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Deadline</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date < new Date() || date < new Date("1900-01-01")
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name="additional_info_context"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Additional Context (Optional)</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                disabled={form.formState.isSubmitting}
                                                placeholder="e.g. Include questions on Python syntax, data types, etc."
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full"
                                variant="default"
                            >
                                <Lightbulb />
                                {form.formState.isSubmitting ? "Generating Quiz..." : "Generate Quiz with AI"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateQuizPage;
