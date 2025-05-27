"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NavItems, user } from "@/lib/data";

import { Logo } from "@/components/logo";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { SidebarUser } from "./sidebar-user";


export const AppSidebar = () => {

    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarHeader className="pt-5 flex items-center justify-center">
                <Logo iconClassname="size-7 md:size-9" titleClassname="text-2xl" />
            </SidebarHeader>
            <SidebarContent className="pt-2">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-[2px]">
                            {NavItems.map((item) => (
                                <SidebarMenuItem
                                    key={item.title}
                                    className={cn(
                                        "hover:bg-teal/90 rounded-md",
                                        pathname.includes(item.url) && "bg-teal text-white font-medium transition"
                                    )}
                                >
                                    <SidebarMenuButton className="hover:bg-teal/50 hover:text-white" asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarUser user={user} />
            </SidebarFooter>
        </Sidebar>
    )
}
