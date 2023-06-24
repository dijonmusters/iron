import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 0;

export default function Home() {
  const oneDay = 24 * 60 * 60 * 1000;
  const todate = new Date(
    new Date().toLocaleString("en", { timeZone: "Australia/Melbourne" })
  );
  const today = todate.setHours(0, 0, 0, 0);
  const originalIronDay = new Date(
    new Date(2023, 1, 23, 0, 0, 0, 0).toLocaleString("en", {
      timeZone: "Australia/Melbourne",
    })
  ).getTime();
  // const today = new Date().setHours(0, 0, 0, 0);
  const daysSinceOriginalIronDay = Math.round(
    Math.abs((originalIronDay - today) / oneDay)
  );
  const isIronDay = daysSinceOriginalIronDay % 2 == 0;

  return (
    <main className={`${inter.className} ${styles.main}`}>
      {isIronDay ? <p>Yes.</p> : <p>No.</p>}
    </main>
  );
}
