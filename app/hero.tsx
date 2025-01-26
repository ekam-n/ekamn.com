export default function Hero() {
  return (
    <div className="bg-black flex flex-col items-center min-h-screen">
      {/* Container with full-width rounded box */}
      <div className="bg-[#001044] rounded-lg shadow-lg p-8 px-12 text-white w-full mx-4 mt-4">
        <h1 className="text-4xl font-semibold mb-6 text-left">
          I love to <span className="text-blue-400">design & develop</span>
          <br />
          <span className="font-semibold">experiences and applications</span>
        </h1>
        <p className="text-lg text-left">
          Especially videogames!
        </p>
        <div className="flex items-center justify-start mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Available To Work</span>
          </div>
        </div>
      </div>
    </div>
  );
}
