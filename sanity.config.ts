import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Vitrina Motors CMS",
  projectId: "2dupyrtu",
  dataset: "production",
  plugins: [
    structureTool({
      name: "studio",
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});