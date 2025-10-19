import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/User/userSlice";
import { NavLink } from "react-router-dom";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const dispatch = useDispatch();

  return (
    <nav className="bg-base-300">
      <div className="align-element px-8 navbar ">
        <section className="navbar-start">
          <NavLink className="hidden lg:flex btn btn-primary text-3xl items-center h-11">
            C
          </NavLink>
          {/* DROP DOWN */}
          <div className="dropdown">
            <label
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-2xl items-center h-11"
            >
              <FaBarsStaggered />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </section>
        <section className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            <NavLinks />
          </ul>
        </section>
        <section className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={() => dispatch(toggleTheme())} />
            <BsSunFill className="swap-off h-4 w-4" />
            <BsMoonFill className="swap-on h-4 w-4" />
          </label>

          <NavLink
            to="/cart"
            className="btn btn-ghost btn-circle text-2xl items-center h-11 ms-4.5"
          >
            <div className="indicator">
              <BsCart3 />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
