import Nav from "@/app/ui/dashboard/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            <div>{children}</div>;
        </>
    );
}
