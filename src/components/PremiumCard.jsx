import SpotifyWhite from "../assets/Spotify_White.png";

const PremiumCard = ({
  header,
  list,
  initialPrice,
  initialPricePeriod,
  finalPrice,
  description,
  buttonText,
  color,
}) => {
  console.log(color);

  return (
    <>
      <div className="bg-[#333333] text-white w-[18rem] mx-5 my-4">
        <div className="border-b-2">
          <div className="flex items-center h-[4rem] px-3">
            <img
              src={SpotifyWhite}
              alt="spotify white logo"
              className="w-[2rem]"
            />
            <span className="text-md ml-1 font-extrabold">Premium</span>
          </div>
        </div>

        <div className="p-3">
          <h1 className={`text-4xl font-extrabold text-green-500`}>{header}</h1>
          <h1 className="text-sm font-bold">
            &#8377;{initialPrice} for {initialPricePeriod} months
          </h1>

          <h1 className="text-sm font-bold mb-2 text-gray-400">
            &#8377;{finalPrice}/- month after
          </h1>
        </div>

        <div className="px-3 h-28">
          <ol>
            {list.map((value, index) => {
              return (
                <li
                  key={index}
                  className="text-sm flex items-center font-semibold"
                >
                  <span className="text-lg mr-2">&bull; </span> {value}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="flex flex-col justify-center px-3 h-44">
          <button
            className={`text-black rounded-3xl w-full py-3 font-bold bg-green-500`}
          >
            {buttonText}
          </button>
          <p className="px-3 text-[0.7rem] font-light text-center py-3">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default PremiumCard;
