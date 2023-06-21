import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : {
// This creates an alias for the "@" symbol and replaces it with the path to the "src" directory. 
    alias : [{find : "@", replacement : path.resolve(__dirname, "src")}],

  }
})
