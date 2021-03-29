import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state () {
        return {
            lastUpdated: '',
        }
    },
    mutations: {
        setLastUpdated (state, newValue) {
            console.log('setting last updated', newValue)
            state.lastUpdated = newValue
        }
    }
})

const app = createApp(App)

app.use(store)
app.mount('#app')
