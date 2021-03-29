<template>
  <h1>{{ msg }}</h1>
  <div class="tier-list">
    <TierItem v-for="tier in tiers"  :key="tier.value" :tierInfo="tier"/>
    <!-- <TierItem :tierInfo="tiers[0]" /> -->
  </div>
</template>

<script>
import TierItem from './TierItem.vue'
import { tiers } from '../enums';

export default {
  name: 'TierList',
  components: {
    TierItem
  },
  props: {
    msg: String
  },
  data () {
    return {
      tiers: tiers
    }
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
