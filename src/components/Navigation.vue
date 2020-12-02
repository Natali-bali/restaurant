<template>
    <nav>
        <router-link to = "Home" id = "home" class = "nav-link">Home</router-link>
        <router-link to = "About" id = "about" class = "nav-link">About</router-link>
        <router-link to = "Team" id = "team" class = "nav-link">Team</router-link>
        <router-link to = "Booking" id = "booking" class = "nav-link">Booking</router-link>
        <router-link to = "Home" id = "home" class = "nav-logo">
            <img src = "../assets/icons/logo.svg">
        </router-link>
        <router-link to = "Menu" id = "menu" class = "nav-link">Menu</router-link>
        <router-link to = "Galerie" id = "galerie" class = "nav-link">Galerie</router-link>
        <router-link to = "Events" id = "events" class = "nav-link">Events</router-link>
        <router-link to = "Contact" id = "contact" class = "nav-link">Contact</router-link>
    </nav>
</template>
<script>
export default {
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
//   destroyed () {
//     window.removeEventListener('scroll', this.handleScroll);
//   },
    methods: {
        handleScroll (event) {
        console.log(event);
    }
  }
}
</script>
<style scoped>
    nav {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    .nav-link {
        display: inline-flex;
        text-decoration: none;
        width: 133px;
        height: 100px;
        font-weight: bold;
        font-size: 12px;
        line-height: 1.5;
        color: #FFFFFF;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);;
    }
    .nav-logo {
        margin-right: 35px;
        margin-left: 35px;
        width: 150px;
        height: 150px;
        cursor: pointer;
    }
    .nav-logo img {
        margin-top: 50px;
    }
</style>