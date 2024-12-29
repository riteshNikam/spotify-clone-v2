import { FaMinus } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import SpotifyWhite from "../assets/Spotify_White.png";

const PremiumTable = () => {
  return (
    <>
      <div className="bg-black text-white px-2 hidden sm:flex sm:flex-col sm:items-center pb-10">
        <center>
          <h1 className="text-4xl font-bold">Experience the difference</h1>
          <div className="w-full text-lg font-medium self-center">
            Go premium and enjoy full control of your listening. Cancel anytime.
          </div>
        </center>

        <div className="relative overflow-x-auto">
          <table className="text-left rtl:text-right text-white">
            <thead className="text-md bg-black text-white">
              <tr className="border-b">
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-end h-32">
                    <p>Whay you'll get</p>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Spotify’s Free plan
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex flex-row items-center">
                    <img src={SpotifyWhite} alt="" className="w-[30px] mr-2" />
                    <p>Spotify’s Premium plans</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b">
                <th className="px-6 py-4 font-mediumtext-white">
                  Ad-free music listening
                </th>
                <td className="px-6 py-4 text-gray-400 w-[8rem]">
                  <div className="flex justify-center text-xl">
                    <FaMinus></FaMinus>
                  </div>
                </td>
                <td className="px-6 py-4 text-white w-[8rem]">
                  <div className="flex justify-center text-3xl">
                    <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                  </div>
                </td>
              </tr>
              <tr className="border-b bg-black">
                <th className="px-6 py-4 font-medium text-white">
                  Download to listen offline
                </th>
                <td className="px-6 py-4 text-gray-400">
                  <div className="flex justify-center text-xl">
                    <FaMinus></FaMinus>
                  </div>
                </td>
                <td className="px-6 py-4 text-white">
                  <div className="flex justify-center text-3xl">
                    <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                  </div>
                </td>
              </tr>
              <tr className="border-b bg-black">
                <th className="px-6 py-4 font-medium text-white">
                  Play songs in any order
                </th>
                <td className="px-6 py-4 text-gray-400">
                  <div className="flex justify-center text-xl">
                    <FaMinus></FaMinus>
                  </div>
                </td>
                <td className="px-6 py-4 text-white">
                  <div className="flex justify-center text-3xl">
                    <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                  </div>
                </td>
              </tr>
              <tr className="border-b bg-black">
                <th className="px-6 py-4 font-medium text-white">
                  High audio quality
                </th>
                <td className="px-6 py-4 text-gray-400">
                  <div className="flex justify-center text-xl">
                    <FaMinus></FaMinus>
                  </div>
                </td>
                <td className="px-6 py-4 text-white">
                  <div className="flex justify-center text-3xl">
                    <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                  </div>
                </td>
              </tr>
              <tr className=" border-b bg-black">
                <th className="px-6 py-4 font-medium text-white">
                  Listen with friends in real time
                </th>
                <td className="px-6 py-4 text-gray-400">
                  <div className="flex justify-center text-xl">
                    <FaMinus></FaMinus>
                  </div>
                </td>
                <td className="px-6 py-4 text-white">
                  <div className="flex justify-center text-3xl">
                    <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                  </div>
                </td>
              </tr>
              <tr className="border-b bg-black">
                <th className="px-6 py-4 font-medium text-white">
                  Organise listening queue
                </th>
                <td className="px-6 py-4 text-gray-400">
                  <div className="flex justify-center text-xl">
                    <FaMinus></FaMinus>
                  </div>
                </td>
                <td className="px-6 py-4 text-white">
                  <div className="flex justify-center text-3xl">
                    <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                  </div>
                </td>
              </tr>
              <tr className="border-b bg-black">
                <th className="px-6 py-4 font-medium text-white ">
                  Listening insights (not in Mini)
                </th>
                <td className="px-6 py-4 text-gray-400">
                  <div className="flex justify-center text-xl">
                    <FaMinus></FaMinus>
                  </div>
                </td>
                <td className="px-6 py-4 text-white">
                  <div className="flex justify-center text-3xl">
                    <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PremiumTable;
