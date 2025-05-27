import { Navbar } from "@/components/navbar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="w-full">
                <Navbar />
                <main className="p-5">
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}

export default MainLayout;
