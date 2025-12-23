export default function Education() {
  return (
    <div className="bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
        Education
      </h2>
      <h3 className="text-lg md:text-xl lg:text-2xl mb-1">Simon Fraser University</h3>
      <p className="text-sm md:text-base lg:text-lg mb-4">
          I'm majoring in Interactive Arts & Technology, minoring in Computer Science, and completing multiple concentrations.
        </p>
      <div className="flex flex-wrap gap-3">
          {[
            "BSc", "Interactive Arts & Technology", "Computer Science", "AI", "Game Design", "XR", "Data Science"
          ].map(skill => (
            <span key={skill} className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
              {skill}
            </span>
          ))}
        </div>
    </div>
  );
}
