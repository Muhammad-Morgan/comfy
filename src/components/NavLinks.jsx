import { links } from "../data";
import SingleNavLink from "./SingleNavLink";
const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <SingleNavLink {...link} />
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
