import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleNavLink = ({ url, text }) => {
  const user = useSelector((state) => state.userState.user);

  if ((url === "checkout" || url === "orders") && !user) return null;
  return (
    <NavLink
      to={url}
      className={({ isActive }) => {
        return `capitalize ${
          isActive ? "text-neutral-content bg-neutral" : ""
        }`;
      }}
    >
      {text}
    </NavLink>
  );
};

export default SingleNavLink;
