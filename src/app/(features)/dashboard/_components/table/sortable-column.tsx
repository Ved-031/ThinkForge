import { ArrowUpDown } from "lucide-react";

import { Column } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import { QuizForTable } from "./columns";


export const SortableColumn = ({ text, column }: { text: string, column: Column<QuizForTable, unknown> }) => {
    return (
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {text}
            <ArrowUpDown className="h-4 w-4" />
        </Button>
    )
}

