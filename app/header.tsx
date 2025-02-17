const links = [
  { href: "https://www.linkedin.com/in/ekam-n/", text: "LinkedIn" },
  { href: "https://github.com/ekam-n", text: "GitHub" },
  { href: "mailto:ekamnijjar@gmail.com", text: "Email" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-3 md:py-4 bg-black/50 text-white z-50 backdrop-blur-md">
      <div className="text-base md:text-lg lg:text-xl cursor-pointer">
        Ekam Nijjar
      </div>
      <nav className="flex space-x-4 md:space-x-6">
        {links.map(({ href, text }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base lg:text-lg hover:underline"
          >
            {text}
          </a>
        ))}
      </nav>
    </header>
  );
}
