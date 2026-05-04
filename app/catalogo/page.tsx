import { client } from "@/sanity/lib/client";
import { vehiclesQuery } from "@/lib/queries";
import VehicleGrid from "@/components/vehicles/VehicleGrid";

export const revalidate = 60;

export default async function CatalogoPage() {
  const vehicles = await client.fetch(vehiclesQuery);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Catálogo de Vehículos</h1>
        <p className="text-gray-400 mt-2">
          Encuentra tu próximo carro entre nuestra selección
        </p>
      </div>
      <VehicleGrid vehicles={vehicles} />
    </div>
  );
}