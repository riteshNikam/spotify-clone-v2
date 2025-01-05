import { useDispatch, useSelector } from "react-redux";
import { RiPlayListFill } from "react-icons/ri";
import { setPlaylistId } from "../store/spotifySlice";
import { useEffect, useState } from "react";
import { spotify } from "../App";
import Playlist from "./Playlist";

const PlatlistPage = () => {
  const { token, playlists, playlistId } = useSelector(
    (state) => state.spotifyReducer
  );
  const dispatch = useDispatch();
  const [playlistItem, setPlaylistItem] = useState({});

  const handlePlaylistClick = (event, id) => {
    event.preventDefault();
    dispatch(
      setPlaylistId({
        id: id,
      })
    );
  };

  useEffect(() => {
    if (token) {
      spotify.getPlaylist(playlistId).then((data) => {
        setPlaylistItem(data);
      });
    }
  }, [playlistId]);

  return (
    <>
      <div className="bg-black h-[92vh] text-white flex justify-center">
        <div className="conatiner container space-x-4 flex my-4">
          <div className="w-[20rem] p-2">
            <div className="flex items-center justify-center bg-[#222222] mb-3 py-2 px-3 rounded-xl">
              <h1 className="text-xl font-bold">Your Library</h1>
            </div>

            <ol>
              {playlists.map((value, index) => {
                return (
                  <li
                    key={value.id}
                    onClick={(event) => handlePlaylistClick(event, value.id)}
                  >
                    <div
                      className={`flex  p-2 rounded-xl mb-1 ${
                        value.id === playlistId
                          ? "bg-green-700"
                          : "bg-[#333333]"
                      }`}
                    >
                      <img
                        src={value.images[0].url}
                        alt={value.name}
                        className="w-12 rounded-lg"
                      />
                      <div className="flex flex-col justify-center ml-4">
                        <p className="text-sm">Playlist</p>
                        <h1>{value.name}</h1>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="w-[60rem] p-2">
            {playlistItem.id && (
              <Playlist playlistItem={playlistItem}></Playlist>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatlistPage;
