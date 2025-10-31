export default function Sidebar() {
  return (
    <aside className="w-60 bg-[#18151f] border-r border-[#2a2731] p-6 hidden md:flex flex-col justify-between">
        <div>
        <h2 className="text-lg font-semibold mb-6 bg-gradient-to-r from-[#d4af37] to-[#7f3cff] bg-clip-text text-transparent">
            Bryan Blankenburg
        </h2>
        <nav className="space-y-4 text-sm">
          <a href="/" className="block hover:text-[#d4af37] transition-colors">
            Home
          </a>
          <a href="/about" className="block hover:text-[#d4af37] transition-colors">
            About
          </a>
          <a href="/projects" className="block hover:text-[#d4af37] transition-colors">
            Projects
          </a>
          <a href="/contact" className="block hover:text-[#d4af37] transition-colors">  
            Contact
          </a>  
        </nav>
      </div>

      <div className="text-xs text-gray-500">
         <p className="leading-relaxed">“Designing systems with soul.”</p>
      </div>
    </aside>
  );
}
