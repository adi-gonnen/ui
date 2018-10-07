<template>
    <div :class="message.new? 'activity-container flex gray': 'activity-container flex'">
        <div class="img-activity flex">
            <div class="img-container">
                <img :src=message.img>
            </div>
        </div>
        <div class="activity-body flex column">
            <div class="message-title flex">
                <p class="from">{{message.from}}</p>
                <p class="time">{{message.time}}</p>
            </div>
            <p class="title">{{message.title}}</p>
            <div class="message-tools flex">
                <font-awesome-icon icon="reply" class="reply"/>
                <font-awesome-icon icon="cog" class="cog"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "message-preview",
    props: ["message"],
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.img-activity {
    width: 45px;
    height: 45px;
    text-align: center;
    margin: 5px;
}
.message-body {
    p {
        color: #0e1a35;
        font-size: 14px;
        line-height: 21.07px;
    }
    p:first-child {
        font-family: "Roboto Medium";
        letter-spacing: 0.2px;
        margin-right: 10px;
    }
}
.gray {
    background-color: #d5dae654
}
.from {
    color: #0e1a35;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    line-height: 21.07px;
    margin-right: 5px;
}
.time {
    color: #8492af;
    font-family: "Roboto - Regular";
    font-weight: 400;
    letter-spacing: 0.2px;
}
.title {
    font-size: 14px;
}
.reply, .cog {
    margin-right: 10px;
    color: #8492af;
}
</style>