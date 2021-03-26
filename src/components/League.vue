<template>
  <div class="league">
    <h2>{{ name }}</h2>
    <p>{{ bans }}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'League',
  props: {
    name: String
  },
  data () {
    return {
      bans: null
    }
  },
  methods: {
    async fetchBans() {
      const url = "/.netlify/functions/blitz";
      const response = await axios.get(url);
      console.log(response);
      this.bans = response.data.message;
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
