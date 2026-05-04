import Link from "next/link";

interface Vehicle {
  _id: string;
  marca: string;
  modelo: string;
  anio: number;
  precio: number;
  kilometraje: number;
  slug: { current: string };
  fotos: any[];
}

interface Props {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: Props) {
  const precioFormateado = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(vehicle.precio);

  return (
    <Link href={`/catalogo/${vehicle.slug.current}`}>
      <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        
        {/* Imagen */}
        <div className="h-48 bg-gray-800 flex items-center justify-center">
          {vehicle.fotos && vehicle.fotos.length > 0 ? (
            <img
              src={vehicle.fotos[0].asset.url}
              alt={`${vehicle.marca} ${vehicle.modelo}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-600 text-sm">Sin foto</span>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-white font-bold text-lg">
            {vehicle.marca} {vehicle.modelo}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{vehicle.anio}</p>

          <div className="flex items-center justify-between">
            <span className="text-red-500 font-bold text-lg">
              {precioFormateado}
            </span>
            <span className="text-gray-500 text-xs">
              {vehicle.kilometraje?.toLocaleString("es-CO")} km
            </span>
          </div>
        </div>

      </div>
    </Link>
  );
}