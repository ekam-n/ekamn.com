import { useState } from "react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ekam-n/", text: "LinkedIn" },
  { href: "https://github.com/ekam-n",            text: "GitHub"   },
  { href: "mailto:ekamnijjar@gmail.com",           text: "Email"    },
];

export default function Header() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-3 md:py-4 bg-black/50 text-white z-50 backdrop-blur-md">
      <div className="text-base md:text-lg lg:text-xl cursor-pointer">
        Ekam Nijjar
      </div>
      <nav className="flex items-center space-x-4 md:space-x-6">
        {/* Projects Link */}
        <a
          href="/projects"
          className="text-sm md:text-base lg:text-lg hover:underline"
        >
          Projects
        </a>

        {/* Contact with controlled dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setContactOpen(true)}
          onMouseLeave={() => setContactOpen(false)}
        >
          <button className="text-sm md:text-base lg:text-lg hover:underline">
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
                className="block px-4 py-2 text-sm text-center hover:bg-black/60"
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
