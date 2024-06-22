import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import styles from "../../page.module.css";
import { SearchField } from "./components/SearchField";

export const Navbar = () => (
  <AppBar position="static" className={styles.appBar}>
    <Toolbar className={styles.appBarWrapper}>
      <Typography variant="h6" component="div" className={styles.companyName}>
        E-commerce
      </Typography>
      <SearchField />
    </Toolbar>
  </AppBar>
);
