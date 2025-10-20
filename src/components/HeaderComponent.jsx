import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Features/User/userSlice";
import { cartCleared } from "../Features/Cart/cartSlice";
import { useQueryClient } from "@tanstack/react-query";
const HeaderComponent = () => {
  const username = useSelector((state) => state?.userState?.user?.username)  || "user";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {username ? (
          <div className="flex gap-x-6 justify-center items-center">
            <p className="text-xs mr-2 sm:text-sm capitalize">
              Hello, {username}
            </p>
            <button
              onClick={() => {
                navigate("/");
                dispatch(cartCleared());
                dispatch(logoutUser());
                queryClient.removeQueries(["orders"]);
              }}
              className="btn btn-outline btn-xs text-xs btn-primary uppercase"
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            {/* LINKS */}
            <Link
              to="/login"
              className="link link-hover text-xs sm:text-sm capitalize"
            >
              sign in / guest
            </Link>
            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm capitalize"
            >
              create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
