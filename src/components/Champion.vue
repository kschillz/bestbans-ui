<template>
  <div class="px-4">
    <img
      :src="`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${championStats.id}.png`"
    />
    <h4>{{ championStats.name }}</h4>
    <div class="text-left">
      <Stat :label="'Ban Score:'" :stat="championStats.ban_score.toFixed(2)" />
      <Stat
        :label="'Pick Rate:'"
        :stat="(championStats.pick_rate * 1000).toFixed(1) + '%'"
      />
      <Stat
        :label="'Win Rate:'"
        :stat="(championStats.win_rate * 100).toFixed(1) + '%'"
      />
    </div>
  </div>
</template>

<script>
import Stat from "./Stat";
export default {
  name: "Champion",
  components: {
    Stat,
  },
  props: {
    championStats: Object,
  },
  computed: {
    patch: function () {
      return this.$store.getters.patch;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
  float: right;
}

h4 {
  margin: 0;
  margin-bottom: 0.5em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
.champion-info p {
  margin: 0;
}
</style>
