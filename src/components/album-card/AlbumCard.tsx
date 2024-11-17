import { ROUTES } from "@/navigation";
import { setAlbumData } from "@/store/features/album/albumSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface AlbumCardProps {
  id: string | number;
  name?: string;
  label?: string;
  images?: {
    url: string;
    height: number;
    width: number;
  }[];
}

const AlbumCard = ({ item }: { item: AlbumCardProps }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={ROUTES.album + "/" + item?.id}
      className="song-card max-w-[330px] w-full cursor-pointer opacity-effect"
      onClick={() => dispatch(setAlbumData(item))}
    >
      <figure className="img_wrap lg:mb-4 md:mb-3 h-[220px] w-full">
        <img
          src={item?.images?.[0]?.url}
          alt="Reload Page"
          className="h-full w-full obj  ect-cover object-top"
        />
      </figure>
      <div className="text_wrap">
        <h5 className="lg:text-[18px] md:text-[16px] text-[14px] text-white font-medium capitalize leading-[1] mb-2">
          {item?.name || "Top 50 Globals"}
        </h5>
        <p className="lg:text-[14px] md:text-[13px] text-[12px] font-[400] leading-[1] text-[#dadada] line-clamp text-wrap">
          {item?.label ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil amet voluptas dolorem perspiciatis totam fuga deserunt aut dolores aspernatur."}
        </p>
      </div>
    </Link>
  );
};

export default AlbumCard;
