import Link from "next/link";
import { LucideBookOpenText } from "lucide-react";

import { cn } from "@/lib/utils";


interface LogoProps {
    iconClassname?: string;
    titleClassname?: string;
}

export const Logo = ({ iconClassname, titleClassname }: LogoProps) => {
    return (
        <Link href="/" className="flex items-center gap-x-2">
            <LucideBookOpenText
                className={cn(
                    "size-9",
                    iconClassname
                )}
            />
            <span className={cn(
                "font-bold text-3xl",
                titleClassname
            )}>
                Tech<span className="text-teal">Forge</span>
            </span>
        </Link>
    )
}
