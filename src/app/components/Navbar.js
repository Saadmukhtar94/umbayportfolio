export default function Navbar() {
    return (
      <nav className="fixed w-full bg-gray-800 p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">UnityDevPortfolio</h1>
          <div className="space-x-6">
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>
    );
  }