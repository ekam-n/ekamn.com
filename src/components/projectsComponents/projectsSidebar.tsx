// src/components/projectsComponents/ProjectsSidebar.tsx
import { NavLink } from "react-router-dom";

const categories = [
  { to: "boardgames",   label: "Boardgames"      },
  { to: "videogames",   label: "Video Games"     },
  { to: "webapps",      label: "Web Apps"        },
  { to: "animations",   label: "Animations"      },
  { to: "miscellaneous",label: "Miscellaneous"   },
];

export default function ProjectsSidebar() {
  return (
    <aside className="hidden md:block
        fixed left-0 top-14
        h-[calc(100vh-3.5rem)] w-52
        bg-black/70 text-white backdrop-blur-md p-6
        border-r border-white/10
        z-30">
      <nav className="flex flex-col space-y-4">
        {categories.map(({ to, label }) => (
          <NavLink
            key={to}
            to={`/projects/${to}`}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-white/30 text-white"
                  : "hover:bg-white/20 text-white"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
