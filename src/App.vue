<template>
  <nav>
    <h1 v-on:click="toggleSortOrder">{{ msg }}</h1>
    <div class="nav-right">
      <p>Last Updated: {{ lastUpdated }}</p>
    </div>
  </nav>
  <TierList :msg="msg"/>
</template>

<script>
import TierList from './components/TierList.vue'

export default {
  name: 'App',
  components: {
    TierList
  },
  computed: {
    lastUpdated: function () {
      return new Date(this.$store.state.lastUpdated).toLocaleString();
    }
  },
  data () {
    return {
      msg: 'bestbans.gg',
    }
  },
  methods: {
    toggleSortOrder() {
      this.msg = this.msg == 'bestbans.gg' ? 'worstbans.gg' : 'bestbans.gg';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  overflow: hidden;
}
nav h1 {
  float: left;
  text-align: center;
  padding: 10px;
  margin: 0px;
}
nav .nav-right {
  float: right;
  text-align: center;
}
</style>
