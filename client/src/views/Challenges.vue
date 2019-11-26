<template>
  <div class="challenges container-fluid">
    <h1>Challenges</h1>
    <addChallengeModal />
    <button
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#add-challenge-modal"
    >Add New Challenge</button>
    <challenge v-for="challenge in challenges" :key="challenge.id" :challengeProp="challenge" />
  </div>
</template>


<script>
import router from "@/router/index.js";
import challenge from "../components/challenge";
import addChallengeModal from "../components/addChallengeModal";

export default {
  name: "challenges",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getChallenges");
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
  components: { challenge, addChallengeModal }
};
</script>


<style scoped>
</style>