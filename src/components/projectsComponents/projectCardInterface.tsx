interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];       // Technologies or categories
  link?: string;        // Optional project link
  bgColor?: string;     // Optional background color
}

export default function ProjectCard({
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
      <h3 className="w-full text-md md:text-lg">Project</h3>

      {/* Title */}
      <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
        {title}
      </h2>

      {/* Image (always full-width, below title) */}
      <div className="w-full flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full rounded-2xl object-cover"
        />
      </div>

      {/* Description */}
      <p className="w-full text-sm md:text-base lg:text-lg mt-2">
        {description}
      </p>

      {/* Tags */}
      <div className="w-full flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-white/20 px-3 py-1 rounded-full text-xs md:text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Project Button (not centered) */}
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
