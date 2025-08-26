import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ekam-n/", text: "LinkedIn" },
  { href: "https://github.com/ekam-n",            text: "GitHub"   },
  { href: "mailto:ekamnijjar@gmail.com",           text: "Email"    },
];

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false); // desktop contact dropdown
  const [mobileOpen, setMobileOpen]   = useState(false); // mobile combined dropdown

  const contactWrapRef = useRef<HTMLDivElement>(null); // desktop
  const mobileWrapRef  = useRef<HTMLDivElement>(null); // mobile

  // Close when clicking/tapping anywhere outside the dropdown areas
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      const contactEl = contactWrapRef.current;
      const mobileEl  = mobileWrapRef.current;

      const target = e.target as Node;
      const outsideContact = contactEl ? !contactEl.contains(target) : true;
      const outsideMobile  = mobileEl  ? !mobileEl.contains(target)  : true;

      if (outsideContact) setContactOpen(false);
      if (outsideMobile)  setMobileOpen(false);
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

      {/* Desktop nav (unchanged behavior): visible md and up */}
      <nav className="hidden md:flex items-center space-x-4 md:space-x-6">
        {/* Projects Link */}
        <Link
          to="/projects"
          className="inline-block px-2 py-1 md:py-2 text-sm md:text-base lg:text-lg cursor-pointer hover:underline"
        >
          Projects
        </Link>

        {/* Contact Dropdown (hover on mouse, tap/click toggles) */}
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
            onClick={() => setContactOpen((v) => !v)}   // tap/click toggles
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

      {/* Mobile combined dropdown: visible below md */}
      <div ref={mobileWrapRef} className="relative md:hidden">
        <button
          className="inline-block px-3 py-2 text-sm cursor-pointer hover:underline"
          onClick={() => setMobileOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={mobileOpen}
        >
          Menu
        </button>

        {mobileOpen && (
          <div className="absolute right-0 top-full mt-1 w-40 bg-black/70 backdrop-blur-md rounded-lg shadow-lg">
            <Link
              to="/projects"
              className="block px-4 py-2 text-sm text-left cursor-pointer hover:bg-black/60"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>
            <div className="h-px bg-white/10 my-1" />
            {socialLinks.map(({ href, text }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-left cursor-pointer hover:bg-black/60"
                onClick={() => setMobileOpen(false)}
              >
                {text}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
