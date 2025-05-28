import { BookCheck, Mic, TrendingUpIcon, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function SectionCards() {
    return (
        <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
            <Card className="@container/card">
                <CardHeader className="relative">
                    <CardDescription>Total Quizzes</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        3
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                        <Badge variant="outline" className="rounded-lg text-xs">
                            <TrendingUpIcon className="size-3" />
                        </Badge>
                    </div>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm text-muted-foreground">
                    No quizzes completed yet
                </CardFooter>
            </Card>
            <Card className="@container/card">
                <CardHeader className="relative">
                    <CardDescription>Students Attempted</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        0
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                        <Badge variant="outline" className="rounded-lg text-xs">
                            <Users className="size-3" />
                        </Badge>
                    </div>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm text-muted-foreground">
                    No student has attempted any quiz yet
                </CardFooter>
            </Card>
            <Card className="@container/card">
                <CardHeader className="relative">
                    <CardDescription>Assignments Reviewed (Mock)</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        3
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                        <Badge variant="outline" className="rounded-lg text-xs">
                            <BookCheck className="size-3" />
                        </Badge>
                    </div>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm text-muted-foreground">
                    No assignments reviewed yet
                </CardFooter>
            </Card>
            <Card className="@container/card">
                <CardHeader className="relative">
                    <CardDescription>Oral Tests Simulated (Mock)</CardDescription>
                    <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                        2
                    </CardTitle>
                    <div className="absolute right-4 top-4">
                        <Badge variant="outline" className="rounded-lg text-xs">
                            <Mic className="size-3" />
                        </Badge>
                    </div>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1 text-sm text-muted-foreground">
                    No oral test simulated yet
                </CardFooter>
            </Card>
        </div>
    )
}
