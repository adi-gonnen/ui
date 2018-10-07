<template>
    <section class="header-container flex">
        <navbar class="navbar"/>
        <!-- <div class="header-title flex"> -->
        <div class="nav-title flex">
            <font-awesome-icon icon="dot-circle" class="icon"/>
            <p>merkury</p>
        </div>
        <div class="header-left flex">
            <div class="nav-hamburger flex" @click="openNavbar">
                <font-awesome-icon icon="caret-left" class="fa left"/>
                <font-awesome-icon icon="bars" class="fa bars"/>
            </div>
            <font-awesome-icon icon="search" class="fa search"/>
        </div>
        <div class="header-right flex">
            <button class="ptr add-btn">+ Add project</button>
            <font-awesome-icon icon="envelope" class="fa envelope" />
            <div class="bell-container flex">
                <font-awesome-icon icon="bell" class="fa bell" />
                <p class="bell-count">3</p>
            </div>
            <div class="header-img flex">
                <img src="img/john.png"/>
                <font-awesome-icon icon="caret-down" class="fa down"/>   
            </div>
        </div>
        <!-- </div> -->
    </section>
</template>

<script>
import Navbar from "@/cmps/Navbar.vue";

export default {
  name: "header",
  components: {
    Navbar
  },
  methods: {
      openNavbar() {
          document.querySelector('.navbar').classList.toggle('open');
        //   document.querySelector('.nav-hamburger').classList.toggle('move-btn');
        //   document.querySelector('.search').classList.toggle('move-srch');
      }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.header-container {
  border-bottom: 1px solid $border-color;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.add-btn {
  border-radius: 30px;
  color: white;
  background-color: $main-color;
  height: 48px;
  width: 178px;
  font-size: 1.25em;
  margin-right: 30px;
}

.header-right {
    align-items: center;
    img {
        border-radius: 50%;
        width: 45px;
        height: 45px;
        margin-right: 5px;
    }
}
.left {
    color: #5584ff;
    margin-right: 5px;
}
.nav-hamburger {
    margin-right: 15px;
    align-items: center;
}
.header-title {
    justify-content: space-between;
}
.header-left {
    transition: all 0.3s ease;
    margin-left: 310px;
}
.header-img {
    align-items: center;
    margin-right: 10px;
}
.fa {
    font-size: 1.5em;
    cursor: pointer; 
}
.envelope, .bell {
    margin-right: 30px;
}
.navbar {
    display: none;
}
.open {
    display: block;
}

.bell-container {
    position: relative
}
.bell-count {
    position: absolute;
    top: -9px;
    right: 20px;
    border: 1px solid white;
    border-radius: 50%;
    background-color: #5584ff;
    width: 20px;
    height: 20px;
    color: white;
    line-height: 19px;
    font-size: 0.8em;
    text-align: center;
    z-index: 2;
}
.nav-title {
    align-items: center;
    // margin: 30px;
    font-size: 34px;
    position: fixed;
    left: 0;
    top: 0;
    text-transform: capitalize;
    border: 1px solid black;
    background-color: #0e1a35;
    color: white;
    font-size: 34px;
    font-weight: 500;
    line-height: 48px;
    width: 300px;
    height: 107px;
    padding: 0 30px;;
}
.icon {
    color: $main-color;
    margin: auto 15px;
}
</style>

