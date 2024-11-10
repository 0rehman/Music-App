import SongCard from "@/components/song-card/SongCard";
import Heading from "@/components/typegraphy/Heading";

const Home = () => {
  return (
    <main id="home">
      <section>
        <Heading className="mb-2 leading-normal" headingText="Heading" sizes="md" />
        <SongCard />
      </section>
    </main>
  );
};

export default Home;
