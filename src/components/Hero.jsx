const Hero = () => {
  return (
    <>
      <div className="p-10 sm:container sm:h-[60vh] sm:flex sm:flex-col sm:justify-center sm:items-center">
        <h1 className="font-bold text-5xl text-green-700">
          Stream Your Favourite Music
        </h1>
        <h1 className="font-bold text-5xl text-green-700">
          Anytime, Anywhere with Spotify
        </h1>
        <p className="font-medium dark:text-white mt-4">
          Get instant access to millions of songs and podcasts, personalised
          just for you.
        </p>
        <button className="bg-green-700 font-medium border rounded-lg border-green-700 text-white px-7 py-2 my-4">
          Start Steaming Now
        </button>
      </div>
    </>
  );
};

export default Hero;
