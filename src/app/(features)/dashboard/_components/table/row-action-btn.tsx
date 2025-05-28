"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CircleHelp, ListCheck, MoreHorizontal, SquarePen, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteQuizDialog } from "@/app/(features)/quizzes/_components/delete-quiz-dialog";


export const RowActionBtn = ({ id }: { id: string }) => {
    const router = useRouter();
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    return (
        <>
            <DeleteQuizDialog open={openDeleteDialog} onOpen={setOpenDeleteDialog} />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => router.push(`/quiz/${id}`)}>
                        <CircleHelp className="size-3" />
                        Solve
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/quiz/${id}/submissions`)}>
                        <ListCheck className="size-3" />
                        Submissions
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push(`/quiz/${id}/edit`)}>
                        <SquarePen className="size-3" />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setOpenDeleteDialog(true)}
                    >
                        <div className="text-destructive hover:text-red-500 flex items-center gap-1">
                            <Trash className="text-destructive size-3" />
                            Delete
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

