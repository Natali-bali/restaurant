<template>
    <header id= "home">
        <navigation-app></navigation-app>
        <div class="wrapper">
            <div class="header-content__wrap">
                <div class="opening">
                    <div class="opening__text">
                        Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM
                    </div>
                </div>
                <div class="social">
                    <div class="social__item">
                        <a href = "https://www.facebook.com/">
                            <img src = "../assets/icons/social/facebook.svg">
                        </a>
                    </div>
                    <div class="social__item">
                        <a href = "https://twitter.com/">
                            <img src = "../assets/icons/social/twitter.svg">
                        </a>
                    </div>
                    <div class="social__item">
                        <a href = "https://www.instagram.com/">
                            <img src = "../assets/icons/social/instagram.svg">
                        </a>
                    </div>
                </div>
                <div class="header-content">
                    <div class="header-content__inner">
                        <div class="header-content__naming">
                            <h6>RESTAURANT</h6>
                            <h1 id = "about1">hungry people</h1>
                        </div>
                        <div class="header-content__buttons">
                            <scroll-link href = "#booking" class = "btn-book" >BOOK TABLE</scroll-link>
                            <scroll-link href = "#menu" class = "btn-explore">EXPLORE</scroll-link>
                        </div>
                    </div>
                </div>
                <scroll-link href = "#about" class = "scroll">
                    <img src = "../assets/icons/scroll.svg">
                </scroll-link>
            </div>
        </div>
    </header>
</template>

<script>
    import navigationApp from '../components/Navigation';
    import scrollLink from '../components/ScrollLink'
    export default {
        components: {
            navigationApp,
            scrollLink
        }
    }
</script>
<style>
header {
    width: 100%;
    height: 100vh;
    min-height: 550px;
    background-image: url('../assets/img/backgrounds/header-bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #FFFFFF;
    text-transform: uppercase;
}
.wrapper {
    margin: 0 auto 0 auto;
    max-width: 1280px;
}
.header-content__wrap {
    height: calc(100vh - 100px);
    min-height: 450px;
    position: relative;
}
@media(max-width: 1080px) {
    .header-content {
        height: 100%;
    }
}

.opening {
    position: absolute;
    /* background-color: rgba(235, 135, 36, 0.192); */
    height: calc(100vh - 100px);
    width: 60px;
    left: 0;
    bottom: 0;
    text-align: center;
}
.opening__text {
    font-weight: bold;
    font-size: 12px;
    line-height: 1;
    width: calc(100vh - 100px);
    height: 100%;
    text-transform: none;
    transform: rotate(-90deg);
}
.social {
    width: 60px;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
}

.social__item {
    width: 60px;
    height: 60px;
    text-align: center;
    position: relative;
    margin-bottom: 40px;
}
.social__item a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.social__item:last-child {
    margin-bottom: 0;
}
.social__item::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    transform: translate(-50%, -50%);
}

.header-content {
    width: 850px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    height: calc(100vh - 100px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.header-content__inner {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.header-content__naming {
    max-width: 850px;
    height: 100%;
    margin: 0 auto 36px auto;
}
.header-content__naming h6 {
    font-weight: bold;
    font-size: 12px;
    line-height: 1.17px;
    letter-spacing: 0.5em;
    text-align: center;
}
.header-content__naming h1 {
    font-family: Banny, Arial, sans-serif;
    font-weight: normal;
    font-size: 96px;
    text-align: center;
}
.header-content__buttons {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: 0 auto 0 auto;
    text-align: center;
}
.header-content__buttons::before {
    content: '';
    position: absolute;
    top: -30px;
    width: 60px;
    height: 5.11px;
    background-color: #E8C300;
    border-radius: 50px;
}
.btn-book, .btn-explore {
    display: block;
    width: 200px;
    height: 60px;
    padding: 20px;
    font-weight: bold;
    font-size: 12px;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;
}
.btn-book {
    background-color: #E8C300;
    margin-right: 40px;
}
.btn-explore {
    border: 1px solid rgba(255, 255, 255, 0.5);
}
.scroll {
    display: block;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 53px;
    left: 50%;
    transform: translate(-50%, 0);
    transition: all 0.15s linear;
}
.scroll:hover {
    background-color: rgb(156, 156, 156);
}
.scroll::before {
    content: "";
    display: block;
    width: 60px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.15s linear;
}
.scroll:hover::before {
    width: 80px;
    height: 80px;
    border: 1px solid #fff;

}
.scroll img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
@media(max-width: 1024px) {
    .opening {
        height: 100px;
        width: 100%;
        left: 0;
        top: 100px;
    }
    .opening__text {
        width: auto;
        transform: rotate(0deg);
    }
    .social {
        width: 100%;
        height: 100px;
        flex-direction: row;
        bottom: 100px;
        right: 0;
    }
    .social__item {
        margin-right: 40px;
        margin-bottom: 0;
    }
    .social__item:last-child {
        margin-right: 0;
    }
    .header-content__naming h1 {
        font-size: 74px;
    }
    .header-content {
        width: 100%;
    }
    .scroll {
        bottom: 0;
    }
}
@media(max-width: 414px) {
    .header-content__naming h1 {
        font-size: 54px;
    }
    .header-content__buttons{
        padding: 0 15px;
    }
    .social {
        padding-top: 20px;
    }
}
@media(max-width: 375px) {
    .header-content__naming h1 {
        font-size: 36px;
    }
    .btn-book, .btn-explore {
        height: 40px;
        line-height: 0;
    }
    .social {
        padding-top: 60px;
    }
}

</style>