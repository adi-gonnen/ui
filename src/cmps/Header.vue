<template>
    <section class="header-container flex">
        <navbar class="navbar"/>
        <div class="nav-title flex">
            <font-awesome-icon icon="dot-circle" class="icon icon-title"/>
            <p>merkury</p>
        </div>
        <div class="header-left flex">
            <div class="nav-hamburger flex" @click="toggleNavbar">
                <font-awesome-icon icon="caret-left" class="fa left"/>
                <font-awesome-icon icon="bars" class="fa bars"/>
            </div>
            <font-awesome-icon icon="search" class="fa search"/>
        </div>
        <div class="header-right flex">
            <button class="ptr add-btn">+ Add project</button>
            <div class="header-icons flex">
                <font-awesome-icon icon="envelope" class="fa envelope" />
                <div class="bell-container flex">
                    <font-awesome-icon icon="bell" class="fa bell" />
                    <p class="bell-count">3</p>
                </div>
                <div class="header-img flex">
                    <img v-if="user" :src="user.img"/>
                    <font-awesome-icon icon="caret-down" class="fa down"/>   
                </div>
                </div>
        </div>
    </section>
</template>

<script>
import Navbar from "@/cmps/Navbar.vue";

export default {
    name: "header",
    components: {
        Navbar
    },
    created() {
        this.loadUser();
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        }
    },
    methods: {
        toggleNavbar() {
            document.querySelector('.navbar').classList.toggle('close');
            document.querySelector('.navbar').classList.toggle('open-mobile');
        },
        loadUser() {
            this.$store.dispatch({type: 'loadUser'})
                .then((user)=> {
                    // console.log('user##', user)
                })
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
    background-color: white;
}

.add-btn {
  border-radius: 30px;
  color: white;
  background-color: $main-color;
  height: 48px;
  width: 178px;
  font-size: 1.25em;
  margin-right: 30px;
  &:hover {
      opacity: 0.7;
  }
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
.header-icons {
    align-items: center;
}
.left {
    color: #5584ff;
    margin-right: 5px;
}
.nav-hamburger {
    margin-right: 15px;
    align-items: center;
}

.header-left {
    margin-left: 200px;
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
    font-size: 22px;
    position: absolute;
    left: 0;
    top: 0;
    text-transform: capitalize;
    border: 1px solid #0e1a35;
    background-color: #0e1a35;
    color: white;
    font-weight: 500;
    line-height: 48px;
    width: 180px;
    height: 107px;
    padding: 0 10px;
}
.icon {
    color: $main-color;
    margin: auto 15px;
}

@media (max-width: 540px) {
    .header-right {
        flex-direction: column-reverse;
    }
    .header-left {
        margin-left: 170px;
        flex-direction: column;
    }
    .add-btn {
        height: 38px;
        width: 178px;
        font-size: 1em;
        margin-right: 30px;
    }
    .header-container {
        background-color: #0e1a35;
        color: white;
        position: absolute;
        top: 0;
        right: 0;
        height: 107px;
        padding: 0 10px;
    }
    .nav-title {
        height: 50px;
        z-index: 5;
        padding: 9px;
        left: -7px;
    }
    .icon-title {
        margin: 15px 5px;;
    }
    .header-left {
        margin-left: 10px;
        margin-top: 50px;
        flex-direction: row;
    }
    .envelope, .bell {
        margin-right: 10px;
    }
    .header-right {
        img {
            width: 40px;
            height: 40px;
        }
    }
    .bell-count {
        right: 0;
    }
    .navbar {
        display: none;
    }
    .open-mobile {
        display: block;
    }
}
</style>

