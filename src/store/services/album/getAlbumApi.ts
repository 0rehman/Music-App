import { apiSlice } from "../ApiSlice";

const getAlbumApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAlbums: builder.query({
      query: () => ({
        url: "/albums",
        method: "GET",
        params: {
          ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
          market: "US",
        },
      }),
    }),
    getSingleAlbumTracks: builder.query({
      query: ({ albumId }) => ({
        url: `/albums/${albumId}/tracks`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllAlbumsQuery, useGetSingleAlbumTracksQuery } =
  getAlbumApi;
