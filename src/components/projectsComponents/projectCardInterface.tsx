interface ProjectCardProps {
  label?: string;        // New optional label prop
  title: string;
  description: string;
  image: string;
  tags: string[];       // Technologies or categories
  link?: string;        // Optional project link
  bgColor?: string;     // Optional background color
}

export default function ProjectCard({
  label = "Project",      // Default to "Project"
  title,
  description,
  image,
  tags,
  link,
  bgColor = "#00085C",
}: ProjectCardProps) {
  return (
    <div
      className="flex flex-col items-start gap-4 h-full rounded-3xl shadow-lg p-6 md:p-8 text-white"
      style={{ backgroundColor: bgColor }}
    >
      {/* Label */}
      <h3 className="text-md md:text-lg">{label}</h3>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        {title}
      </h2>

      {/* Image (always vertical) */}
      <div className="w-[75%] self-center">
        <img
          src={image}
          alt={title}
          className="w-full rounded-2xl object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-sm md:text-base lg:text-lg mt-2">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-white/20 px-3 py-1 rounded-full text-xs md:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Project Button */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#9000FF] hover:bg-[#EC8DFF] transition-colors px-4 py-2 rounded-lg text-sm md:text-base"
        >
          View Project
        </a>
      )}
    </div>
  );
}
