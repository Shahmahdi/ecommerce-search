import { getData } from "@/app/utilities/apiCaller";

export const getProductList = async () => {
  try {
    const response = await getData("products");
    return {
      status: "success",
      data: response.data
    };
  } catch (error) {
    return {
      status: "fail"
    }
  }
};
