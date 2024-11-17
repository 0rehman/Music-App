import mainImg from "@/assets/images/img1.jpg";
import Heading from "@/components/typegraphy/Heading";
import spotifyIcon from "@/assets/images/spotify_logo.png";
import { useSelector } from "react-redux";
import { AlbumData, selectAlbumData } from "@/store/features/album/albumSlice";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { RootState } from "@/store/store";

const AlbumInfo = () => {
  const albumData = useSelector<RootState | AlbumData>(selectAlbumData);
  const [showSkeleton, setShowSkeleton] = useState(true);

  let headingText = albumData?.name;

  useEffect(() => {
    const skeletonTimeOut = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => {
      clearTimeout(skeletonTimeOut);
    };
  }, [albumData]);

  return (
    <>
      {showSkeleton ? (
        <section>
          <Skeleton className="w-full min-h-[230px]" />
        </section>
      ) : (
        <section className="py-[30px]">
          <div className="flex items-end justify-start lg:gap-7 md:gap-5 gap-3 flex-wrap">
            <figure className="img_wrap h-[230px] rounded-sm overflow-hidden">
              <img
                src={albumData?.images?.[0]?.url}
                alt="Reload Page"
                className="h-full w-full object-cover"
              />
            </figure>
            <article className="text_wrap">
              <caption className="mb-1 text-white lg:text-[15px] md:text-[14px] text-[12px] font-medium leading-[1]">
                Playlist
              </caption>
              <Heading
                sizes="lg"
                className="lg:text-[60px] md:text-[55px] sm:text-[50px] text-[40px] !mb-1 leading-[1.4]"
                headingText={headingText}
              />
              <p className="text-white lg:text-[16px] text-[14px] font-medium leading-[1] mb-3">
                {albumData?.label}
              </p>

              <div className="flex items-center gap-2 justify-start">
                <div className="flex items-center justify-start gap-2">
                  <figure className="img_wrap h-5 w-5">
                    <img
                      src={spotifyIcon}
                      alt="Reload Page"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <span className="lg:text-[16px] text-[14px] font-bold text-white">
                    Spotify
                  </span>
                </div>
                <span className="text-white font-medium lg:text-[16px] text-[14px]">
                  {albumData?.popularity} Likes
                </span>
                <span className="text-white font-medium lg:text-[16px] text-[14px]">
                  {albumData?.tracks?.limit} Songs
                </span>
                <span className="text-white font-medium lg:text-[16px] text-[14px]">
                  {albumData?.release_date}
                </span>
              </div>
            </article>
          </div>
        </section>
      )}
    </>
  );
};

export default AlbumInfo;
