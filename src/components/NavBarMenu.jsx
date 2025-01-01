import { NavLink } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <>
      <NavLink
        to="premium"
        className={({ isActive }) => {
          return isActive
            ? `block mb-3 sm:mx-4 sm:mb-0 font-semibold text-green-500`
            : `block mb-3 sm:mx-4 sm:mb-0 font-semibold hover:text-green-500`;
        }}
      >
        Premium
      </NavLink>
      <a className="block mb-3 sm:mx-4 sm:mb-0 font-semibold">Support</a>
      <a className="block mb-3 sm:mx-4 sm:mb-0 font-semibold">Download</a>
      {/* <NavLink
        className={({ isActive }) => {
          return isActive
            ? "block w-fit sm:mx-4 font-semibold border-green-500 rounded-2xl px-3 py-1 bg-green-500  text-black"
            : "block w-fit sm:mx-4 font-semibold border rounded-2xl px-3 py-1 hover:bg-green-500 hover:border-green-500 hover:text-black";
        }}
        to="/signup"
      >
        Register
      </NavLink> --> Register button is not required using Spotify Auth for logging in. */}
      <NavLink
        className={
          "block w-fit sm:mx-4 font-semibold border rounded-2xl px-3 py-1 hover:bg-green-500 hover:border-green-500 hover:text-black"
        }
        to="/loginspotify"
      >
        Login With Spotify
      </NavLink>
    </>
  );
};

export default NavBarMenu;
