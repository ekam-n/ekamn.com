export default function Skills() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* Development Skills Card */}
      <div className="bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white flex-1">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Technical Skills
        </h2>
        {/* Skills Description */}
        <p className="text-sm md:text-base lg:text-lg mb-4">
          My expertise includes working with game engines and other technical platforms, programming in multiple languages, and use of modern frameworks.
        </p>
        {/* Skills List */}
        <div className="flex flex-wrap gap-3">
          {[
            "Unity", "Unreal Engine", "3Ds Max", "visionOS", "Figma", "C#",
            "C++", "Python", "React", "NodeJS"
          ].map(skill => (
            <span key={skill} className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Design Skills Card */}
      <div className="bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white flex-1">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Design Skills
        </h2>
        {/* Skills Description */}
        <p className="text-sm md:text-base lg:text-lg mb-4">
          I'm experienced in game design, UX/UI design, user research, and playtesting. My skills include crafting engaging mechanics, user-centered design, and research.
        </p>
        {/* Skills List */}
        <div className="flex flex-wrap gap-3">
          {[
            "Level Design", "Economy Design", "Systems Design",
            "UI/UX Design", "Playtesting", "User Research" 
          ].map(skill => (
            <span key={skill} className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
