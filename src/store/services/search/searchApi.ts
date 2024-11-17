import { apiSlice } from "../ApiSlice";

const searchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSearchResult: builder.query({
      query: ({ searchQuery }) => ({
        url: "/search",
        method: "GET",
        params: {
          q: searchQuery,
          type: "track",
          limit: 50,
          offset: 5
        },
      }),
    }),
  }),
});

export const { useGetSearchResultQuery } = searchApi;
