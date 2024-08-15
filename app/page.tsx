"use client"

import { useEffect } from "react";
import useAuth from "./lib/userContext";
import styles from "./page.module.css";
import {Welcome , Login} from "@/app/ui/home"
import { useRouter } from "next/navigation";


export default function Page() {

  const {isAuthenticated} = useAuth();
  const router = useRouter();

  useEffect(()=>{
    if(isAuthenticated()){
      router.push("/dashboard");
    }
  },[])

  return (
    <main className={styles.main}>
        <Welcome/>
        <Login/>
    </main>
  );
}
