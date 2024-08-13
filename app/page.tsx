import styles from "./page.module.css";
import {Welcome , Login} from "@/app/ui/home"


export default function Page() {
  return (
    <main className={styles.main}>
        <Welcome/>
        <Login/>
    </main>
  );
}
