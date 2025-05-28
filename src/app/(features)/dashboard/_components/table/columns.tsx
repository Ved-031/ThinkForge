"use client";

import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Difficulty } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox"

import { RowActionBtn } from "./row-action-btn";
import { DataTableColumnHeader } from "./data-table-column-header";



export type QuizForTable = {
    id: string;
    grade: string;
    subject: string;
    topic: string;
    questions: number;
    difficulty: Difficulty;
    deadline: Date;
}

const DifficultyColorMap: Record<string, string> = {
    [Difficulty.EASY]: "bg-emerald-200/60 text-emerald-500 border-emerald-200",
    [Difficulty.MEDIUM]: "bg-yellow-200/60 text-yellow-500 border-yellow-200",
    [Difficulty.HARD]: "bg-red-200/60 text-red-500 border-red-200"
}

export const columns: ColumnDef<QuizForTable>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "grade",
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title="Grade/Class" />
        },
    },
    {
        accessorKey: "subject",
        header: "Subject",
    },
    {
        accessorKey: "topic",
        header: "Topic",
    },
    {
        accessorKey: "questions",
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title="No. of Questions" />
        },
    },
    {
        accessorKey: "difficulty",
        header: "Difficulty",
        cell: ({ row }) => {
            const difficulty = row.original.difficulty;
            return (
                <Badge variant={"secondary"} className={cn(
                    "capitalize",
                    DifficultyColorMap[difficulty]
                )}>
                    {difficulty.toLowerCase()}
                </Badge>
            )
        }
    },
    {
        accessorKey: "deadline",
        header: ({ column }) => {
            return <DataTableColumnHeader column={column} title="Deadline" />
        },
        cell: ({ row }) => {
            const date = new Date(row.original.deadline);
            const formattedDate = format(date, "PPP");
            return (
                <p>
                    {formattedDate}
                </p>
            )
        },
    },
    {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
            return <RowActionBtn id={row.original.id} />
        },
    },
]
