"use client";

import { useRouter } from "next/navigation";
import { Clock, Construction } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const CommingSoon = () => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-center h-full p-6">
            <Card className="w-full max-w-md text-center">
                <CardHeader>
                    <Construction className="mx-auto text-yellow-500" size={48} />
                    <CardTitle className="text-2xl mt-2">Work In Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                        This page or feature is currently under development. We’re working hard to bring it to you soon!
                    </p>
                    <Clock className="mx-auto text-muted-foreground" size={32} />
                    <Button
                        variant="outline"
                        onClick={() => router.push("/dashboard")}
                    >
                        Go to Dashboard
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default CommingSoon;
