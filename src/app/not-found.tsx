"use client";

import Link from "next/link";
import { Ghost, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";


export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-[80vh] p-6">
            <div className="text-center space-y-6 max-w-md">
                <Ghost className="mx-auto text-muted-foreground" size={64} />
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="text-muted-foreground">
                    The page you&apos;re looking for doesn&apos;t exist or might have been moved.
                </p>
                <Button asChild>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}
