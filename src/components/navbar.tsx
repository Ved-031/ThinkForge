import Link from "next/link";
import { LogOut, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { UserAvatar } from "@/components/user-avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";


export const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full h-13 md:h-16 px-3 border-b border-b-gray-200">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
                <Badge>
                    Teacher
                </Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer" asChild>
                        <UserAvatar fallBack="JD" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/profile">
                                <User className="size-4" />
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="">
                            <LogOut className="size-4 text-rose-500" />
                            <span className="text-rose-500 hover:text-rose-500">Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div >
    )
}
