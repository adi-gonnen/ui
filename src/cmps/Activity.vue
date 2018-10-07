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
      <ul v-for="activity in activities.slice(0,4)" :key="activity._id">
        <activity-preview :activity="activity" class="preview-activity ptr"/>
      </ul>
    </div>
  </div>
</template>

<script>
import ActivityPreview from '@/cmps/ActivityPreview.vue'
import UserService from "../services/UserService.js";

export default {
  name: 'activity',
  components: {
    ActivityPreview
  },
  data() {
    return {
      activities: []
    }
  },
  created() {
    this.setActivities()
  },
  methods: {
    setActivities() {
      this.activities = UserService.getActivities();
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.preview-activity {
  height: 125px;
  border-bottom: none;
}

</style>

