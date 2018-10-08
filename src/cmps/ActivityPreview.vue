<template>
    <div class="activity-container flex">
        <div class="img-activity flex">
            <div class="img-container">
                <img :src="activity.img">
                <div :class="idx!==3? 'h-line' : ''"></div>
            </div>
        </div>
        <div class="activity-body flex column">
            <div class="message-title flex">
                <p class="bold mlr5">{{activity.from}}</p>
                <p class="mlr5">{{activity.title}}</p>
                <p class="bold">{{activity.desc}}</p>
            </div>
            <div class="message-tools flex">
                <font-awesome-icon icon="clock" class="clock"/>
                <p class="mlr5">{{activity.time}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "activity-preview",
    props: ["activity", "idx"],
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.message-title {
    font-size: 14px;
}
.h-line {
    border-left: 1px solid rgba(132, 146, 175, 0.3);
    height: 70px;
    z-index: -1;
    margin-left: 25px;
}
</style>
