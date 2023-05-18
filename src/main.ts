import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import '@/assets/style/normalize.css'
import router from './router'
import SvgIcon from './components/SvgIcon/SvgIcon.vue'
import '@/assets/iconfont/iconfont.js'
import 'github-markdown-css'
import { createHead } from "@unhead/vue"
import 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
