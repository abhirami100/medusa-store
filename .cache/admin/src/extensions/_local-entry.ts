import Page0, { config as routeConfig0 } from "./routes/custom/page"

const LocalEntry = {
  identifier: "local",
  extensions: [
    { Component: Page0, config: { ...routeConfig0, path: "/custom" } }
  ],
}

export default LocalEntry