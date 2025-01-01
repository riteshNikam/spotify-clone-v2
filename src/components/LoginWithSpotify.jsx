import SpotifyGreen from "../assets/Spotify_Green.png";
import { loginUrl } from "../spotify";

const LoginWithSpotify = () => {
  return (
    <>
      <div className="bg-black h-[90vh] flex items-center">
        <div className="h-[30vh] w-full flex flex-col justify-between items-center">
          <div className="flex items-center">
            <img src={SpotifyGreen} alt="Spotify Green Loo" className="w-20" />
            <h1 className="text-white font-bold text-5xl ml-4">Spotify</h1>
            <a
              className="text-black uppercase px-10 py-2 dark:bg-green-500 text-lg font-semibold hover:bg-green-700 rounded-3xl ml-4"
              href={loginUrl}
            >
              Login With Spotify
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginWithSpotify;
