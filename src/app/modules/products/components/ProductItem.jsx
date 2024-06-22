import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const ProductItem = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="product-item-wrapper">
      <CardMedia
        sx={{ objectFit: "contain" }}
        image={props.item.image}
        title="green iguana"
        component="img"
        height="250"
      />
      <CardContent className="product-item-content">
        <Typography gutterBottom variant="h5" component="div" className="product-item-title">
          {props.item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="product-item-description">
          {props.item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="product-item-price">
          {props.item.price}৳
        </Typography>
      </CardContent>
    </Card>
  );
};
