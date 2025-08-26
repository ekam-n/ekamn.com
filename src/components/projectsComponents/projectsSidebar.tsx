// projectsSidebar.tsx
import type { Label } from "../projectsComponents";

type Props = {
  labels: readonly Label[];
  selected: Set<Label>;
  toggleLabel: (label: Label) => void;
};

export default function ProjectsSidebar({ labels, selected, toggleLabel }: Props) {
  return (
    <aside
      className="
        hidden md:block fixed left-0 top-14
    h-[calc(100vh-3.5rem)]
    md:w-52 lg:w-56 xl:w-52         
    bg-black/70 text-white backdrop-blur-md p-6 border-r border-white/10
    z-30
      "
    >
      <nav className="flex flex-col gap-3">
        {labels.map((label) => {
          const isActive = selected.has(label);
          return (
            <button
              key={label}
              type="button"
              onClick={() => toggleLabel(label)}
              aria-pressed={isActive}
              className={[
                "w-full text-left rounded-xl px-3 py-2 transition",
                "hover:bg-white/10",
                isActive
                  ? "outline outline-2 outline-white"
                  : "outline outline-2 outline-transparent"
              ].join(" ")}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
