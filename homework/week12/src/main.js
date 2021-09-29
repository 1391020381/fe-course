import { createApp } from 'vue'
import App from './App.vue'
import InfiniteScroll from '@/components/infinite-scroll'
const app = createApp(App)
app.use(InfiniteScroll)
app.mount('#app')
