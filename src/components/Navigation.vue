<template>
    <nav id = "navbar">
        <div class="nav__wrapper">
        <scroll-link href = "#home" class = "nav-link active">Home</scroll-link>
        <scroll-link href = "#about" class = "nav-link">About</scroll-link>
        <scroll-link href = "#team" class = "nav-link">Team</scroll-link>
        <scroll-link href = "#booking" class = "nav-link">Booking</scroll-link>
        <scroll-link href = "#home" class = "nav-logo">
            <img src = "../assets/icons/logo.svg">
        </scroll-link>
        <scroll-link href = "#menu" class = "nav-link">Menu</scroll-link>
        <scroll-link href = "#events" class = "nav-link">Events</scroll-link>
        <scroll-link href = "#galerie" class = "nav-link">Galerie</scroll-link>
        <scroll-link href = "#contact" class = "nav-link">Contact</scroll-link>
        </div>
    </nav>
</template>
<script>
import ScrollLink from './ScrollLink.vue';
export default {
  components: { ScrollLink },
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
        height: 55px;
        background-color:rgba(0, 0, 0, 0.8);
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
        transition: all 0.2s ease-out;
    }
    .nav-link:hover{
        font-size: 12.5px;
        color: rgb(255, 255, 255, 0.8);
    }
    .active:hover{
        color: #E8C300;
        font-size: 12px;
    }
    .active {
        color: #E8C300;
    }
    .fixed .nav-link {
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: none;
        height: 55px;
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
        transform: translateY(50px);
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
</style>