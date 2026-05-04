import { client } from "@/sanity/lib/client";
import { vehicleBySlugQuery } from "@/lib/queries";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const vehicle = await client.fetch(vehicleBySlugQuery, { slug });

  if (!vehicle) notFound();

  const precioFormateado = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(vehicle.precio);

  const whatsappMsg = encodeURIComponent(
    `Hola, me interesa el ${vehicle.marca} ${vehicle.modelo} ${vehicle.anio}`
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          {vehicle.marca} {vehicle.modelo}
        </h1>
        <p className="text-gray-400 mt-1">{vehicle.anio}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Fotos */}
        <div className="space-y-4">
          {vehicle.fotos && vehicle.fotos.length > 0 ? (
            vehicle.fotos.map((foto: any, index: number) => (
              <img
                key={index}
                src={foto.asset.url}
                alt={`${vehicle.marca} ${vehicle.modelo} - foto ${index + 1}`}
                className="w-full rounded-xl object-cover"
              />
            ))
          ) : (
            <div className="h-64 bg-gray-800 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Sin fotos disponibles</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">

          {/* Precio */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <p className="text-gray-400 text-sm mb-1">Precio</p>
            <p className="text-red-500 text-3xl font-bold">{precioFormateado}</p>
          </div>

          {/* Detalles */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Año</span>
              <span className="text-white font-medium">{vehicle.anio}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Kilometraje</span>
              <span className="text-white font-medium">
                {vehicle.kilometraje?.toLocaleString("es-CO")} km
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Marca</span>
              <span className="text-white font-medium">{vehicle.marca}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Modelo</span>
              <span className="text-white font-medium">{vehicle.modelo}</span>
            </div>
          </div>

          {/* Descripción */}
          {vehicle.descripcion && (
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <p className="text-gray-400 text-sm mb-2">Descripción</p>
              <p className="text-white leading-relaxed">{vehicle.descripcion}</p>
            </div>
          )}

         {/* WhatsApp */}
            <a
            href={`https://wa.me/573209707460?text=${whatsappMsg}`}
            target="_blank"
            rel="noreferrer"
            className="block w-full bg-green-600 hover:bg-green-500 text-white text-center font-bold py-4 rounded-xl transition-colors text-lg">
            📱 Consultar por WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
}