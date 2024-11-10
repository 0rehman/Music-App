import mainImg from "@/assets/images/img1.jpg";
import { Button } from "../ui/button";
import shuffleIcon from "@/assets/images/shuffle.png";
import prevSongIcon from "@/assets/images/prev.png";
import nextSongIcon from "@/assets/images/next.png";
import playIcon from "@/assets/images/play.png";
import loopIcon from "@/assets/images/loop.png";
import micIcon from "@/assets/images/mic.png";
import speakerIcon from "@/assets/images/speaker.png";
import zoomIcon from "@/assets/images/zoom.png";
import queueIcon from "@/assets/images/queue.png";
import miniPlayer from "@/assets/images/mini-player.png";
import playsIcon from "@/assets/images/plays.png";
import audioIcon from "@/assets/images/volume.png";

const SongPlayer = () => {
  return (
    <div className="song-player fixed bottom-0 left-0 right-0 w-full py-4 min-h-[120px] flex items-center justify-center bg-secondary lg:px-6 px-4">
      <div className="min-h-full w-full flex items-center justify-between gap-10">
        <div className="flex items-center gap-4 max-w-[353px] w-full">
          <figure className="img_wrap h-[70px] w-[70px] rounded-md overflow-hidden">
            <img
              src={mainImg}
              alt="Reload Page"
              className="h-full w-full object-cover"
            />
          </figure>
          <article className="flex items-start justify-start gap-1 flex-col">
            <span className="text-white font-medium lg:text-[20px] text-[14px] leading-[1]">
              Song One
            </span>
            <span className="text-white font-medium lg:text-[16px] text-[12px]">
              Put a smile
            </span>
          </article>
        </div>

        <div className="song-player-control flex-1">
          <div className="flex items-center justify-center gap-5">
            <div className="button_wrap">
              <Button variant={"icon"} size="icon" className="!bg-none">
                <figure className="img_wrap h-5 w-5">
                  <img
                    src={shuffleIcon}
                    alt="Reload Page"
                    className="w-full h-full"
                  />
                </figure>
              </Button>
            </div>
            <div className="button_wrap">
              <Button variant={"icon"} size="icon" className="!bg-none">
                <figure className="img_wrap h-5 w-5">
                  <img
                    src={prevSongIcon}
                    alt="Reload Page"
                    className="w-full h-full"
                  />
                </figure>
              </Button>
            </div>
            <div className="button_wrap">
              <Button variant={"icon"} size="icon" className="!bg-none">
                <figure className="img_wrap h-5 w-5">
                  <img
                    src={playIcon}
                    alt="Reload Page"
                    className="w-full h-full"
                  />
                </figure>
              </Button>
            </div>
            <div className="button_wrap">
              <Button variant={"icon"} size="icon" className="!bg-none">
                <figure className="img_wrap h-5 w-5">
                  <img
                    src={nextSongIcon}
                    alt="Reload Page"
                    className="w-full h-full"
                  />
                </figure>
              </Button>
            </div>
            <div className="button_wrap">
              <Button variant={"icon"} size="icon" className="!bg-none">
                <figure className="img_wrap h-5 w-5">
                  <img
                    src={loopIcon}
                    alt="Reload Page"
                    className="w-full h-full"
                  />
                </figure>
              </Button>
            </div>
          </div>

          <div className="song-player-control-wrapper">
            <input
              type="range"
              className="song-progress-bar"
              defaultValue="50"
            />
          </div>
        </div>

        <div className="other-controls flex items-center justify-center gap-3">
          <div className="button_wrap">
            <Button variant={"icon"} size="icon" className="!bg-none">
              <figure className="img_wrap h-5 w-5">
                <img
                  src={playsIcon}
                  alt="Reload Page"
                  className="w-full h-full"
                />
              </figure>
            </Button>
          </div>
          <div className="button_wrap">
            <Button variant={"icon"} size="icon" className="!bg-none">
              <figure className="img_wrap h-5 w-5">
                <img
                  src={micIcon}
                  alt="Reload Page"
                  className="w-full h-full"
                />
              </figure>
            </Button>
          </div>
          <div className="button_wrap">
            <Button variant={"icon"} size="icon" className="!bg-none">
              <figure className="img_wrap h-5 w-5">
                <img
                  src={queueIcon}
                  alt="Reload Page"
                  className="w-full h-full"
                />
              </figure>
            </Button>
          </div>
          <div className="button_wrap">
            <Button variant={"icon"} size="icon" className="!bg-none">
              <figure className="img_wrap h-5 w-5">
                <img
                  src={speakerIcon}
                  alt="Reload Page"
                  className="w-full h-full"
                />
              </figure>
            </Button>
          </div>
          <div className="button_wrap">
            <Button variant={"icon"} size="icon" className="!bg-none">
              <figure className="img_wrap h-5 w-5">
                <img
                  src={audioIcon}
                  alt="Reload Page"
                  className="w-full h-full"
                />
              </figure>
            </Button>
          </div>
          <div className="w-full">
            <div className="song-player-control-wrapper w-full">
              <input
                type="range"
                className="song-progress-bar !w-full !mt-0"
                defaultValue="50"
              />
            </div>
          </div>
          <div className="button_wrap">
            <Button variant={"icon"} size="icon" className="!bg-none">
              <figure className="img_wrap h-5 w-5">
                <img
                  src={miniPlayer}
                  alt="Reload Page"
                  className="w-full h-full"
                />
              </figure>
            </Button>
          </div>
          <div className="button_wrap">
            <Button variant={"icon"} size="icon" className="!bg-none">
              <figure className="img_wrap h-5 w-5">
                <img
                  src={zoomIcon}
                  alt="Reload Page"
                  className="w-full h-full"
                />
              </figure>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
