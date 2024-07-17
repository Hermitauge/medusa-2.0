import { loadEnv, defineConfig } from '@medusajs/utils'

loadEnv(process.env.NODE_ENV, process.cwd())

const plugins = [
  {
    resolve: "@medusajs/admin",
    /** @type {import('@medusajs/admin').PluginOptions} */
    options: {
      autoRebuild: true,
      path: "/",
      develop: {
        open: process.env.OPEN_BROWSER !== "false",
        port: ADMIN_APP_PORT,
      },
    },
  }
  ]

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS,
      adminCors: process.env.ADMIN_CORS,
      authCors: process.env.AUTH_CORS,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  }
})
