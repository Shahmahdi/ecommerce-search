"use client";

import { AppBar, InputBase, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setSearchText } from "@/app/redux/slices/ProductSlice";
import styles from "../../page.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff26",
  "&:hover": {
    backgroundColor: "#ffffff26",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

export const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.appBarWrapper}>
        <Typography variant="h6" component="div" className={styles.companyName}>
          E-commerce
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                dispatch(
                  setSearchText({
                    searchText: e.target.value,
                  })
                );
              }
            }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};
