<template>
  <div class="tasks lower-box">
    <div class="activity-header flex"> 
      <p class="activity-title bold">tasks</p>
      <div class="notification flex">
        <div class="notific-count">
          <p>{{tasks.length}}</p>
        </div>
        <div class="notific-count">
          <p>{{delayed}}</p>
        </div>
      </div>
    </div> 
    <ul v-for="task in tasks.slice(0,4)" :key="task._id" class="preview-container">
        <task-preview :task="task" class="preview"/>
    </ul>
  </div>
</template>

<script>
import TaskPreview from '@/cmps/TaskPreview.vue'
import UserService from "../services/UserService.js";

export default {
  name: 'tasks',
  components: {
    TaskPreview
  },
  data() {
    return {
      tasks: [],
      delayed: null,
    }
  },
  created() {
    this.setTasks();
    this.countDelay();
    // console.log('tasks: ', this.tasks);
    // console.log('delay: ', this.delayed);
  },
  methods: {
    setTasks() {
      // UserService.getTasks().then (tasks => this.tasks=tasks)
      // console.log(UserService.getTasks());      
      this.tasks = UserService.getTasks()
    },
    countDelay() {
      var count = 0;
      this.tasks.forEach( (task)=> {
        if (task.delay) count++;
      })
      this.delayed = count;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";
.notification {
  div:last-child {
    background: #ff0000;
    border: 1px solid #ff0000;
  }
}


</style>

