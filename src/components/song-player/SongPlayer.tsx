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
import pauseIcon from "@/assets/images/pause.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectShowSongPlayer,
  selectSongList,
  selectSongMeta,
  selectSongPlaying,
  selectSongToPlay,
  setSongPlaying,
} from "@/store/features/song-player/songPlayerSlice";
import { useEffect, useState } from "react";

interface SongMeta {
  songImage: string;
  songArtistName: string;
  songName: string;
}

const SongPlayer = () => {
  const dispatch = useDispatch();
  const showSongPlayer = useSelector(selectShowSongPlayer);
  const isSongPlaying = useSelector(selectSongPlaying);
  const songPath = useSelector(selectSongToPlay);
  const songList = useSelector(selectSongList);

  const { songImage, songArtistName, songName }: SongMeta =
    useSelector(selectSongMeta);

  const [volume, setVolume] = useState(1);
  const [songPlayedValue, setSongPlayedValue] = useState(0);
  const [audio] = useState(new Audio());
  const [randomSong, setRandomSong] = useState(0);

  const handleSongPlay = () => {
    dispatch(setSongPlaying(isSongPlaying?.songId));
  };

  const handleChangeSong = () => {
    setRandomSong(Math.round(Math.random() * songList.length));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audio.volume = newVolume;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setSongPlayedValue(newTime);
    audio.currentTime = newTime;
  };

  useEffect(() => {
    if (songPath) {
      audio.src = songPath;
      console.log("song path", songPath);
    }

    if (isSongPlaying.songPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    const timeUpdateEvent = () => {
      setSongPlayedValue(audio.currentTime);
      if (audio.currentTime === audio.duration) {
        setRandomSong(Math.round(Math.random() * songList.length));
      }
    };
    audio.addEventListener("timeupdate", timeUpdateEvent);

    return () => {
      audio.removeEventListener("timeupdate", timeUpdateEvent);
    };
  }, [songPath, isSongPlaying.songPlaying]);

  useEffect(() => {
    if (randomSong) {
      audio.src = songList[randomSong];
      audio.play();
    }

    const timeUpdateEvent = () => {
      setSongPlayedValue(audio.currentTime);
    };

    audio.addEventListener("timeupdate", timeUpdateEvent);

    return () => {
      audio.removeEventListener("timeupdate", timeUpdateEvent);
    };
  }, [randomSong]);

  return (
    <>
      {showSongPlayer && (
        <div className="song-player fixed bottom-0 left-0 right-0 w-full py-4 min-h-[120px] flex items-center justify-center bg-secondary lg:px-6 px-4">
          <div className="min-h-full w-full flex items-center justify-between gap-10">
            <div className="flex items-center gap-4 max-w-[353px] w-full">
              <figure className="img_wrap h-[70px] w-[70px] rounded-md overflow-hidden">
                <img
                  src={songImage || mainImg}
                  alt="Reload Page"
                  className="h-full w-full object-cover"
                />
              </figure>
              <article className="flex items-start justify-start gap-1 flex-col">
                <span className="text-white font-medium lg:text-[20px] text-[14px] leading-[1]">
                  {songName || "I Feel it Coming"}
                </span>
                <span className="text-white font-medium lg:text-[16px] text-[12px]">
                  {songArtistName || "Weekend"}
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
                  <Button
                    onClick={handleChangeSong}
                    variant={"icon"}
                    size="icon"
                    className="!bg-none"
                  >
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
                  <Button
                    variant={"icon"}
                    size="icon"
                    className="!bg-none"
                    onClick={handleSongPlay}
                  >
                    <figure className="img_wrap h-5 w-5">
                      <img
                        src={!isSongPlaying.songPlaying ? playIcon : pauseIcon}
                        alt="Reload Page"
                        className="w-full h-full"
                      />
                    </figure>
                  </Button>
                </div>
                <div className="button_wrap">
                  <Button
                    onClick={handleChangeSong}
                    variant={"icon"}
                    size="icon"
                    className="!bg-none"
                  >
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
                  min={0}
                  max={audio.duration}
                  value={songPlayedValue}
                  onChange={handleProgressChange}
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
                    defaultValue="1"
                    value={volume}
                    onChange={handleVolumeChange}
                    min={0}
                    max={1}
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
      )}
    </>
  );
};

export default SongPlayer;
