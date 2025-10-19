import { Outlet } from "react-router-dom";
import { HeaderComponent, Navbar } from "../components/index";
const HomeLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
