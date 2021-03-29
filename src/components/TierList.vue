<template>
  <h1 v-on:click="toggleSortOrder">{{ msg }}</h1>
  <div class="tier-list">
    <TierItem v-for="tier in tiers"  :key="tier.value" :tierInfo="tier" :msg="msg" />
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
  data () {
    return {
      msg: 'bestbans.gg',
      tiers: tiers
    }
  },
  methods: {
    toggleSortOrder() {
      this.msg = this.msg == 'bestbans.gg' ? 'worstbans.gg' : 'bestbans.gg';
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
