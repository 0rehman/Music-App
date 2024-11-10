import mainImg from "@/assets/images/img1.jpg";

const SongCard = () => {
  return (
    <article className="song-card max-w-[330px] w-full cursor-pointer">
      <figure className="img_wrap lg:mb-4 md:mb-3 h-[220px] w-full">
        <img
          src={mainImg}
          alt="Reload Page"
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="text_wrap">
        <h5 className="lg:text-[18px] md:text-[16px] text-[14px] text-white font-medium capitalize leading-[1] mb-2">
          Top 50 Globals
        </h5>
        <p className="lg:text-[14px] md:text-[13px] text-[12px] font-[400] leading-[1] text-[#dadada] truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil
          amet voluptas dolorem perspiciatis totam fuga deserunt aut dolores
          aspernatur.
        </p>
      </div>
    </article>
  );
};

export default SongCard;
