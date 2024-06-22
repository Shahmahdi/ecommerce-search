import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const LoadingSkeleton = () => {
  return (
    <Grid container  alignItems={"center"} justifyContent={"center"} style={{ marginTop: "50px"}}>
      <Grid xs={12} md={4}>
        <Box sx={{ width: 210, margin: "auto", marginBottom: "16px" }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
      <Grid xs={12} md={4}>
        <Box sx={{ width: 210, margin: "auto", marginBottom: "16px" }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
      <Grid xs={12} md={4}>
        <Box sx={{ width: 210, margin: "auto", marginBottom: "16px" }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoadingSkeleton;
