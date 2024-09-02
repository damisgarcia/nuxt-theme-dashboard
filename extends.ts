export const components =
  import.meta.env.MODE == "development"
    ? "../components"
    : ([
        "github:damisgarcia/nuxt-theme-components#main",
        { auth: process.env.GITHUB_TOKEN },
      ] as any);
