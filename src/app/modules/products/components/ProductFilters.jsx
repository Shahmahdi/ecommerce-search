import React from "react";
import { PriceFilter } from "./PriceFilter";
import "../styles.css";
import { CategoryFilter } from "./CategoryFilter";

export const ProductFilters = (props) => {
  return (
    <div className="filter-wrapper">
      <div className="category-filter">
        <p className="filter-title">Categories:</p>
        <CategoryFilter
          categoryFilterOptions={props.categoryFilterOptions}
          setCategoryFilterOptions={props.setCategoryFilterOptions}
        />
      </div>
      <div>
        <p className="filter-title">Price range</p>
        <PriceFilter
          setPriceRangeFilter={props.setPriceRangeFilter}
          maxPrice={props.maxPrice}
        />
      </div>
    </div>
  );
};
