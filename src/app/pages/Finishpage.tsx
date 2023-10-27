export default function Finishpage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover">
            <div className="h-screen w-full bg-white relative flex overflow-hidden" style={{
                backgroundImage: "url('https://images7.alphacoders.com/131/1311646.png')",
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",        // Add this CSS property
                flexDirection: "column", // Add this CSS property
                justifyContent: "center", // Add this CSS property
                alignItems: "center",    // Add this CSS property
            }}>
                <div>
                    <a className="flex text-center justify-center items-center">
                        <a href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-black bg-transparent rounded-lg shadow-inner group">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease text-3xl">Play Again ?</span>
                        </a>
                    </a>
                </div>
            </div>
        </div>

    )
}