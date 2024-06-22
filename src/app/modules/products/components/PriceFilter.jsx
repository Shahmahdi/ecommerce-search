"use client"

import React, { useState } from "react";
import "../styles.css";
import { SliderComponent } from "@/app/components/Slider";

export const PriceFilter = (props) => {
  const [value, setValue] = useState([0, props.maxPrice]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleChangeComitted = (e, newValue) => {
    props.setPriceRangeFilter(newValue);
  };

  return (
    <div className="price-range-slider-wrapper">
      <SliderComponent
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChangeComitted}
        ariaLabel={"price range"}
        maxValue={props.maxPrice}
      />
    </div>
  );
};
