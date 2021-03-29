<template>
  <li class="champion-info">
    <img :src="`https://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/${championStats.id}.png`" />
    <h4>{{ championStats.name }}</h4>
    <p>{{ championStats.ban_score }}</p>
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
