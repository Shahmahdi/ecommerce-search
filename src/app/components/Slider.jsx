import { Slider } from "@mui/material";
import React from "react";

export const SliderComponent = (props) => {
  return (
    <Slider
      getAriaLabel={() => props.ariaLabel || "slider"}
      value={props.value}
      onChange={props.onChange}
      onChangeCommitted={props.onChangeCommitted}
      valueLabelDisplay="auto"
      getAriaValueText={(val) => val}
      min={0}
      max={props.maxValue}
      style={{
        color: "#B5C0F5",
      }}
    />
  );
};
