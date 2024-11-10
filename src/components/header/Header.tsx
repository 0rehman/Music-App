import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "@/navigation";
import arrowRightIcon from "@/assets/images/right_arrow.png";
import arrowLeftIcon from "@/assets/images/left_arrow.png";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="header">
      <div className="flex items-center justify-between lg:mb-8 mb-4">
        <div className="flex items-center justify-start gap-3">
          <div className="button_wrap">
            <Link
              to={ROUTES.base}
              className="bg-black h-10 w-10 opacity-effect rounded-full inline-flex items-center justify-center"
            >
              <img className="h-5 w-5" src={arrowLeftIcon} alt="Reload Page" />
            </Link>
          </div>
          <div className="button_wrap">
            <Link
              to={ROUTES.base}
              className="bg-black h-10 w-10 opacity-effect rounded-full inline-flex items-center justify-center"
            >
              <img className="h-5 w-5" src={arrowRightIcon} alt="Reload Page" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="button_wrap flex-shrink-0">
            <Button variant="primary">Explore Medium</Button>
          </div>
          <div className="button_wrap flex-shrink-0">
            <Button variant="secondary">Install App</Button>
          </div>

          <div className="button_wrap">
            <Button className="bg-purple-500 text-black text-[16px] leading-[1] inline-flex items-center justify-center h-8 w-8 overflow-hidden rounded-full">
              D
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="button_wrap">
          <NavLink
            to={ROUTES.base}
            className="bg-white text-black px-4 py-2 rounded-[20px] lg:text-[16px] md:text-[15px] text-[14px] font-medium opacity-effect"
          >
            All
          </NavLink>
        </div>
        <div className="button_wrap">
          <NavLink
            to={ROUTES.base}
            className="bg-black text-white px-4 py-2 rounded-[20px] lg:text-[16px] md:text-[15px] text-[14px] font-medium opacity-effect"
          >
            Music
          </NavLink>
        </div>
        <div className="button_wrap">
          <NavLink
            to={ROUTES.base}
            className="bg-black text-white px-4 py-2 rounded-[20px] lg:text-[16px] md:text-[15px] text-[14px] font-medium opacity-effect"
          >
            Podcast
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
