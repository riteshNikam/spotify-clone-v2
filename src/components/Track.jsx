import { useEffect, useState } from "react";
import { spotify } from "../App";

const Track = ({ trackId, index }) => {
  const [trackItem, setTrackItem] = useState({});

  useEffect(() => {
    spotify.getTrack(trackId).then((data) => {
      setTrackItem(data);
    });
  }, [trackId]);

  const ms_to_min_sec = (ms) => {
    let result = "";

    let minutes = ms / 1000 / 60;
    let seconds = (ms / 1000) % 60;

    console.log(minutes);
    console.log(seconds);

    if (Math.round(minutes) < 10) {
      result += "0" + Math.round(minutes);
    } else {
      result += Math.round(minutes);
    }

    result += ":";

    if (Math.round(seconds) < 10) {
      result += "0" + Math.round(seconds);
    } else {
      result += Math.round(seconds);
    }

    return result;
  };

  return (
    <>
      <tr className="h-12">
        <td scope="row">{index + 1}</td>
        <td>
          <div className="flex items-center">
            <img
              src={trackItem?.album?.images[0]?.url}
              alt={trackItem?.album?.name}
              className="w-8 mr-2 rounded"
            />
            {trackItem.name}
          </div>
        </td>
        <td>{trackItem?.album?.name}</td>
        <td>{ms_to_min_sec(trackItem.duration_ms)}</td>
      </tr>
    </>
  );
};

export default Track;
