import Track from "./Track";

const Playlist = ({ playlistItem }) => {
  return (
    <>
      <div className="text-white rounded-xl p-5 flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <img
          src={playlistItem.images[0].url}
          alt={playlistItem.name}
          className="w-[10rem] rounded-xl"
        />
        <div className="ml-4 flex flex-col justify-end">
          <h1 className="text-[2.8rem] font-bold mb-3">{playlistItem.name}</h1>
        </div>
      </div>
      <div className="p-3 my-2 bg-[#111111] rounded-xl">
        <table className="w-full text-left text-sm">
          <thead className="text-xs border-b border-[#777777] h-12">
            <tr>
              <th scope="col">
                <h1 className="ps-4">#</h1>
              </th>
              <th scope="col">Title</th>
              <th scope="col">Album</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>
            {playlistItem.tracks.items.map((value, index) => {
              return <Track trackId={value.track.id} index={index}></Track>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Playlist;
