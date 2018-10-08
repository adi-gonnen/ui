<template>
  <div class="home flex column">
    <h1 class="hello">Hello {{user.name}}!</h1>
    <div class="upper-section flex">
      <Sales class="upper-boxs"/>
      <Report class="upper-boxs"/>
    </div>
    <div class="lower-section flex">
      <Tasks class="lower-boxs"/>
      <Messages class="lower-boxs"/>
      <Activity class="lower-boxs"/>
    </div>
  </div>
</template>

<script>
import Header from '@/cmps/Header.vue'
import Activity from '@/cmps/Activity.vue'
import Report from '@/cmps/Report.vue'
import Sales from '@/cmps/Sales.vue'
import Tasks from '@/cmps/Tasks.vue'
import Messages from '@/cmps/Messages.vue'
import UserService from "../services/UserService.js";

export default {
  name: 'home',
  components: {
    Header,
    Activity,
    Report,
    Sales,
    Tasks,
    Messages
  },
  data() {
    return {
      user: null
    }
  },
  created() {
    this.setUser();
  },
  methods: {
    setUser() {
      this.user = UserService.getUser()
    },
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.hello {
  text-align: left;
  margin: 25px 40px;
}
.upper-section, .lower-section {
  width: 100%;
  margin-left: 40px;
}

.upper-boxs {
  margin-right: 20px;
}
.upper-boxs:first-child {
  width: 40%;
}
.upper-boxs:last-child {
  width: 60%;
}
</style>

