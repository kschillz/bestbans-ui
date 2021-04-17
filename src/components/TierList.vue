<template>
  <div v-if="patch">
    <TierItem
      v-for="tier in tiers"
      :key="tier.value"
      :tierInfo="tier"
    />
  </div>
</template>

<script>
import TierItem from "./TierItem.vue";
import { tiers } from "../enums";
import axios from "axios";

export default {
  name: "TierList",
  components: {
    TierItem,
  },
  data() {
    return {
      tiers: tiers,
    };
  },
  methods: {
    async fetchMeta() {
      const url = "https://bestbans-stats.netlify.app/meta.json";
      const response = await axios.get(url);
      this.$store.commit("setPatch", response.data.latest_patch);
      this.$store.commit("setLastUpdated", response.data.last_updated);
    },
  },
  computed: {
    patch: function () {
      return this.$store.getters.patch;
    }
  },
  mounted() {
    this.fetchMeta();
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
