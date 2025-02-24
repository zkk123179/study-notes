import { defineConfig } from 'vitepress'
import { nav } from './relaConf'
export default defineConfig({
  base: '/little-sunflower/',
  title: "小葵花", // title
  description: "",
  themeConfig: {
    logo:'/img/logo.jpg',
    nav: nav,
    i18nRouting: true
  }
})
