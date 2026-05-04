export const vehicle = {
  name: "vehicle",
  title: "Vehículo",
  type: "document",
  fields: [
    {
      name: "marca",
      title: "Marca",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "modelo",
      title: "Modelo",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "anio",
      title: "Año",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "precio",
      title: "Precio (COP)",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "kilometraje",
      title: "Kilometraje",
      type: "number",
    },
    {
      name: "descripcion",
      title: "Descripción",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "modelo" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "fotos",
      title: "Fotos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "destacado",
      title: "Destacado en Home",
      type: "boolean",
      initialValue: false,
    },
  ],
};