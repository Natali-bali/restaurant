import { createApp } from 'vue'
import App from './App.vue'
import sectionView from './components/SectionView.vue'

const app = createApp(App);
app.component('sectionView', sectionView)


app.mount('#app')
