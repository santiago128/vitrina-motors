import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Columna 1 — Logo */}
        <div>
          <Link href="/" className="text-white text-xl font-bold tracking-tight">
            Vitrina<span className="text-red-500">Motors</span>
          </Link>
          <p className="text-gray-400 text-sm mt-2">
            Tu próximo carro está aquí.
          </p>
        </div>

        {/* Columna 2 — Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Navegación</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/catalogo" className="text-gray-400 hover:text-white transition-colors text-sm">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 — Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <Link
            href="https://wa.me/573209707460"
            target="_blank"
            className="text-gray-400 hover:text-green-400 transition-colors text-sm"
          >
            📱 +57 320 970 7460
          </Link>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Vitrina Motors. Todos los derechos reservados.
      </div>
    </footer>
  );
}