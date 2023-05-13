import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import '@/assets/style/normalize.css'
import router from './router'
import SvgIcon from './components/SvgIcon/SvgIcon.vue'
import '@/assets/iconfont/iconfont.js'
import 'github-markdown-css'
import { createHead } from "@unhead/vue"


const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
