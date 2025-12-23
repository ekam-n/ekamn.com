export default function Hero() {
  return (
    <div className="bg-black flex flex-col items-center pt-16">
      {/* Container with full-width rounded box */}
      <div className="bg-gradient-to-b from-black to-[#5301B7] to-99% rounded-3xl shadow-lg p-6 md:p-8 lg:p-12 text-white w-full mx-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-6 text-left">
          I love to <span className="text-[#DF62F8]">design & develop</span>
          <br />
          <span className="font-semibold">experiences and applications</span>
        </h1>
        {/* <p className="text-base md:text-lg lg:text-xl text-left">
          Especially videogames!
        </p> */}
        <div className="flex items-center justify-start mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 md:w-4 h-3 md:h-4 bg-green-500 rounded-full"></div>
            <span className="text-xs md:text-sm lg:text-base font-medium">
              Available To Work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
