export const vehiclesQuery = `*[_type == "vehicle"] | order(_createdAt desc) {
  _id,
  marca,
  modelo,
  anio,
  precio,
  kilometraje,
  descripcion,
  slug,
  fotos,
  destacado
}`;

export const vehicleBySlugQuery = `*[_type == "vehicle" && slug.current == $slug][0] {
  _id,
  marca,
  modelo,
  anio,
  precio,
  kilometraje,
  descripcion,
  slug,
  fotos,
  destacado
}`;