import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ekam-n/", text: "LinkedIn" },
  { href: "https://github.com/ekam-n",            text: "GitHub"   },
  { href: "mailto:ekamnijjar@gmail.com",           text: "Email"    },
];

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const contactWrapRef = useRef<HTMLDivElement>(null);

  // Close when clicking/tapping anywhere outside the Contact area
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      const el = contactWrapRef.current;
      if (el && !el.contains(e.target as Node)) {
        setContactOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-3 md:py-4 bg-black/50 text-white z-50 backdrop-blur-md">
      {/* Name links home */}
      <Link
        to="/"
        className="inline-block px-2 py-1 md:py-2 text-base text-lg md:text-lg lg:text-xl cursor-pointer hover:underline"
      >
        Ekam Nijjar
      </Link>

      <nav className="flex items-center space-x-4 md:space-x-6">
        {/* Projects Link */}
        <Link
          to="/projects"
          className="inline-block px-2 py-1 md:py-2 text-sm md:text-base lg:text-lg cursor-pointer hover:underline"
        >
          Projects
        </Link>

        {/* Contact Dropdown */}
        <div
          ref={contactWrapRef}
          className="relative"
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") setContactOpen(true);  // hover: open
          }}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") setContactOpen(false); // hover: close
          }}
        >
          <button
            className="inline-block px-2 py-1 md:py-2 text-sm md:text-base lg:text-lg cursor-pointer hover:underline"
            onClick={() => setContactOpen((v) => !v)}   // tap/click toggles on touch
            aria-haspopup="menu"
            aria-expanded={contactOpen}
          >
            Contact
          </button>

          {contactOpen && (
            <div className="absolute left-1/2 top-full transform -translate-x-1/2 w-28 bg-black/70 backdrop-blur-md rounded-lg shadow-lg">
              {socialLinks.map(({ href, text }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-center cursor-pointer hover:bg-black/60"
                >
                  {text}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
