import Head from "next/head";
import QuerySection from "../components/Home/Query.js";
import DataSection from "../components/Home/Data.js";
import GraphSection from "../components/Home/Graph.js";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <text className={styles.headerText}>Live Sports Fan Analysis </text>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.querySection}>
          <QuerySection />
        </div>
        <div className={styles.dataSection}>
          <DataSection />
        </div>
        <div className={styles.graphSection}>
          <GraphSection />
        </div>
      </div>
    </div>
  );
}
