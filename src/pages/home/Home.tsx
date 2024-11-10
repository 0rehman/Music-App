import SongCardList from "@/components/song-card-list/SongCardList";
import Heading from "@/components/typegraphy/Heading";
import { useGetAlbumsQuery } from "@/store/services/album/AlbumApi";

const Home = () => {
  const data: any = useGetAlbumsQuery();

  console.log("data", data);

  return (
    <main id="home">
      <section>
        <Heading
          className="mb-2 leading-normal"
          headingText="Featured Charts"
          sizes="md"
        />
        <SongCardList />
      </section>
      <section>
        <Heading
          className="mb-2 leading-normal"
          headingText="Today's biggest hits"
          sizes="md"
        />
        <SongCardList />
      </section>
    </main>
  );
};

export default Home;
