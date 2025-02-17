interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[]; // Technologies or categories
  link?: string; // Optional project link
  bgColor?: string; // New optional prop for background color
}

export default function ProjectCard({ title, description, image, tags, link, bgColor = "#00085C" }: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 h-full rounded-3xl shadow-lg p-6 md:p-8 text-white" style={{ backgroundColor: bgColor }}>
      <div className="flex-1">
        <h3 className="text-md md:text-lg">Project</h3>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">{title}</h2>

        {/* Project Description */}
        <p className="text-sm md:text-base lg:text-lg text-white mt-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-white/20 px-3 py-1 rounded-full text-xs md:text-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* View Project Button (if a link is provided) */}
        {link && (
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9000FF] hover:bg-[#EC8DFF] transition-colors text-white px-4 py-2 rounded-lg text-sm md:text-base"
            >
              View Project
            </a>
          </div>
        )}
      </div>
      {/* Project Image */}
      <div className="flex-1 flex justify-center">
        <img src={image} alt={title} className="w-full rounded-2xl object-cover" />
      </div>
      
    </div>
  );
}
