<template>
  <div id="add-challenge-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Challenge</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addChallenge()">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="challenge name"
                placeholder="Enter name of challenge"
                v-model="newChallenge.challengeName"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="goal"
                placeholder="Enter goal"
                v-model="newChallenge.goal"
              />
            </div>
            <div class="form-group">
              <input
                type="date"
                class="form-control"
                id="start-date"
                placeholder="Enter Start Date"
                v-model="newChallenge.startDate"
              />
            </div>
            <div class="form-group">
              <input
                type="date"
                class="form-control"
                id="end-date"
                placeholder="Enter End Date"
                v-model="newChallenge.endDate"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "add-challenge-modal",
  data() {
    return {
      newChallenge: {}
    };
  },
  computed: {},
  methods: {
    addChallenge() {
      this.$store.dispatch("addChallenge", this.newChallenge);
      $(".close").click();
    }
  },
  components: {}
};
</script>


<style scoped>
</style>