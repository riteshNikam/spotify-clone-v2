import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import PremiumPage from "./components/PremiumPage";
import LoginWithSpotify from "./components/LoginWithSpotify";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylists, setToken, setUser } from "./store/spotifySlice";
import PlaylistPage from "./components/PlaylistPage";

const App = () => {
  const dispatch = useDispatch();
  const { spotify } = useSelector((state) => state.userReducer);
  const { token } = useSelector((state) => state.spotifyReducer);

  useEffect(() => {
    if (!token) {
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
        spotify.getMe().then((data) => {
          dispatch(setUser({ user: data }));
        });
        spotify.getUserPlaylists().then((data) => {
          dispatch(
            setPlaylists({
              playlists: data.items,
              defaultId: data.items[0].id,
            })
          );
        });
      }
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
          <Route
            path="/playlists"
            element={<PlaylistPage></PlaylistPage>}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
