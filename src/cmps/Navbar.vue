<template>
    <div class="nav-container flex column">
        
        <div class="nav-body flex-column">
            <div class="nav-link flex">
                 <!-- <router-link to="/" class="flex"> -->
                    <font-awesome-icon icon="home" class="icon"/>
                    <p>home</p>
                 <!-- </router-link> -->
            </div>
             <div class="nav-link flex">
                <font-awesome-icon icon="equals" class="icon"/>
                <p>workflow</p>
            </div>
             <div class="nav-link flex">
                <font-awesome-icon icon="signature" class="icon"/>
                <p>statistics</p>
            </div>
             <div class="nav-link flex">
                <font-awesome-icon icon="calendar-alt" class="icon"/>
                <p>calendar</p>
            </div>
             <div class="nav-link flex">
                <font-awesome-icon icon="user" class="icon"/>
                <p>users</p>
            </div>
             <div class="nav-link flex">
                <font-awesome-icon icon="cog" class="icon"/>
                <p>settings</p>
            </div>
        </div>
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
.nav-link {
    cursor: pointer;
    align-items: center;
    height: 100px;
    margin-left: 50px;
    a {
        &.router-link-exact-active {
        background-color: #122143;
        color: white;
        text-decoration: none;
        }
    }
    &:first-child {         //router-active didn't work well, I put this instead
        background-color: #122143;
        margin-left: 0;
        padding-left: 50px;
    }
}

</style>
