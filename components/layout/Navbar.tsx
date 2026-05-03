import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold tracking-tight">
          Vitrina<span className="text-red-500">Motors</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/catalogo" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Catálogo
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contacto
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}