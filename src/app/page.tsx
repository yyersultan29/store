import { Fragment } from "react";
import styles from "./header.module.css";
import { Button } from "@/components/button/button";

export default function Home() {
  return (
    <Fragment >
      <header className={styles.header}>
        <h1 className={styles["header-title"]}>FASCO</h1>
        <div className={styles["header-links-group"]}>
          <nav className={styles["header-nav"]}>
            <li>Home</li>
            <li>Deals</li>
            <li>New Arrivals</li>
            <li>Packages</li>
            <li>Sign in</li>
          </nav>
          <Button className={''} size="m">Sign Up</Button>

        </div>
      </header>
    </Fragment>
  );
}
