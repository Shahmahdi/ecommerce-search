import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import "../styles.css";
import { CategoryList } from "@/app/config/Config";

export const CategoryFilter = (props) => {
  const onChange = (e, key) => {
    if (!e.target.checked) {
      delete props.categoryFilterOptions[key];
      props.setCategoryFilterOptions({
        ...props.categoryFilterOptions
      });
      return;
    }
    props.setCategoryFilterOptions({
      ...props.categoryFilterOptions,
      [key]: e.target.checked,
    });
  };

  return (
    <FormGroup className="category-options">
      {CategoryList.map((category) => (
        <FormControlLabel
          key={category.label}
          control={
            <Checkbox
              className="category-option-checkbox"
              onChange={(e) => onChange(e, category.value)}
            />
          }
          label={category.label}
        />
      ))}
    </FormGroup>
  );
};
