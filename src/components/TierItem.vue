<template>
  <ul class="tier-item">
    <h2>{{ tierInfo.repr }}</h2>
    <Champion v-for="ban in bans" :key="ban.key" :championStats="ban" />
  </ul>
</template>

<script>
import Champion from "./Champion"
import axios from "axios"

export default {
  name: 'TierItem',
  components: {
    Champion
  },
  props: {
    tierInfo: Object
  },
  data () {
    return {
      bans: null
    }
  },
  methods: {
    async fetchBans() {
      const url = `https://bestbans-stats.netlify.app/11.6.1/${this.tierInfo.value}.json`;
      const response = await axios.get(url);
      const bestBans = response.data.champions;
      bestBans.sort((x, y) => y.ban_score - x.ban_score);
      this.bans = bestBans.slice(0, 5);
    }
  },
  mounted () {
    this.fetchBans();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
