import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SongCard from "../song-card/SongCard";
import { settings } from "@/constants";
import { Skeleton } from "../ui/skeleton";

interface SongCardListProps {
  isLoading: boolean | undefined;
  error: any;
  data?: any;
  success: boolean | undefined;
}

const SongCardList = ({
  isLoading,
  error,
  data,
  success,
}: SongCardListProps) => {
  let songContent;

  if (isLoading) {
    songContent = Array.from({ length: 6 }).map((_, index) => {
      return (
        <Skeleton key={index} className="w-[300px] h-[300px] rounded-md" />
      );
    });
  } else if (error) {
    songContent = <div className="text-white text-[14px]">error</div>;
  } else if (success && data?.length) {
    songContent = data?.map((item: any, index: number) => {
      return <SongCard item={item} key={index} />;
    });
  }

  return (
    <div id="media-list">
      <div className="song-card-list-wrapper">
        {success && data?.length ? (
          <Slider {...settings}>{songContent}</Slider>
        ) : (
          <div className="flex items-center justify-center gap-2">
            {songContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default SongCardList;
