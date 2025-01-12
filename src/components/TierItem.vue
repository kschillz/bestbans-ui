<template>
  <div class="pt-8" :id="tierInfo.value">
    <div
      class="bg-gray-300 border-2 border-gray-400 w-10/12 m-auto max-w-4xl pb-4 text-center text-gray-900"
    >
      <h2 class="pt-4">{{ tierInfo.repr }}</h2>
      <div class="flex flex-wrap justify-center">
        <Champion v-for="ban in bans" :key="ban.key" :championStats="ban" />
      </div>
    </div>
  </div>
</template>

<script>
import Champion from "./Champion";
import axios from "axios";

export default {
  name: "TierItem",
  components: {
    Champion,
  },
  props: {
    tierInfo: Object,
  },
  data() {
    return {
      champions: null,
      averageWinRate: null,
    };
  },
  computed: {
    bans: function () {
      if (this.champions == null) {
        return null;
      }
      return this.champions.slice(0, 5);
    },
  },
  methods: {
    async fetchBans() {
      const url = `https://bestbans-stats.netlify.app/${this.$store.getters.patch}/${this.tierInfo.value}.json`;
      const response = await axios.get(url);
      this.champions = response.data.champions;
      this.averageWinRate = response.data.average_win_rate;
    },
  },
  mounted() {
    this.fetchBans();
  },
};
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
