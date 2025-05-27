import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            Landing Page - To be implemented
            <Link href="/dashboard" className="mt-5">
                <Button>
                    Go to Dashboard
                </Button>
            </Link>
        </div>
    );
}
