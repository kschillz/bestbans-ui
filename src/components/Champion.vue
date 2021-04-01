<template>
  <div class="px-4">
    <img
      :src="`https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/${championStats.id}.png`"
    />
    <h4>{{ championStats.name }}</h4>
    <div class="text-left">
      <p>
        Ban Score:
        <span class="text-right">{{ championStats.ban_score.toFixed(2) }}</span>
      </p>
      <p>
        Pick Rate:
        <span class="text-right"
          >{{ (championStats.pick_rate * 1000).toFixed(1) }}%</span
        >
      </p>
      <p>
        Win Rate:
        <span class="text-right"
          >{{ (championStats.win_rate * 100).toFixed(1) }}%</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Champion",
  props: {
    championStats: Object,
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
