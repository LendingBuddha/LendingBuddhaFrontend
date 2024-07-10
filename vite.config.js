import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    "proxy" :  {
      "/api" : {
        target : "https://vigilant-space-meme-x9xgp66j7492vx56-3000.app.github.dev/" 
      }
    }
  }
})
