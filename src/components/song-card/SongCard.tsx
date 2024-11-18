import mainImg from "@/assets/images/img1.jpg";
import { Button } from "../ui/button";
import playIcon from "@/assets/images/play.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSongMeta,
  selectSongPlaying,
  setShowSongPlayer,
  setSongMeta,
  setSongPlaying,
  setSongToPlay,
} from "@/store/features/song-player/songPlayerSlice";
import pauseIcon from "@/assets/images/pause.png";

interface SongCardProps {
  id?: string | undefined;
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
  preview_url?: string | undefined;
}

const SongCard = ({ item }: { item?: SongCardProps }) => {
  const dispatch = useDispatch();

  const { songPlaying, songId } = useSelector(selectSongPlaying);

  const handlePlaySong = () => {
    dispatch(setShowSongPlayer());
    dispatch(setSongPlaying(item?.id));
    dispatch(setSongToPlay(item?.preview_url));
    dispatch(
      setSongMeta({
        name: item?.name,
        artistName: item?.artists?.[0]?.name,
        image: item?.album?.images?.[0]?.url,
      })
    );
  };

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

      <div className="button_wrap play-button group-hover:flex items-center justify-center hidden absolute inset-0 translate-y-[-25px]">
        <Button
          className="h-[60px] w-[60px] bg-gray-600 bg-opacity-30 backdrop-blur-lg border-none outline-none rounded-full !hover:opacity-1 focus-ring-0"
          variant={"icon"}
          onClick={handlePlaySong}
        >
          {!songPlaying || songId !== item?.id ? (
            <img src={playIcon} alt="Reload Page" />
          ) : (
            <img src={pauseIcon} alt="Reload Page" />
          )}
        </Button>
      </div>
    </article>
  );
};

export default SongCard;
