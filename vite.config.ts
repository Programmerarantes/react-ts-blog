import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css : {
    postcss : {
      plugins : [tailwindcss()]
    }
  },
  define: {
    'process.env': {
      VITE_STRAPI_API_TOKEN: process.env.VITE_STRAPI_API_TOKEN,
      VITE_PAGE_LIMIT: process.env.VITE_PAGE_LIMIT,
      VITE_STRAPI_API_URL: process.env.VITE_STRAPI_API_URL,
    }
  }
})
