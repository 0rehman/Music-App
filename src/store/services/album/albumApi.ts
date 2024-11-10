import { apiSlice } from "../ApiSlice";

const albumSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: () => "/albums",
    }),
  }),
});

export const { useGetAlbumsQuery } = albumSlice;
