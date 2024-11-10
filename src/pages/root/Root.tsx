import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Root;
