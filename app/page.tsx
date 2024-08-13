import Image from "next/image";
import styles from "./page.module.css";
import {Welcome , Login} from "@/app/ui/home"


export default function Home() {
  return (
    <main className={styles.main}>
        <Welcome/>
        <Login/>
    </main>
  );
}
