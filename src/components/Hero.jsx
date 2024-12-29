const Hero = () => {
  return (
    <>
      <div className="p-10 mb-10 bg-gradient-to-r from-indigo-900 via-purple-700 to-pink-500 sm:h-[60vh] sm:flex sm:flex-col sm:justify-center sm:items-center">
        <h1 className="font-bold text-5xl text-green-500">
          Stream Your Favourite Music
        </h1>
        <h1 className="font-bold text-5xl text-green-500">
          Anytime, Anywhere with Spotify
        </h1>
        <p className="font-medium dark:text-white mt-4">
          Get instant access to millions of songs and podcasts, personalised
          just for you.
        </p>
        <button className="bg-green-500 font-bold border rounded-3xl text-sm border-green-500 hover:bg-green-700 hover:border-green-700 text-black px-7 py-2 my-4 uppercase">
          Start Steaming Now
        </button>
      </div>
    </>
  );
};

export default Hero;
