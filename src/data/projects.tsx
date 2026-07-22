import type { CoreLabel } from "../components/projectsComponents";
import type { ProjectButton } from "../components/shared/ProjectCard";

// The props consumed by the shared <ProjectCard /> component.
export type ProjectCardData = {
  label?: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  youtubeId?: string; // YouTube video id; takes precedence over image (video wins over both)
  videoAspect?: string; // Full Tailwind aspect class for the video (e.g. "aspect-video")
  videoControls?: boolean; // Overlaid play/pause + seek scrubber on the video
  videoVolume?: boolean;   // Overlaid mute toggle + volume slider on the video
  videoFullscreen?: boolean; // Overlaid fullscreen toggle on the video
  tags: string[];
  link?: string;
  bgColor?: string;
  buttonText?: string;
  buttonColor?: string;
  ctaTo?: string;
  buttons?: ProjectButton[]; // Multiple CTA buttons; takes precedence over the single-button props
};

// A single project: its content (card) plus metadata used for placement/filtering.
// `category` drives the projects-page sidebar filter; "Unlabeled" => Miscellaneous.
export type ProjectEntry = {
  key: string;
  category: CoreLabel | "Unlabeled";
  card: ProjectCardData;
};

// Single source of truth for every project's card content.
// Author a card here once, then reference it by key on the home and/or projects page.
export const PROJECTS: Record<string, ProjectEntry> = {
  postureCoach: {
    key: "postureCoach",
    category: "Unlabeled",
    card: {
      label: "AI Model",
      title: "Posture Coach",
      description:
        "Posture Coach is a lightweight computer-vision project that fine-tunes a small YOLO classifier to recognize three webcam posture states—“looks good,” “sit up straight,” and “straighten head”—and provide fast, practical feedback for students and desk workers using typical laptop setups.",
      image: "./images/projectImages/postureCoach/cover image.png",
      tags: ["Computer Vision", "Classification", "Python", "Git"],
      // ctaTo: "/analyses/posture-coach",
      link:"https://github.com/ekam-n/IAT360-Computer-Vision-Project",
      buttonText: "GitHub",
      // buttonColor: "bg-[#db0096] hover:bg-[#EC8DFF]",
    },
  },
  exportToReality: {
    key: "exportToReality",
    category: "Video Games",
    card: {
      label: "Videogame",
      title: "Export to: Reality",
      description:
        "Export to: Reality is a two-player asymmetric co-op puzzle-platformer where one player platforms through three levels while the other manipulates the environment through a mod-menu placement interface. I led design and development of all systems, including refining the mod-menu mechanic's design and building the 'Anticheat' pursuit AI.",
      video: "/images/projectImages/exportToReality/exportToRealityTrailer.mp4",
      videoAspect:"",
      videoControls: true,
      videoVolume: true,
      videoFullscreen: true,
      tags: ["Unity", "Level Design", "Game AI"],
      buttons: [
        // {
        //   text: "Analysis",
        //   to: "/analyses/export-to-reality",
        //   color: "bg-[#db0096] hover:bg-[#EC8DFF]",
        // },
        {
          text: "Play in Browser",
          href: "https://play.unity.com/en/games/a762ec20-3d05-4253-bfa2-93af02952f2c/export-to-reality",
          // color: "bg-[#db0096] hover:bg-[#EC8DFF]",
        },
        {
          text: "Team Journal",
          href: "https://orangegoose.netlify.app/",
          // color: "bg-white/20 hover:bg-white/30",
        },
      ],
    },
  },
  controlledChaos: {
    key: "controlledChaos",
    category: "Unlabeled",
    card: {
      label: "Physical-Digital Game",
      title: "Controlled Chaos",
      description:
        "Controlled Chaos is a game-show-style physical-digital experience where players race an RC car through a time trial while answering digital quizzes and triggering touch sensors. I programmed the majority of technical systems — car control, sensor input, and game logic in Arduino (C++).",
      video:"/images/projectImages/controlledChaos/controlledChaosGameplay.mp4",
      videoAspect:"aspect-video",
      videoControls: true,
      videoFullscreen: true,
      // videoVolume: true,
      tags: ["Embedded","Arduino","C++"],
      ctaTo: "/analyses/controlled-chaos",
      buttonText: "Analysis",
      buttonColor: "bg-[#db0096] hover:bg-[#EC8DFF]",
      buttons: [
        {
          text: "SIAT Showcase",
          href: "https://www.sfu.ca/siat/showcase/spring-2024-project-showcase/iat-267-controlled-chaos.html",
        //   color: "bg-[#db0096] hover:bg-[#EC8DFF]",
        },
      ],
    },
  },
  setSail: {
    key: "setSail",
    category: "Unlabeled",
    card: {
      label: "CLI App",
      title: "SetSail",
      description:
        "SetSail is a terminal-based C++ reservation system for Coastal Ferry Corp that lets a single ferry clerk create sailings and vessels, manage vehicle reservations with capacity limits, and view sailing reports, with all data persisted via custom binary file I/O.",
      image: "./images/projectImages/setSail/empty OCD.png",
      tags: ["OOP", "SDLC", "C++", "Git"],
      // ctaTo: "/analyses/set-sail",
      link:"https://github.com/ekam-n/SetSail",
      buttonText: "GitHub",
      // buttonColor: "bg-[#db0096] hover:bg-[#EC8DFF]",
    },
  },
  dishedUp: {
    key: "dishedUp",
    category: "Unlabeled",
    card: {
      label: "Mobile App",
      title: "dishedUp",
      description:
        "dishedUp is a gamified cooking app concept for novice cooks that turns recipes into points, levels, and challenges to make learning to cook fun. We used Figma for design and ProtoPie to make the app completely accessible for use through voice commands. I also built a responsive showcase website for it using Vite and Tailwind CSS.",
      image: "./images/projectImages/dishedUp/cover image.png",
      tags: ["Figma", "ProtoPie", "Vite", "Tailwind"],
      // ctaTo: "/analyses/dished-up",
      link:"https://dishedup.netlify.app/",
      buttonText: "Website",
      // buttonColor: "bg-[#db0096] hover:bg-[#EC8DFF]",
    },
  },
  yellowJacket: {
    key: "yellowJacket",
    category: "Video Games",
    card: {
      label: "Videogame",
      title: "YellowJacket Escape",
      description:
        "YellowJacket Escape is a top-down 2D dungeon crawler focused on strategic movement and survival, where players navigate hazards while avoiding or confronting YellowJacket enemies. I led design and development of the game — creating the multi-path level layouts, scripting enemy movement and patrol patterns, and tuning difficulty across zones through playtesting.",
      video: "/images/projectImages/yellowJacketEscape/zone 2 final gameplay 3.mp4",
      videoFullscreen: true,
      tags: ["Level Design", "Unity", "Playtesting"],
      ctaTo: "/analyses/yellowjacket-escape",
      buttonText: "Analysis",
      buttonColor: "bg-[#db0096] hover:bg-[#EC8DFF]",
    },
  },
  solarConquest: {
    key: "solarConquest",
    category: "Board Games",
    card: {
      label: "Boardgame",
      title: "Solar Conquest",
      description:
        "Solar Conquest is a 4X tabletop strategy game of colonization, hidden-transit trade, crafting, and tiered combat. I led systems design/balance through three 4-player playtests—doubling ship speed, tuning +1/+2 combat tiers, and capping accelerators per planet.",
      image: "./images/projectImages/solarConquest/Game Setup.png",
      tags: ["Economy Design", "Systems Design", "Tabletop Simulator"],
      ctaTo: "/analyses/solar-conquest",
      buttonText: "Analysis",
      buttonColor: "bg-[#db0096] hover:bg-[#EC8DFF]",
    },
  },
  demonsGate: {
    key: "demonsGate",
    category: "Board Games",
    card: {
      label: "Boardgame",
      title: "Demon's Gate",
      description:
        "Demon’s Gate is a 1-vs-many survival board game where survivors complete tasks to escape via pentagram while a d8 Demon hunts with traps and a wall-phase cooldown. I ran playtests and wrote rules to tune fairness and pacing.",
      image: "./images/projectImages/demonsGate/demon1.png",
      tags: ["Game Design", "Mechanic Design", "Level Design"],
      link: "https://ridham225sharma.wixsite.com/iat210",
      buttonText: "Website",
    },
  },
  voltLegacy: {
    key: "voltLegacy",
    category: "Video Games",
    card: {
      label: "Videogame",
      title: "Volt Legacy",
      description:
        "Volt Legacy is a challenging platformer where I hand-coded every system in Processing (Java) without a game engine. I wrote custom physics and collision from the ground up, implementing rendering, sound, and UI. I debugged each layer individually to produce a complete, polished game.",
      // image: "./images/projectImages/voltLegacy/volt1.png",
      video: "/images/projectImages/voltLegacy/voltLegacyCardGameplay.mp4",
      videoAspect: "",
      videoControls: true,
      videoVolume: true,
      videoFullscreen: true,
      tags: ["Processing", "Combat Design", "Debugging"],
      // ctaTo: "/analyses/volt-legacy",
      // buttonText: "Analysis",
      // buttonColor: "bg-[#db0096] hover:bg-[#EC8DFF]",
      buttons: [
        {
         text: "GitHub",
         href: "https://github.com/ekam-n/volt-legacy" 
        }
      ]
    },
  },
  greatMapleSyrupHeist: {
    key: "greatMapleSyrupHeist",
    category: "Unlabeled",
    card: {
      label: "3D Animation",
      title: "The Great Maple Syrup Heist",
      description:
        "The Great Maple Syrup Heist is a 2.5-minute animated short about two Canadian geese pulling off a heist on a top-secret maple syrup reserve, inspired by the real Great Canadian Maple Syrup Heist. I owned two full sequences end to end, the break-in montage and part of the vault sequence, handling modeling, rigging, lighting, and animation across the complete Maya pipeline.",
      tags: ["Maya", "3D Animation", "Rigging"],
      youtubeId: "rUDn-PJZg38",
      videoAspect: "aspect-video",
      videoControls: true,
      videoVolume: true,
      videoFullscreen: true,
      buttons: [
        {
         text: "Website",
         href: "https://syrupheist.netlify.app/" 
        }
      ]
    },
  },
  snuggleSculptors: {
    key: "snuggleSculptors",
    category: "Web Apps",
    card: {
      label: "Simulation",
      title: "Snuggle Sculptors",
      description:
        "Snuggle Sculptors is a build-a-bear simulation built in Java, where I used decorator and factory patterns to dynamically update the bear with graphics and sound integration.",
      image: "./images/projectImages/snuggleSculptors/snuggle1.png",
      tags: ["OOP", "Java", "Illustrator"],
      link: "https://github.com/ekam-n/snuggle-sculptors",
      buttonText: "GitHub",
    },
  },
};
