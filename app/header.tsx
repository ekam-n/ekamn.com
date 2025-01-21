const links = [
  { href: "https://www.linkedin.com/in/ekam-n/", text: "LinkedIn" },
  { href: "https://github.com/ekam-n", text: "GitHub" },
  { href: "mailto:ekamnijjar@gmail.com", text: "Email" },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black text-white sticky top-0 z-50">
      <div className="text-xl cursor-pointer">Ekam Nijjar</div>
      <nav className="flex space-x-6">
        {links.map(({ href, text }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {text}
          </a>
        ))}
      </nav>
    </header>
  );
}
