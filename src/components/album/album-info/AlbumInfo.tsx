import mainImg from "@/assets/images/img1.jpg";
import Heading from "@/components/typegraphy/Heading";
import spotifyIcon from "@/assets/images/spotify_logo.png";

const AlbumInfo = () => {
  return (
    <section className="py-[30px]">
      <div className="flex items-end justify-start lg:gap-7 md:gap-5 gap-3 flex-wrap">
        <figure className="img_wrap h-[230px] rounded-sm overflow-hidden">
          <img
            src={mainImg}
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
            className="lg:text-[80px] md:text-[55px] sm:text-[30px] text-[25px] !mb-1 leading-[1.4]"
            headingText="Top 50 Global"
          />
          <p className="text-white lg:text-[16px] text-[14px] font-medium leading-[1] mb-3">
            Your Weekly update of the most played tracks
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
            <span className="text-white font-medium lg:text-[16px] text-[14px]">.1,323,154 likes</span>
            <span className="text-white font-medium lg:text-[16px] text-[14px]">.50 Songs</span>
            <span className="text-white font-medium lg:text-[16px] text-[14px]">.about .2hr 30min</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AlbumInfo;
