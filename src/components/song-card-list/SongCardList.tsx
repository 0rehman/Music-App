import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SongCard from "../song-card/SongCard";
import { settings, slideListOne } from "@/constants";

const SongCardList = () => {
  return (
    <div id="media-list">
      <div className="song-card-list-wrapper">
        <Slider {...settings}>
          {slideListOne.map((item, index) => {
            return <SongCard key={index} item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SongCardList;
