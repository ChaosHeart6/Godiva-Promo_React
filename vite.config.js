import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {//目前非必要如果是用PROXY來連接API才需要，當前上線平台Infinityapp會阻擋使用不了
    proxy: {
      '/api': {
        target: 'https://godiva-promo-not-official.infinityfreeapp.com',
        changeOrigin: true,//繞過封鎖本機的REQUEST
        rewrite: path => path.replace(/^\/api/, '')//把api摘掉變成....com/view.php
      }
    }
  },
  plugins: [react()],
  //base:'/Godiva-Promo_React/'本機測試需要加，以確認目錄路徑不會出錯，上線通常不用加或base:'./'
})
