<template>
  <li class="champion-info">
    <img :src="`https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/${championStats.id}.png`" />
    <h4>{{ championStats.name }}</h4>
    <p>Ban Score: {{ championStats.ban_score.toFixed(2) }}</p>
    <p>Pick Rate: {{ (championStats.pick_rate * 1000).toFixed(1) }}%</p>
    <p>Win Rate: {{ (championStats.win_rate * 100).toFixed(1) }}%</p>
  </li>
</template>

<script>
export default {
  name: 'Champion',
  props: {
    championStats: Object
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
}
a {
  color: #42b983;
}
</style>
