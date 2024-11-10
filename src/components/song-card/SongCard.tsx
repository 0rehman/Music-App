interface SongCardProps {
  title?: string;
  desc?: string;
  image?: string;
}

const SongCard = ({ item }: { item: SongCardProps }) => {
  const { title, desc, image } = item;
  return (
    <article className="song-card max-w-[330px] w-full cursor-pointer opacity-effect">
      <figure className="img_wrap lg:mb-4 md:mb-3 h-[220px] w-full">
        <img
          src={image}
          alt="Reload Page"
          className="h-full w-full object-cover object-top"
        />
      </figure>
      <div className="text_wrap">
        <h5 className="lg:text-[18px] md:text-[16px] text-[14px] text-white font-medium capitalize leading-[1] mb-2">
          {title || "Top 50 Globals"}
        </h5>
        <p className="lg:text-[14px] md:text-[13px] text-[12px] font-[400] leading-[1] text-[#dadada] line-clamp text-wrap">
          {desc ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil amet voluptas dolorem perspiciatis totam fuga deserunt aut dolores aspernatur."}
        </p>
      </div>
    </article>
  );
};

export default SongCard;
