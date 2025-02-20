import { defineConfig } from 'vitepress'
import { nav } from './relaConf'
export default defineConfig({
  base: '/vitepress-demo-mondaylab/',
  title: "little-sunflower", // title
  description: "",
  themeConfig: {
    logo:'/img/logo.jpg',
    nav: nav,
    i18nRouting: true
  }
})
