<template>
    <div class="activity-container sb flex">
        <div class="flex">
            <div class="notification flex">
                <div class="img-container"> 
                    <p>{{letter}}</p>
                </div>
            </div>
            <div class="activity-body flex column">
                <p>{{task.title}}</p>
                <div :class="task.delay? 'red flex': 'gray flex'">
                    <font-awesome-icon icon="clock" class="clock"/>
                    <p>{{task.time}}</p>
                </div>
            </div>
        </div>
        <font-awesome-icon icon="ellipsis-v" class="dots"/>
    </div>
</template>

<script>
export default {
    name: "task-preview",
    props: ["task"],
    data() {
        return {
            letter: this.task.title.charAt(0)
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.activity-body {
    p:first-child {
        color: #0e1a35;
        font-size: 20px;
        font-weight: 500;
        line-height: 21.07px;
        letter-spacing: 0.28px;
    }
    p:last-child {
        font-size: 14px;
        line-height: 16.86px;
    }
}

.red {
    color: #f83c7b;
}
.gray {
    color: #8492af;
}
.dots {
    font-size: 2em;
    color: #8492af;
}

</style>