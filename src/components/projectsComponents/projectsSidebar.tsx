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
    <aside className="fixed top-0 left-0 h-full w-52 bg-black/70 text-white backdrop-blur-md p-6">
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
