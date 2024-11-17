import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setShowSearchBar } from "@/store/features/ui/uiSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/navigation";

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      console.log("No value provided");
      return;
    }

    navigate(ROUTES.search + "/" + value);
    dispatch(setShowSearchBar());
  };

  return (
    <div className="search-bar group max-w-[700px] w-full bg-secondary rounded-md border-primary border-solid border px-4 fixed top-[10%] left-[50%] right-[50%] translate-x-[-50%] z-[100]">
      <form onSubmit={handleSearchSubmit}>
        <div className="flex items-center justify-start gap-4">
          <label htmlFor="searchBar">
            <IoSearchOutline className="text-[25px] text-white" />
          </label>
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none bg-transparent w-full h-full lg:text-[16px] text-[14px] text-white block py-4 flex-1"
            id="searchBar"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button
            type="button"
            onClick={() => dispatch(setShowSearchBar())}
            id="closeSearchBarButton"
            className="opacity-0 transition-all duration-300"
          >
            <IoMdClose className="text-[25px] text-white" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
