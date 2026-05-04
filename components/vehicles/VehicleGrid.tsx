import VehicleCard from "./VehicleCard";

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
  vehicles: Vehicle[];
}

export default function VehicleGrid({ vehicles }: Props) {
  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg">No hay vehículos disponibles.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} vehicle={vehicle} />
      ))}
    </div>
  );
}