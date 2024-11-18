import AlbumCardList from "@/components/album-card-list/AlbumCardList";
import SongCardList from "@/components/song-card-list/SongCardList";
import Heading from "@/components/typegraphy/Heading";
import { fetchToken } from "@/constants/apiConstants";
import { selectToken, setToken } from "@/store/features/auth/authSlice";
import { setSongList } from "@/store/features/song-player/songPlayerSlice";
import { useGetAllAlbumsQuery } from "@/store/services/album/getAlbumApi";
import { useGetAllTracksQuery } from "@/store/services/tracks/getTrackApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const {
    isLoading: albumLoading,
    data: albumData,
    error: albumError,
    isSuccess: albumSuccess,
  } = useGetAllAlbumsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const {
    isLoading: trackLoading,
    data: trackData,
    error: trackError,
    isSuccess: trackSuccess,
  } = useGetAllTracksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const setTokenInStore = async () => {
    const responseToken = await fetchToken();
    dispatch(setToken(responseToken));
  };

  useEffect(() => {
    if (!token) {
      setTokenInStore();
    }

    dispatch(setSongList(albumData?.albums));
  }, [albumData]);

  return (
    <main id="home">
      <section>
        <Heading
          className="mb-2 leading-normal"
          headingText="Featured Albums"
          sizes="md"
        />
        <AlbumCardList
          isLoading={albumLoading}
          error={albumError}
          data={albumData?.albums}
          success={albumSuccess}
        />
      </section>
      <section>
        <Heading
          className="mb-2 leading-normal"
          headingText="Today's biggest hits"
          sizes="md"
        />
        <SongCardList
          isLoading={trackLoading}
          error={trackError}
          success={trackSuccess}
          data={trackData?.tracks}
        />
      </section>
    </main>
  );
};

export default Home;
