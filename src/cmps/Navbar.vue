<template>
    <div class="nav-container flex column ptr">
        <router-link to="/" class="nav-router-link flex">
            <font-awesome-icon icon="home" class="icon"/>
            <p>home</p>
        </router-link>
        <router-link to="/workflow" class="nav-router-link flex">
            <font-awesome-icon icon="equals" class="icon"/>
            <p>workflow</p>
        </router-link>
        <router-link to="/statistics" class="nav-router-link flex">
            <font-awesome-icon icon="signature" class="icon"/>
            <p>statistics</p>
        </router-link>
        <router-link to="/calendar" class="nav-router-link flex">
            <font-awesome-icon icon="calendar-alt" class="icon"/>
            <p>calendar</p>
        </router-link>
        <router-link to="/users" class="nav-router-link flex">
            <font-awesome-icon icon="user" class="icon"/>
            <p>users</p>
        </router-link>
        <router-link to="/settings" class="nav-router-link flex">
            <font-awesome-icon icon="cog" class="icon"/>
            <p>settings</p>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.nav-container {
    position: fixed;
    left: 0;
    top: 100px;
    text-transform: capitalize;
    border: 1px solid black;
    background-color: #0e1a35;
    color: white;
    font-size: 24px;
    font-weight: 500;
    line-height: 48px;
    width: 300px;
    height: 100%;
    transition: all 0.3s ease;
}
.icon {
    color: $main-color;
    margin-right: 15px;
}
.nav-router-link {
    color: white;
    align-items: center;
    height: 100px;
    padding-left: 50px;
    text-decoration: none;

    &.router-link-exact-active {
        background-color: #122143;
        margin-left: 0;
        padding-left: 40px;
        border-left: 10px solid $main-color;
        list-style-type: none;
    }
}

</style>
