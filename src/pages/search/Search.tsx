import SongCard from "@/components/song-card/SongCard";
import Heading from "@/components/typegraphy/Heading";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSearchResultQuery } from "@/store/services/search/searchApi";
import { useParams } from "react-router-dom";

const Search = () => {
  const { searchQuery } = useParams();

  const {
    isLoading: searchLoading,
    data: searchData,
    error: searchError,
    isSuccess: searchSuccess,
  } = useGetSearchResultQuery(
    { searchQuery },
    {
      skip: !Boolean(searchQuery),
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );

  console.log("searchData", searchData);

  let searchContent;

  if (searchLoading) {
    searchContent = Array.from({ length: 10 }).map((_, index) => {
      return <Skeleton className="w-[330px] h-[300px] rounded-md" key={index} />;
    });
  } else if (searchError) {
    searchContent = (
      <p className="text-white text-[16px] font-medium">
        We are having an error
      </p>
    );
  } else if (searchSuccess) {
    console.log("working");
    searchContent = searchData?.tracks?.items?.map((item: any, index: number) => {
      return <SongCard item={item} key={index} />;
    });
  }

  return (
    <main id="search">
      <Heading
        headingText="Search Result:"
        className="text-start pt-10 pb-2"
        sizes={"md"}
      />
      <div className="flex items-center !justify-start gap-5 gap-y-[50px] flex-wrap">
        {searchContent}
      </div>
    </main>
  );
};

export default Search;
