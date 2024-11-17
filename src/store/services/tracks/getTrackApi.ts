import { apiSlice } from "../ApiSlice";

const getTrackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: "/tracks",
        method: "GET",
        params: {
          ids: "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
        },
      }),
    }),
  }),
});

export const { useGetAllTracksQuery } = getTrackApi;
