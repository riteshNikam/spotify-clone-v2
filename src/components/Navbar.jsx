import { NavLink } from "react-router-dom";
import SpotifyWhite from "../assets/Spotify_White.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import NavBarMenu from "./NavBarMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
  };

  return (
    <>
      <nav className="bg-black py-5 sm:flex sm:justify-center border-b-2 border-green-700">
        <div className="w-full flex justify-between items-center px-4 sm:container sm:flex sm:justify-between sm:items-center">
          <NavLink to="/">
            <div className="flex items-center">
              <img src={SpotifyWhite} alt="Spotify Logo" className="h-12" />
              <span className="font-bold text-white text-3xl ml-2">
                Spotify
              </span>
            </div>
          </NavLink>

          <div>
            <button
              className="text-white text-3xl sm:hidden"
              onClick={handleHamburgerMenu}
            >
              <GiHamburgerMenu></GiHamburgerMenu>
            </button>
            <div className="text-white hidden sm:flex sm:flex-row sm:items-center">
              <NavBarMenu></NavBarMenu>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="text-white my-3 ml-6 block sm:hidden">
            <NavBarMenu></NavBarMenu>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
