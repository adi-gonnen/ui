<template>
  <div class="activity lower-box">
    <div class="activity-header flex"> 
      <p class="activity-title bold">activity</p>
      <div class="notification flex">
        <div class="notific-count">
          <p>{{activities.length}}</p>
        </div>
      </div>
    </div>
    <div class="preview-container">
      <ul v-for="(activity, index) in activities.slice(0,4)" :key="index">
        <activity-preview :activity="activity" :idx="index" class="preview-activity ptr"/>
      </ul>
    </div>
  </div>
</template>

<script>
import ActivityPreview from '@/cmps/ActivityPreview.vue'

export default {
  name: 'activity',
  components: {
    ActivityPreview
  },
  created() {
    this.getActivitiesList()
  },
  computed: {
    activities() {
      return this.$store.getters.getActivities;
    }
  },
  methods: {
    getActivitiesList() {
      this.$store.dispatch({type: 'loadActivities'})
      .then((activities)=> {
          // console.log('activities##', activities)
      })
    },
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.activity {
  width: 100%;
}
.preview-activity {
  height: 125px;
  border-bottom: none;
}

</style>

