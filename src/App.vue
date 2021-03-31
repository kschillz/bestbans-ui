<template>
  <nav>
    <h1 v-on:click="toggleSortOrder">{{ title }}</h1>
    <div class="nav-tier">
      <ul>
        <li v-for="tier in tiers" :key="tier.value">
          <a :href="`#${tier.value}`">{{tier.repr}}</a>
        </li>
      </ul>
    </div>
  </nav>
  <TierList />
  <div class="meta">
    <p>Last Updated: {{ lastUpdated }}</p>
  </div>
</template>

<script>
import TierList from './components/TierList.vue'
import { tiers } from './enums';

export default {
  name: 'App',
  components: {
    TierList
  },
  computed: {
    lastUpdated: function () {
      return this.$store.getters.lastUpdated
    },
    title: function () {
      return this.$store.getters.title
    }
  },
  data () {
    return {
      tiers: tiers
    }
  },
  methods: {
    toggleSortOrder() {
      this.$store.commit('toggleTitle');
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
  text-align: center;
}
nav h1 {
  float: left;
  padding: 10px;
  margin: 0px;
}
.meta {
  float: right;
  font-size: smaller;
}
.nav-tier {
  float: right;
  padding: 10px;
  margin: 0px;
}
.nav-tier ul {
  list-style-type: none;
}
.nav-tier li {
  float: left;
  padding-left: 10px;
}
.nav-tier li a {
  display: block;
  color: #42b983;
}
</style>
