import { ReactNode } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout flex min-h-screen gap-3 p-3">
      <Sidebar />
      <div className="min-h-full flex-1 bg-primary py-3 px-8 rounded-md overflow-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
