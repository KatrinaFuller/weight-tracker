<template>
  <div class="challenges container-fluid">
    <h1>Challenges</h1>
    <challenge v-for="challenge in challenges" :key="challenge.id" :challengeProp="challenge" />
  </div>
</template>


<script>
import challenge from "../components/challenge";

export default {
  name: "challenges",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    challenges() {
      return this.$store.state.challenges;
    }
  },
  methods: {},
  components: { challenge }
};
</script>


<style scoped>
</style>