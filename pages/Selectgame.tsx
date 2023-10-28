"use";
import Router from "next/router";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function Selectgame() {
  return (
    <div className="min-h-screen bg-cover">
      <div
        className="h-screen w-full  bg-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://www.hdwallpapers.in/download/zelda_hd_the_legend_of_zelda_tears_of_the_kingdom_2-1920x1080.jpg')",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center mt-20">
          <span className="text-black font-bold uppercase text-2xl italic">
            Select a game mode
          </span>
        </div>
        <div className="mt-20 flex flex-col space-y-10 items-center justify-center sm:flex-row justify-around">
          <div>
            <Link href="/Selectpage">
              <div className="max-w-sm bg-blue-200 bg-opacity-50 border border-gray-200 rounded-lg shadow transition duration-500 hover:scale-105">
                <img
                  className="rounded-t-lg"
                  src="https://w0.peakpx.com/wallpaper/216/320/HD-wallpaper-owl-aesthetic-forest-pink-bird-black-odd-performing-arts-sad-nice-gamer-art-night-rgb-calming-pretty-weird-creepy-game-blue-light-dark-purple-alone-camp.jpg"
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Quiz
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>

                  <Link
                    href="/QuizPage"
                    passHref
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/Quizpage">
              <div className="max-w-sm bg-blue-200 bg-opacity-50 border border-gray-200 rounded-lg shadow transition duration-500 hover:scale-105">
                <img
                  className="rounded-t-lg"
                  src="https://w0.peakpx.com/wallpaper/439/462/HD-wallpaper-mclaren-somewhere-peaceful-gran-turismo-sport-games-2018-games-racing-mclaren-cars.jpg"
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Select Option
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>

                  <Link
                    href="/LogoGame"
                    passHref
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
