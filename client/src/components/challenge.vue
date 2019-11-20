<template>
  <div class="challenge row">
    <div class="col-3">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{challengeProp.challengeName}}</h5>
          <h6
            class="card-subtitle mb-2 text-muted"
          >{{challengeProp.startDate}} - {{challengeProp.endDate}}</h6>
          <p class="card-text">{{challengeProp.goal}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "challenge",
  prop: ["challengeProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>