<template>
  <ul class="tier-item" :id="tierInfo.value">
    <h2>{{ tierInfo.repr }}</h2>
    <p>Average {{  tierInfo.repr }} Win Rate: {{ (averageWinRate * 100).toFixed(1) }}%</p>
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
      champions: null,
      averageWinRate: null,
    }
  },
  computed: {
    bans: function() {
      if (this.champions == null) {
        return null;
      }
      const sortFn = this.$store.getters.title.includes('best')
        ? this.sortBestBans
        : this.sortWorstBans;
      const temp = this.champions;
      temp.sort((x, y) => sortFn(x, y));
      return temp.slice(0, 5);
    }
  },
  methods: {
    sortBestBans(x, y) {
      return y.ban_score - x.ban_score;
    },
    sortWorstBans(x, y) {
      return x.ban_score - y.ban_score;
    },
    async fetchBans() {
      // todo get latest patch
      const url = `https://bestbans-stats.netlify.app/11.7.1/${this.tierInfo.value}.json`;
      const response = await axios.get(url);
      this.champions = response.data.champions;
      this.averageWinRate = response.data.average_win_rate;
      if (this.tierInfo.value == 'iron') {
        this.$store.commit('setLastUpdated', response.data.last_updated);
      }
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
