<template>
  <nav class="flex items-center pt-4">
    <h1 class="pl-10 w-1/12">
      {{ title }}
    </h1>
    <ul class="justify-end pr-4 w-11/12 hidden lg:flex">
      <li class="px-2" v-for="tier in tiers" :key="tier.value">
        <a class="link" :href="`#${tier.value}`">{{ tier.repr }}</a>
      </li>
    </ul>
  </nav>
  <TierList />
  <div class="meta">
    <p>Last Updated: {{ lastUpdated }}</p>
    <p>Patch: {{ patch }}</p>
  </div>
</template>

<script>
import TierList from "./components/TierList.vue";
import { tiers } from "./enums";

export default {
  name: "App",
  components: {
    TierList,
  },
  computed: {
    lastUpdated: function () {
      return this.$store.getters.lastUpdated;
    },
    title: function () {
      return this.$store.getters.title;
    },
    patch: function() {
      return this.$store.getters.patch;
    },
  },
  data() {
    return {
      tiers: tiers,
    };
  },
};
</script>
