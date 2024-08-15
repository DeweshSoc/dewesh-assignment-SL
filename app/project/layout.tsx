import SideBar from "@/app/ui/dashboard/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SideBar />
            <div>{children}</div>;
        </>
    );
}
