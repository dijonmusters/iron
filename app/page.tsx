"use client";

import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const oneDay = 24 * 60 * 60 * 1000;
  const originalIronDay = new Date(2023, 1, 22).getTime();
  const daysSinceOriginalIronDay = Math.round(
    Math.abs((originalIronDay - Date.now()) / oneDay)
  );
  const isIronDay = daysSinceOriginalIronDay % 2 == 0;

  return (
    <main className={`${inter.className} ${styles.main}`}>
      {isIronDay ? <p>Yes.</p> : <p>No.</p>}
    </main>
  );
}
