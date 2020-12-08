<template>
    <nav id = "navbar">
        <div class="nav__wrapper">
        <router-link to = "/" class = "nav-link">Home</router-link>
        <router-link :to = "{name: 'About', hash: '#about'}" class = "nav-link">About</router-link>
        <router-link to = "Team" class = "nav-link">Team</router-link>
        <router-link to = "Booking" class = "nav-link">Booking</router-link>
        <router-link to = "/" class = "nav-logo">
            <img src = "../assets/icons/logo.svg">
        </router-link>
        <router-link to = "Menu" class = "nav-link">Menu</router-link>
        <router-link to = "Galerie" class = "nav-link">Galerie</router-link>
        <router-link to = "Events" class = "nav-link">Events</router-link>
        <router-link to = "Contact" class = "nav-link">Contact</router-link>
        </div>
    </nav>
</template>
<script>
export default {
    created () {
         document.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            let navbar = document.querySelector('#navbar');
            let windowHeight = window.innerHeight;
            window.scrollY >= windowHeight - 100 ?
            navbar.classList.add('fixed') :
            navbar.classList.remove('fixed');
        }
    }
}

</script>
<style scoped>
    nav {
        width: 100%;
        height: 100px;
        z-index: 20;
        transition: .4s;
    }
    .nav__wrapper {
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .fixed {
        position: fixed;
        height: 50px;
        background-color:rgba(0, 0, 0, 0.7);
        transition: .4s;
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
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .fixed .nav-link {
        height: 50px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: none;
    }
    .fixed .nav-link:last-child {
        border-right: none;
    }
    .nav-logo {
        margin-right: auto;
        margin-left: auto;
        width: 150px;
        height: 150px;
        cursor: pointer;
    }
.fixed .nav-logo{
        margin-right: auto;
        margin-left: auto;
        align-content: center;
        display: flex;
        /* 85 */
    }
    .fixed .nav-logo img{
        width: 50px;
        height: 50px;
        margin-right: auto;
        margin-left: auto;
    }
    .nav-logo img {
        margin-top: 50px;
    }
</style>