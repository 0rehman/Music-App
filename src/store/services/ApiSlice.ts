import { baseUrl } from "@/constants/apiConstants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "31bf550e92mshb288d3f8e8bb020p17d1b3jsn56763dfd19be"
      );

      headers.set("x-rapidapi-host", "shazam.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export { apiSlice };
