import { ROUTES } from "@/navigation";
import { Link, NavLink } from "react-router-dom";
import homeIcon from "@/assets/images/home.png";
import searchIcon from "@/assets/images/search.png";
import stackIcon from "@/assets/images/stack.png";
import rightArrowIcon from "@/assets/images/arrow.png";
import plusIcon from "@/assets/images/plus.png";
import { Button } from "../ui/button";

const Sidebar = () => {
  return (
    <div className="sidebar min-h-full max-w-[400px] w-full flex flex-col">
      <div className="sidebar-top px-6 bg-primary min-h-[100px] py-3 rounded-md overflow-hidden mb-3">
        <ul>
          <li className="mb-5">
            <NavLink
              to={ROUTES.base}
              className="text-white lg:text-[16px] md:text-[15px] text-[14px] font-bold inline-flex items-center justify-start gap-3 capitalize hover:opacity-50 transition-all duration-100 w-full"
            >
              <img className="h-5 w-5" src={homeIcon} alt="Reload Page" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.base}
              className="text-white lg:text-[16px] md:text-[15px] text-[14px] font-bold inline-flex items-center justify-start gap-3 capitalize hover:opacity-50 transition-all duration-100 w-full"
            >
              <img className="h-5 w-5" src={searchIcon} alt="Reload Page" />
              Search
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom bg-primary flex-1 p-3 rounded-md overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="img_wrap">
              <img className="h-10 w-10" src={stackIcon} alt="Reload Page" />
            </div>
            <span className="text-white text-[18px] font-medium capitalize">
              Your Library
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="button_wrap">
              <Link to={ROUTES.base}>
                <img
                  className="h-5 w-5 opacity-effect"
                  src={rightArrowIcon}
                  alt="Reload Page"
                />
              </Link>
            </div>
            <div className="button_wrap">
              <Link to={ROUTES.base}>
                <img
                  className="h-5 w-5 opacity-effect"
                  src={plusIcon}
                  alt="Reload Page"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="sidebar-card flex items-start justify-center flex-col p-3 bg-secondary rounded-md overflow-hidden min-h-[150px] mb-5">
          <h5 className="text-white lg:text-[16px] text-[14px] font-medium mb-2 leading-[1]">
            Create your first playlist
          </h5>
          <p className="text-[#dadada] lg:text-[16px] text-[14px] font-medium mb-4">
            It's every we'll help you
          </p>
          <div className="button_wrap">
            <Button variant="primary">Create Playlist</Button>
          </div>
        </div>

        <div className="sidebar-card flex items-start justify-center flex-col p-3 bg-secondary rounded-md overflow-hidden min-h-[150px] mb-5">
          <h5 className="text-white lg:text-[16px] text-[14px] font-medium mb-2 leading-[1]">
            Let's find some podcasts to follow
          </h5>
          <p className="text-[#dadada] lg:text-[16px] text-[14px] font-medium mb-4">
            We'll keep you updated on new episodes
          </p>
          <div className="button_wrap">
            <Button variant="primary">Browse Podcasts</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
