<template>
    <div class="activity-box flex">
        <div class="img-activity flex">
            <div class="img-container">
                <img :src="activity.img">
                <div :class="idx!==3? 'h-line' : ''"></div>
            </div>
        </div>
        <div class="activity-body flex column">
            <div class="message-title flex">
                <p class="bold">{{activity.from}}</p>
                <p class="title mlr5">{{activity.title}}</p>
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
    font-size: 13px;
}
.message-tools {
    align-items: center;
    margin-top: 5px;
    p {
        font-size: 13px;
    }
}
.h-line {
    border-left: 1px solid rgba(132, 146, 175, 0.3);
    height: 80px;
    z-index: 2;
    margin-left: 20px;
}
.activity-box {
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
    position: relative;
}

.activity-body {
    margin-left: 47px;
}

.img-activity {
    position: absolute;
    top: 46px;
}

.img-container {
    margin-right: 10px;
}

.left-section {
    align-content: center;
}


@media (max-width: 900px){
    .message-title {
        flex-direction: column;
    }
    .title {
        margin: 0;
    }
}

@media (max-width: 760px){
    .message-title {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .title {
        margin: 0 5px;
    }
    .img-activity {
        top: 10px;
    }
}
</style>
