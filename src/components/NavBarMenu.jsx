import { NavLink } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <>
      <a className="block mb-3 sm:mx-4 sm:mb-0 font-semibold">Premium</a>
      <a className="block mb-3 sm:mx-4 sm:mb-0 font-semibold">Support</a>
      <a className="block mb-3 sm:mx-4 sm:mb-0 font-semibold">Download</a>
      <NavLink
        className="block w-fit sm:mx-4 font-semibold border rounded-2xl px-3 py-1 hover:bg-white hover:text-black"
        to="/signup"
      >
        Register
      </NavLink>
    </>
  );
};

export default NavBarMenu;
