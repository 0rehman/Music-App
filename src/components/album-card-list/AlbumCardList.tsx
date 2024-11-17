import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "@/constants";
import AlbumCard from "../album-card/AlbumCard";
import { Skeleton } from "../ui/skeleton";

interface AlbumCardListProps {
  isLoading: boolean | undefined;
  error: any;
  data: any;
  success: boolean | undefined;
}

const AlbumCardList = ({
  isLoading,
  error,
  data,
  success,
}: AlbumCardListProps) => {
  let albumCardContent;

  if (isLoading) {
    albumCardContent = Array.from({ length: 6 }).map((_, index) => {
      return (
        <Skeleton key={index} className="w-[300px] h-[300px] rounded-md" />
      );
    });
  } else if (error) {
    albumCardContent = "We are having an error";
  } else if (success && Array.isArray(data)) {
    albumCardContent = data?.map((item: any, index: number) => (
      <AlbumCard key={index} item={item} />
    ));
  } else {
    albumCardContent = <p className="text-white">No albums available</p>;
  }

  return (
    <div id="album-card-list">
      <div className="album-card-list-wrapper">
        {success && data?.length ? (
          <Slider {...settings} key={data?.length}>
            {albumCardContent}
          </Slider>
        ) : (
          <div className="flex items-center justify-center gap-2">{albumCardContent}</div>
        )}
      </div>
    </div>
  );
};

export default AlbumCardList;
