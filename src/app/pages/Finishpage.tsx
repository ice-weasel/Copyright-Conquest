export default function Finishpage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover">
            <div className="h-screen w-full bg-white relative flex overflow-hidden" style={{
                backgroundImage: "url('https://images2.alphacoders.com/130/1305067.jpeg')",
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div>
                    <a className="flex flex-col text-center justify-center items-center">
                        <div className="font-bold text-3xl">
                            You scored 100 points! 
                        </div>
                      <div className="mt-2 font-bold text-3xl mb-10 ">
                      Congratulations!!
                      </div>
                        <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group  hover:ring-2 hover:ring-yellow-900 ">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-50 via-amber-500 to-yellow-900"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-yellow-900 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span className="relative text-white text-2xl">Play Again!</span>
                        </a>
                        <div className="mt-5 text-white hover:text-black hover:underline text-m">
                            Back to home screen
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}