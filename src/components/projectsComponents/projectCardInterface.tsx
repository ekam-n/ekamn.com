import { Link } from "react-router-dom";

interface ProjectCardProps {
  label?: string;        // New optional label prop
  title: string;
  description: string;
  image: string;
  tags: string[];       // Technologies or categories
  link?: string;        // Optional project link
  bgColor?: string;     // Optional background color
  buttonText?: string;         // text for the button
  buttonColor?: string;    // classes controlling color/hover 
  ctaTo?: string; // internal route target
}

export default function ProjectCard({
  label = "Project",      // Default to "Project"
  title,
  description,
  image,
  tags,
  link,
  bgColor = "#00085C",
  buttonText = "View Project",
  buttonColor = "bg-[#9000FF] hover:bg-[#EC8DFF]",
  ctaTo
}: ProjectCardProps) {
  return (
    <div
      className="flex flex-col 2xl:flex-row items-center gap-4 h-full rounded-3xl shadow-lg p-6 md:p-8 text-white"
      style={{ backgroundColor: bgColor }}
    >
      {/* Left Column */}
      <div className="flex-1">
        <h3 className="text-md md:text-lg">{label}</h3>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          {title}
        </h2>

        {/* SMALL-SCREEN IMAGE: shows only on <lg */}
        <div className="block 2xl:hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* Project Description */}
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
        {(link || ctaTo) && (
          <div className="mt-4">
            {ctaTo ? (
              <Link
                to={ctaTo}
                className={`inline-block transition-colors px-4 py-2 rounded-lg text-sm md:text-base ${buttonColor}`}
              >
                {buttonText}
              </Link>
            ) : (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block transition-colors px-4 py-2 rounded-lg text-sm md:text-base ${buttonColor}`}
              >
                {buttonText}
              </a>
            )}
          </div>
        )}
      </div>

      {/* LARGE-SCREEN IMAGE: shows only on ≥lg */}
      <div className="hidden 2xl:flex flex-1 justify-center">
        <img
          src={image}
          alt={title}
          className="w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
