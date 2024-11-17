import mainImg from "@/assets/images/img1.jpg";
import { Button } from "../ui/button";
import playIcon from "@/assets/images/play.png";

interface SongCardProps {
  name?: string;
  artists?: {
    id: string;
    name: string;
  }[];
  album?: {
    images?: {
      url: string;
      height: number;
      width: number;
    }[];
  };
}

const SongCard = ({ item }: { item?: SongCardProps }) => {
  return (
    <article className="song-card max-w-[330px] w-full cursor-pointer relative group">
      <figure className="img_wrap lg:mb-4 md:mb-3 h-[220px] w-full overflow-hidden">
        <img
          src={item?.album?.images?.[0]?.url || mainImg}
          alt="Reload Page"
          className="h-full w-full object-cover object-top group-hover:scale-[1.1] duration-300 transition-all"
        />
      </figure>
      <div className="text_wrap">
        <h5 className="lg:text-[18px] md:text-[16px] text-[14px] text-white font-medium capitalize leading-[1] mb-2">
          {item?.name || "Top 50 Globals"}
        </h5>
        <p className="lg:text-[14px] md:text-[13px] text-[12px] font-[400] leading-[1] text-[#dadada] line-clamp text-wrap">
          {item?.artists?.[0]?.name ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil amet voluptas dolorem perspiciatis totam fuga deserunt aut dolores aspernatur."}
        </p>
      </div>

      <div className="button_wrap play-button group-hover:block hidden absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Button
          className="h-[60px] w-[60px] bg-gray-600 bg-opacity-30 backdrop-blur-lg rounded-full !hover:opacity-1"
          variant={"icon"}
        >
          <img src={playIcon} alt="Reload Page" />
        </Button>
      </div>
    </article>
  );
};

export default SongCard;
