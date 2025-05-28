"use client"

import * as React from "react";
import { format } from "date-fns";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Quizzes } from "@/lib/data";
import { useIsMobile } from "@/hooks/use-mobile";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group";


const dateMap: Record<string, number> = {};

Quizzes.forEach((quiz) => {
    const formattedDate = format(new Date(quiz.createdAt), "yyyy-MM-dd");
    dateMap[formattedDate] = (dateMap[formattedDate] || 0) + 1;
});

const chartData = Object.entries(dateMap).map(([date, count]) => ({
    date,
    quizzesTaken: count,
    assignmentsSubmitted: 0,
}));

// const chartData = [
//     { date: "2024-04-01", quizzesTaken: 222, assignmentsSubmitted: 150 },
//     { date: "2024-04-02", quizzesTaken: 97, assignmentsSubmitted: 180 },
//     { date: "2024-04-03", quizzesTaken: 167, assignmentsSubmitted: 120 },
//     { date: "2024-04-04", quizzesTaken: 242, assignmentsSubmitted: 260 },
//     { date: "2024-04-05", quizzesTaken: 373, assignmentsSubmitted: 290 },
//     { date: "2024-04-06", quizzesTaken: 301, assignmentsSubmitted: 340 },
//     { date: "2024-04-07", quizzesTaken: 245, assignmentsSubmitted: 180 },
//     { date: "2024-04-08", quizzesTaken: 409, assignmentsSubmitted: 320 },
//     { date: "2024-04-09", quizzesTaken: 59, assignmentsSubmitted: 110 },
//     { date: "2024-04-10", quizzesTaken: 261, assignmentsSubmitted: 190 },
//     { date: "2024-04-11", quizzesTaken: 327, assignmentsSubmitted: 350 },
//     { date: "2024-04-12", quizzesTaken: 292, assignmentsSubmitted: 210 },
//     { date: "2024-04-13", quizzesTaken: 342, assignmentsSubmitted: 380 },
//     { date: "2024-04-14", quizzesTaken: 137, assignmentsSubmitted: 220 },
//     { date: "2024-04-15", quizzesTaken: 120, assignmentsSubmitted: 170 },
//     { date: "2024-04-16", quizzesTaken: 138, assignmentsSubmitted: 190 },
//     { date: "2024-04-17", quizzesTaken: 446, assignmentsSubmitted: 360 },
//     { date: "2024-04-18", quizzesTaken: 364, assignmentsSubmitted: 410 },
//     { date: "2024-04-19", quizzesTaken: 243, assignmentsSubmitted: 180 },
//     { date: "2024-04-20", quizzesTaken: 89, assignmentsSubmitted: 150 },
//     { date: "2024-04-21", quizzesTaken: 137, assignmentsSubmitted: 200 },
//     { date: "2024-04-22", quizzesTaken: 224, assignmentsSubmitted: 170 },
//     { date: "2024-04-23", quizzesTaken: 138, assignmentsSubmitted: 230 },
//     { date: "2024-04-24", quizzesTaken: 387, assignmentsSubmitted: 290 },
//     { date: "2024-04-25", quizzesTaken: 215, assignmentsSubmitted: 250 },
//     { date: "2024-04-26", quizzesTaken: 75, assignmentsSubmitted: 130 },
//     { date: "2024-04-27", quizzesTaken: 383, assignmentsSubmitted: 420 },
//     { date: "2024-04-28", quizzesTaken: 122, assignmentsSubmitted: 180 },
//     { date: "2024-04-29", quizzesTaken: 315, assignmentsSubmitted: 240 },
//     { date: "2024-04-30", quizzesTaken: 454, assignmentsSubmitted: 380 },
//     { date: "2024-05-01", quizzesTaken: 165, assignmentsSubmitted: 220 },
//     { date: "2024-05-02", quizzesTaken: 293, assignmentsSubmitted: 310 },
//     { date: "2024-05-03", quizzesTaken: 247, assignmentsSubmitted: 190 },
//     { date: "2024-05-04", quizzesTaken: 385, assignmentsSubmitted: 420 },
//     { date: "2024-05-05", quizzesTaken: 481, assignmentsSubmitted: 390 },
//     { date: "2024-05-06", quizzesTaken: 498, assignmentsSubmitted: 520 },
//     { date: "2024-05-07", quizzesTaken: 388, assignmentsSubmitted: 300 },
//     { date: "2024-05-08", quizzesTaken: 149, assignmentsSubmitted: 210 },
//     { date: "2024-05-09", quizzesTaken: 227, assignmentsSubmitted: 180 },
//     { date: "2024-05-10", quizzesTaken: 293, assignmentsSubmitted: 330 },
//     { date: "2024-05-11", quizzesTaken: 335, assignmentsSubmitted: 270 },
//     { date: "2024-05-12", quizzesTaken: 197, assignmentsSubmitted: 240 },
//     { date: "2024-05-13", quizzesTaken: 197, assignmentsSubmitted: 160 },
//     { date: "2024-05-14", quizzesTaken: 448, assignmentsSubmitted: 490 },
//     { date: "2024-05-15", quizzesTaken: 473, assignmentsSubmitted: 380 },
//     { date: "2024-05-16", quizzesTaken: 338, assignmentsSubmitted: 400 },
//     { date: "2024-05-17", quizzesTaken: 499, assignmentsSubmitted: 420 },
//     { date: "2024-05-18", quizzesTaken: 315, assignmentsSubmitted: 350 },
//     { date: "2024-05-19", quizzesTaken: 235, assignmentsSubmitted: 180 },
//     { date: "2024-05-20", quizzesTaken: 177, assignmentsSubmitted: 230 },
//     { date: "2024-05-21", quizzesTaken: 82, assignmentsSubmitted: 140 },
//     { date: "2024-05-22", quizzesTaken: 81, assignmentsSubmitted: 120 },
//     { date: "2024-05-23", quizzesTaken: 252, assignmentsSubmitted: 290 },
//     { date: "2024-05-24", quizzesTaken: 294, assignmentsSubmitted: 220 },
//     { date: "2024-05-25", quizzesTaken: 201, assignmentsSubmitted: 250 },
//     { date: "2024-05-26", quizzesTaken: 213, assignmentsSubmitted: 170 },
//     { date: "2024-05-27", quizzesTaken: 420, assignmentsSubmitted: 460 },
//     { date: "2024-05-28", quizzesTaken: 233, assignmentsSubmitted: 190 },
//     { date: "2024-05-29", quizzesTaken: 78, assignmentsSubmitted: 130 },
//     { date: "2024-05-30", quizzesTaken: 340, assignmentsSubmitted: 280 },
//     { date: "2024-05-31", quizzesTaken: 178, assignmentsSubmitted: 230 },
//     { date: "2024-06-01", quizzesTaken: 178, assignmentsSubmitted: 200 },
//     { date: "2024-06-02", quizzesTaken: 470, assignmentsSubmitted: 410 },
//     { date: "2024-06-03", quizzesTaken: 103, assignmentsSubmitted: 160 },
//     { date: "2024-06-04", quizzesTaken: 439, assignmentsSubmitted: 380 },
//     { date: "2024-06-05", quizzesTaken: 88, assignmentsSubmitted: 140 },
//     { date: "2024-06-06", quizzesTaken: 294, assignmentsSubmitted: 250 },
//     { date: "2024-06-07", quizzesTaken: 323, assignmentsSubmitted: 370 },
//     { date: "2024-06-08", quizzesTaken: 385, assignmentsSubmitted: 320 },
//     { date: "2024-06-09", quizzesTaken: 438, assignmentsSubmitted: 480 },
//     { date: "2024-06-10", quizzesTaken: 155, assignmentsSubmitted: 200 },
//     { date: "2024-06-11", quizzesTaken: 92, assignmentsSubmitted: 150 },
//     { date: "2024-06-12", quizzesTaken: 492, assignmentsSubmitted: 420 },
//     { date: "2024-06-13", quizzesTaken: 81, assignmentsSubmitted: 130 },
//     { date: "2024-06-14", quizzesTaken: 426, assignmentsSubmitted: 380 },
//     { date: "2024-06-15", quizzesTaken: 307, assignmentsSubmitted: 350 },
//     { date: "2024-06-16", quizzesTaken: 371, assignmentsSubmitted: 310 },
//     { date: "2024-06-17", quizzesTaken: 475, assignmentsSubmitted: 520 },
//     { date: "2024-06-18", quizzesTaken: 107, assignmentsSubmitted: 170 },
//     { date: "2024-06-19", quizzesTaken: 341, assignmentsSubmitted: 290 },
//     { date: "2024-06-20", quizzesTaken: 408, assignmentsSubmitted: 450 },
//     { date: "2024-06-21", quizzesTaken: 169, assignmentsSubmitted: 210 },
//     { date: "2024-06-22", quizzesTaken: 317, assignmentsSubmitted: 270 },
//     { date: "2024-06-23", quizzesTaken: 480, assignmentsSubmitted: 530 },
//     { date: "2024-06-24", quizzesTaken: 132, assignmentsSubmitted: 180 },
//     { date: "2024-06-25", quizzesTaken: 141, assignmentsSubmitted: 190 },
//     { date: "2024-06-26", quizzesTaken: 434, assignmentsSubmitted: 380 },
//     { date: "2024-06-27", quizzesTaken: 448, assignmentsSubmitted: 490 },
//     { date: "2024-06-28", quizzesTaken: 149, assignmentsSubmitted: 200 },
//     { date: "2024-06-29", quizzesTaken: 103, assignmentsSubmitted: 160 },
//     { date: "2024-06-30", quizzesTaken: 446, assignmentsSubmitted: 400 },
// ]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    quizzesTaken: {
        label: "Quizzes",
        color: "hsl(var(--chart-1))",
    },
    assignmentsSubmitted: {
        label: "Assignments",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
    const isMobile = useIsMobile();
    const [timeRange, setTimeRange] = React.useState("30d");

    React.useEffect(() => {
        if (isMobile) {
            setTimeRange("7d");
        }
    }, [isMobile]);

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date);
        const referenceDate = new Date();
        let daysToSubtract = 90;
        if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        const startDate = new Date(referenceDate);
        startDate.setDate(startDate.getDate() - daysToSubtract);
        return date >= startDate;
    });

    return (
        <Card className="@container/card">
            <CardHeader className="relative">
                <CardTitle>Total Quizzes and Submmisions</CardTitle>
                <CardDescription>
                    <span className="@[540px]/card:block hidden">
                        Total for the last 3 months
                    </span>
                    <span className="@[540px]/card:hidden">Last 3 months</span>
                </CardDescription>
                <div className="absolute right-4 top-4">
                    <ToggleGroup
                        type="single"
                        value={timeRange}
                        onValueChange={setTimeRange}
                        variant="outline"
                        className="@[767px]/card:flex hidden"
                    >
                        <ToggleGroupItem value="90d" className="h-8 px-2.5">
                            Last 3 months
                        </ToggleGroupItem>
                        <ToggleGroupItem value="30d" className="h-8 px-2.5">
                            Last 30 days
                        </ToggleGroupItem>
                        <ToggleGroupItem value="7d" className="h-8 px-2.5">
                            Last 7 days
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <Select value={timeRange} onValueChange={setTimeRange}>
                        <SelectTrigger
                            className="@[767px]/card:hidden flex w-40"
                            aria-label="Select a value"
                        >
                            <SelectValue placeholder="Last 3 months" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                            <SelectItem value="90d" className="rounded-lg">
                                Last 3 months
                            </SelectItem>
                            <SelectItem value="30d" className="rounded-lg">
                                Last 30 days
                            </SelectItem>
                            <SelectItem value="7d" className="rounded-lg">
                                Last 7 days
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={1.0}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-desktop)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-mobile)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-mobile)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                        })
                                    }}
                                    indicator="dot"
                                />
                            }
                        />
                        <Area
                            dataKey="quizzesTaken"
                            type="natural"
                            fill="url(#fillMobile)"
                            stroke="var(--color-mobile)"
                            stackId="a"
                        />
                        <Area
                            dataKey="assignmentsSubmitted"
                            type="natural"
                            fill="url(#fillDesktop)"
                            stroke="var(--color-desktop)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
