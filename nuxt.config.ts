import { components } from "./extends";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  extends: [components],
  devtools: { enabled: true },
});
