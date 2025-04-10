import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "post",
    }),
  }),
});
