<template>
    <div class="activity-container flex">
        <div class="img-activity flex">
            <div class="img-container">
                <img :src="activity.img">
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
    props: ["activity"],
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.message-title {
    font-size: 14px;
}

</style>
