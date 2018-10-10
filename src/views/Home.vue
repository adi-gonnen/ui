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
import Header from "@/cmps/Header.vue";
import Activity from "@/cmps/Activity.vue";
import Report from "@/cmps/Report.vue";
import Sales from "@/cmps/Sales.vue";
import Tasks from "@/cmps/Tasks.vue";
import Messages from "@/cmps/Messages.vue";

export default {
  name: "home",
  components: {
    Header,
    Activity,
    Report,
    Sales,
    Tasks,
    Messages
  },
  created() {
    this.setUser();
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    setUser() {
      this.$store.dispatch({ type: "loadUser" })
      .then(user => {
        // console.log('user##', user)
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.hello {
  text-align: left;
  margin: 120px 20px 25px 20px;
}
.upper-section,
.lower-section {
  width: 100%;
  margin-left: 20px;
}

.upper-boxs {
  margin-right: 20px;
  &:first-child {
    width: 40%;
  }
  &:last-child {
    width: 60%;
  }
}

@media (max-width: 760px) { 
  .lower-section, .upper-section {
    flex-direction: column;
    width: 100%;
    margin-left: 20px;
  }
  .upper-boxs {
    &:first-child {
    width: 100%;
    margin-bottom: 20px;
    }
    &:last-child {
    width: 100%;
    }
  }
}

@media (max-width: 760px) { 
  .upper-section,
  .lower-section {
    width: 100%;
    margin-left: 0;
  }
}
</style>

