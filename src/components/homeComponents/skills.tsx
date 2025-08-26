export default function Skills() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* Design Skills Card */}
      <div className="bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white flex-1">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Design Skills
        </h2>
        {/* Skills Description */}
        <p className="text-sm md:text-base lg:text-lg mb-4">
          I'm experienced in game design, level design, and UX/UI development. My skills include crafting engaging mechanics, user-centered design, and research.
        </p>
        {/* Skills List */}
        <div className="flex flex-wrap gap-3">
          {[
            "Game Design", "Level Design", "Mechanic Design", "Combat Design",
            "UI Design", "UX Design", "Project Management", "User Research", "Playtesting", "Software Design"
          ].map(skill => (
            <span key={skill} className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Development Skills Card */}
      <div className="bg-[#5301B7] rounded-3xl shadow-lg p-6 md:p-8 text-white flex-1">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Technical Skills
        </h2>
        {/* Skills Description */}
        <p className="text-sm md:text-base lg:text-lg mb-4">
          My expertise includes programming in multiple languages, working with game engines, and building interactive applications.
        </p>
        {/* Skills List */}
        <div className="flex flex-wrap gap-3">
          {[
            "Unity", "Unreal Engine", "Figma", "InDesign", "Photoshop",
            "Illustrator", "After Effects", "React", "Tailwind", "Java", "C++", "C#", "TypeScript"
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
