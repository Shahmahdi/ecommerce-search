import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const NotFound = () => {
  return (
    <Grid container className={styles.notFoundPageWrapper}>
      <Grid xs={12}>
        <p className={styles.notFoundPageTitle}>There is a problem.</p>
        <p className={styles.notFoundPageSubTitle}>We could not find the page you were looking for.</p>
        <p className={styles.notFoundPageSubTitle}>
          Go back to the <Link href={"/"}>Products</Link> page.
        </p>
      </Grid>
    </Grid>
  );
};

export default NotFound;
