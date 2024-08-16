import SideBar from "@/app/ui/project/SideBar";
import styles from "./page.module.css"
import Nav from "../ui/project/Nav";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.main}>
            <SideBar />
            <div className={styles.outlet}>
                <Nav projectTitle="Sample Project" currentOption="Add your padcast"></Nav>
                {children}
            </div>
        </main>
    );
}
