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
