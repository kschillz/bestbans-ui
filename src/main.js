import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import "./index.css"

const store = createStore({
    state () {
        return {
            lastUpdated: '',
            title: 'bestbans.gg',
        }
    },
    getters: {
        lastUpdated: state => {
            return new Date(state.lastUpdated).toLocaleString()
        },
        title: state => {
            return state.title
        }
    },
    mutations: {
        setLastUpdated (state, newValue) {
            state.lastUpdated = newValue
        },
        toggleTitle (state) {
            state.title = state.title == 'bestbans.gg' ? 'worstbans.gg': 'bestbans.gg'
        }
    }
})

const app = createApp(App)

app.use(store)
app.mount('#app')
