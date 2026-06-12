import { Link } from "react-router-dom";
import CardVideo from "./CardVideo";

// A single call-to-action button. `to` => internal route (react-router Link),
// `href` => external link. `color` holds Tailwind bg/hover/text classes.
export type ProjectButton = {
  text: string;
  to?: string;
  href?: string;
  color?: string;
};

interface ProjectCardProps {
  label?: string;        // New optional label prop
  title: string;
  description: string;
  image?: string;       // Image source (used when no video is provided)
  video?: string;       // Optional video source; takes precedence over image
  videoAspect?: string; // Full Tailwind aspect class for the video (e.g. "aspect-video"); defaults to aspect-110/100
  videoControls?: boolean; // Overlaid play/pause + seek scrubber on the video
  videoVolume?: boolean;   // Overlaid mute toggle + volume slider on the video
  videoFullscreen?: boolean; // Overlaid fullscreen toggle on the video
  tags: string[];       // Technologies or categories
  link?: string;        // Optional project link
  bgColor?: string;     // Optional background color
  buttonText?: string;         // text for the (single) button
  buttonColor?: string;    // classes controlling color/hover (e.g., bg/hover)
  ctaTo?: string; // internal route target
  buttons?: ProjectButton[]; // multiple buttons; takes precedence over the single-button props
  variant?: "home" | "projects"; // controls the breakpoint the card goes side-by-side
}

// Tailwind needs full class strings present in source, so each variant's classes
// are written out literally rather than composed dynamically. The only difference
// is the breakpoint: home goes side-by-side at xl, projects at 2xl (it shares the
// row with a sidebar, so it needs more width before going horizontal).
const LAYOUT = {
  home: {
    container:
      "flex flex-col xl:flex-row items-center gap-4 h-full rounded-3xl shadow-lg p-6 md:p-8 text-white",
    smallImg: "block xl:hidden mb-4",
    largeImg: "hidden xl:flex flex-1 justify-center",
  },
  projects: {
    container:
      "flex flex-col 2xl:flex-row items-center gap-4 h-full rounded-3xl shadow-lg p-6 md:p-8 text-white",
    smallImg: "block 2xl:hidden mb-4",
    largeImg: "hidden 2xl:flex flex-1 justify-center",
  },
} as const;

export default function ProjectCard({
  label = "Project",      // Default to "Project"
  title,
  description,
  image,
  video,
  videoAspect,
  videoControls,
  videoVolume,
  videoFullscreen,
  tags,
  link,
  bgColor = "#00085C",
  buttonText = "View Project",
  buttonColor = "bg-[#9000FF] hover:bg-[#EC8DFF]",
  ctaTo,
  buttons,
  variant = "home",
}: ProjectCardProps) {
  const layout = LAYOUT[variant];

  // Shared button styling — used by both the multi-button and single-button paths.
  const btnClass = (color = "bg-[#9000FF] hover:bg-[#EC8DFF]") =>
    `inline-block transition-colors px-4 py-2 rounded-lg text-sm md:text-base ${color}`;

  const renderButton = (btn: ProjectButton, key: number) =>
    btn.to ? (
      <Link key={key} to={btn.to} className={btnClass(btn.color)}>
        {btn.text}
      </Link>
    ) : (
      <a
        key={key}
        href={btn.href}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass(btn.color)}
      >
        {btn.text}
      </a>
    );

  // Media renders identically (placement, ratio, rounding) whether it's a video or
  // an image; video takes precedence when both are supplied.
  const media = video ? (
    <CardVideo
      src={video}
      title={title}
      aspectClass={videoAspect ?? "aspect-110/100"}
      controls={videoControls}
      volume={videoVolume}
      fullscreen={videoFullscreen}
    />
  ) : (
    <img
      src={image}
      alt={title}
      className="w-full rounded-2xl object-cover"
    />
  );

  return (
    <div className={layout.container} style={{ backgroundColor: bgColor }}>
      {/* Left Column */}
      <div className="flex-1">
        <h3 className="text-md md:text-lg">{label}</h3>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          {title}
        </h2>

        {/* SMALL-SCREEN MEDIA: shows only below the side-by-side breakpoint */}
        <div className={layout.smallImg}>
          {media}
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

        {/* Buttons: a `buttons` array renders multiple; otherwise fall back to
            the single link/ctaTo + buttonText/buttonColor props. */}
        {buttons && buttons.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {buttons.map((b, i) => renderButton(b, i))}
          </div>
        ) : (
          (link || ctaTo) && (
            <div className="mt-4">
              {renderButton(
                ctaTo
                  ? { text: buttonText, to: ctaTo, color: buttonColor }
                  : { text: buttonText, href: link, color: buttonColor },
                0
              )}
            </div>
          )
        )}
      </div>

      {/* LARGE-SCREEN MEDIA: shows only at/above the side-by-side breakpoint */}
      <div className={layout.largeImg}>
        {media}
      </div>
    </div>
  );
}
