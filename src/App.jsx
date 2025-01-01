import Navbar from "./components/Navbar";
import { Routes, Route, useHref } from "react-router-dom";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import PremiumPage from "./components/PremiumPage";
import LoginWithSpotify from "./components/LoginWithSpotify";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUser } from "./store/spotifySlice";

const spotify = new SpotifyWebApi();

const App = () => {
  const spotifyState = useSelector((state) => state.spotifyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch(
        setToken({
          token: _token,
        })
      );
      spotify.setAccessToken(_token);
      dispatch(
        setUser({
          user: "Rohan Nikam",
        })
      );
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/login" element={<LogInPage></LogInPage>}></Route>
          <Route path="/premium" element={<PremiumPage></PremiumPage>}></Route>
          <Route
            path="/loginspotify"
            element={<LoginWithSpotify></LoginWithSpotify>}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
