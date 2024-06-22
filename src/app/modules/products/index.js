"use client";

import React, { useEffect, useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { getProductList } from "./actions";
import { ProductItem } from "./components/ProductItem";
import LoadingSkeleton from "./components/LoadingSkeleton";
import "./styles.css";
import { ProductFilters } from "./components/ProductFilters";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "@/app/redux/slices/ProductSlice";

const itemsPerPage = 10;

export const ProductPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [categoryFilterOptions, setCategoryFilterOptions] = useState({});
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 20]);
  const [maxProductPrice, setMaxProductPrice] = useState(0);
  const [page, setPage] = React.useState(1);
  const productReducer = useSelector((state) => state.product);

  const getProducts = async () => {
    setError(false);
    const res = await getProductList();
    if (res.status === "fail") {
      setError(true);
    } else {
      setProducts(res.data);
      dispatch(
        setProductList({
          list: res.data,
        })
      );
      const highestPrice = Math.max(
        ...res.data.map((val) => Math.ceil(val.price))
      );
      setMaxProductPrice(highestPrice);
      setPriceRangeFilter([0, highestPrice]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const categoryKeys = Object.keys(categoryFilterOptions);
    let updatedList = [];
    if (categoryKeys.length > 0) {
      updatedList = productReducer.list.filter(
        (item) =>
          categoryKeys.some((v) => item.category.includes(v)) &&
          item.price > priceRangeFilter[0] &&
          item.price < priceRangeFilter[1]
      );
    } else {
      updatedList = productReducer.list.filter(
        (item) =>
          item.price > priceRangeFilter[0] && item.price < priceRangeFilter[1]
      );
    }
    if (productReducer.searchText !== "") {
      updatedList = updatedList.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(productReducer.searchText.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(productReducer.searchText.toLowerCase())
      );
    }
    setPage(1);
    setProducts(updatedList);
  }, [
    categoryFilterOptions,
    priceRangeFilter,
    productReducer.list,
    productReducer.searchText,
  ]);

  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return loading ? (
    <LoadingSkeleton />
  ) : error ? (
    <p className="error-message">
      Something went wrong. Please try again later.
    </p>
  ) : (
    <Grid container className="wrapper">
      <Grid item xs={12} md={2}>
        <ProductFilters
          categoryFilterOptions={categoryFilterOptions}
          setCategoryFilterOptions={setCategoryFilterOptions}
          setPriceRangeFilter={setPriceRangeFilter}
          maxPrice={maxProductPrice}
        />
      </Grid>
      <Grid item xs={12} md={10}>
        <Grid container>
          {productReducer.searchText && (
            <Grid xs={12} className="item-wrapper">
              <p className="search-text">{`Search result for ${productReducer.searchText}`}</p>
            </Grid>
          )}
          {products.length === 0 && (
            <Grid xs={12} className="item-wrapper">
              <p className="no-product-text">No product available</p>
            </Grid>
          )}
          {products.length > 0 && (
            <>
              {paginatedProducts.map((item) => (
                <Grid
                  key={item.id}
                  xs={12}
                  sm={6}
                  md={4}
                  className="item-wrapper"
                >
                  <ProductItem item={item} />
                </Grid>
              ))}
              <Grid xs={12} container justifyContent={"center"}>
                <Pagination
                  count={Math.ceil(products.length / itemsPerPage)}
                  page={page}
                  onChange={(e, value) => {
                    setPage(value);
                  }}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
