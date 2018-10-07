<template>
  <div class="messages lower-box">
    <div class="activity-header flex"> 
      <p class="activity-title bold">messages</p>
      <div class="notification flex">
        <div class="notific-count">
          <p>{{news}}</p>
        </div>
      </div>
    </div>
    <ul v-for="message in messages.slice(0,4)" :key="message._id" class="preview-container">
      <message-preview :message="message" class="preview"/>
    </ul>
  </div>
</template>

<script>
import MessagePreview from '@/cmps/MessagePreview.vue'
import UserService from "../services/UserService.js";

export default {
  name: 'messages',
  components: {
    MessagePreview
  },
  data() {
    return {
      messages: [],
      news: null
    }
  },
  created() {
    this.setMessages();
    this.setNews();
  },
  methods: {
    setMessages() {
      this.messages = UserService.getMessages();
    },
    setNews() {
      var count = 0;
      this.messages.forEach( (message) => {
        if (message.new) count++
      })
      this.news = count;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";


</style>

