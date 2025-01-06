import { useSelector } from "react-redux";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Track = () => {
  const { trackData } = useSelector((state) => state.trackReducer);
  console.log(trackData);

  return (
    <>
      <div className="h-[90vh] bg-black flex justify-center">
        <div className="w-full container mt-3">
          <Link to={"/playlists"}>
            <h1 className="text-green-500 text-5xl pb-3 flex items-center">
              <IoArrowBackCircleSharp />{" "}
              <span className="text-xl ml-2 font-bold">Back</span>
            </h1>
          </Link>
          <div className="text-white rounded-xl p-5 flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <img
              src={trackData.album.images[0].url}
              alt={trackData.name}
              className="w-[10rem] rounded-xl"
            />
            <div className="ml-4 flex flex-col justify-end">
              <h1 className="text-[2.8rem] font-bold mb-3">{trackData.name}</h1>
            </div>
          </div>
          <div className="my-1 w-full px-5 py-3 text-white rounded-xl bg-[#222222] flex">
            {trackData.artists.map((value, _) => {
              return (
                <h1 key={value.id} className="text-xl font-bold mr-5">
                  {value.name}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Track;
