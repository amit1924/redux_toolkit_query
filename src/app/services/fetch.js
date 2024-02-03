import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define base url and expected endpoints
export const dummyJsonApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    // get all products
    getAllProduct: builder.query({
      query: () => `products/`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products/add`,
        method: "POST",
        headers: { "content-type": "application/json" },
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
} = dummyJsonApi;
