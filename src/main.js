import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import "./index.css"

const store = createStore({
    state () {
        return {
            lastUpdated: '',
            title: 'bestbans.gg',
            patch: '',
        }
    },
    getters: {
        lastUpdated: state => {
            return new Date(state.lastUpdated).toLocaleString()
        },
        title: state => {
            return state.title
        },
        patch: state => {
            return state.patch
        }
    },
    mutations: {
        setLastUpdated (state, newValue) {
            state.lastUpdated = newValue
        },
        toggleTitle (state) {
            state.title = state.title == 'bestbans.gg' ? 'worstbans.gg': 'bestbans.gg'
        },
        setPatch (state, newValue) {
            state.patch = newValue
        }
    }
})

const app = createApp(App)

app.use(store)
app.mount('#app')
