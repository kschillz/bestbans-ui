import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state () {
        return {
            lastUpdated: '',
        }
    },
    getters: {
        lastUpdated: state => {
            return new Date(state.lastUpdated).toLocaleString()
        }
    },
    mutations: {
        setLastUpdated (state, newValue) {
            state.lastUpdated = newValue
        }
    }
})

const app = createApp(App)

app.use(store)
app.mount('#app')
