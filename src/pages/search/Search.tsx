import Heading from "@/components/typegraphy/Heading";

const Search = () => {
  return (
    <main id="search">
      <Heading headingText="Search Page" className="text-center" sizes={"md"} />
      <div className="flex items-center justify-start gap-5 flex-wrap">
        These are the search results!!
      </div>
    </main>
  );
};

export default Search;
