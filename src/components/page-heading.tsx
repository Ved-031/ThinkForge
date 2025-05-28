"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";


interface PageHeadingProps {
    title: string;
    helperText?: string;
    showBackButton?: boolean;
}

export const PageHeading = ({ title, helperText, showBackButton=false }: PageHeadingProps) => {
    const router = useRouter();
    return (
        <div className="flex items-center gap-2">
            {showBackButton && (
                <Button
                    variant={"outline"}
                    size={"icon"}
                    onClick={() => router.back()}
                >
                    <ChevronLeft size={16} />
                </Button>
            )}
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-muted-foreground text-sm">{helperText}</p>
            </div>
        </div>
    )
}
