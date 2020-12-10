<template>
    <section id = "menu">
        <div class="wrapper">
            <div class="section">
                <h3>Specialties</h3>
                    <transition :name = "transitionName">
                        <div class="section_flex" :key="current">
                                <app-section-image
                                :image = "dishes[current].image"
                                ></app-section-image>
                                <app-section-text class = "white-text"
                                :heading = "dishes[current].heading"
                                :strongText = "dishes[current].strongText"
                                :weakText = "dishes[current].weakText"
                                :width = "dishes[current].width"
                                ></app-section-text>
                        </div>
                    </transition>
                    <div class = "dots__wrapper">
                        <div v-for = "(dish, i) in dishes" :key = "i"
                            class = "dot"
                            @click = "changeSlide(i)"
                            :class = "current==i ? 'active-dot' : 'notactive-dot'"></div>
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
    import appSectionText from '../components/SectionText.vue';
    import appSectionImage from '../components/SectionImage.vue';
    export default {
        components: {
            appSectionText,
            appSectionImage,
        },
        data() {
            return {
                dishes: [
                    {heading: 'Chocolate pancakes',
                    strongText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
                    weakText: 'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.',
                    image: 'menu-img1.jpg',
                    width: '600px'},
                    {heading: 'Eggs Benedict',
                    strongText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
                    weakText: 'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.',
                    image: 'menu-img2.jpg',
                    width: '600px'},
                    {heading: 'Avocado Salad',
                    strongText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
                    weakText: 'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.',
                    image: 'menu-img3.jpg',
                    width: '600px'}
                ],
                transitionName: 'slide-next',
                show: true,
                current: 0,
                noSlides: 0,
                breakInterval: true,
            }
        },
        methods: {
           changeSlide(i) {
               this.breakInterval = false;
               if (this.current<i){
                   this.transitionName = 'slide-next';
                   this.current = i;
               }
               else {
                   this.transitionName = 'slide-prev';
                   this.current = i;
               }
            },
            changeSlideTimeout() {
                const int = setInterval(()=> {
                    if (this.current < this.dishes.length-1 && this.breakInterval) {
                        this.current = this.current+1;
                    }
                    else if (this.current == this.dishes.length-1 && this.breakInterval) {
                        this.current = 0;
                    }
                    else {
                        clearInterval(int)}
                }, 5000)
            },
        },
        mounted: function mounted (){
            this.changeSlideTimeout()
        }
    }
</script>
<style scoped>
    #menu {
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/img/backgrounds/menu-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .wrapper {
        max-width: 1280px;
        margin: 0 auto 0 auto;
    }
    .section {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: calc(100vh - 75px);
        min-height: 575px;
    }
    .section_flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    h3 {
        width: 100%;
        height: 100px;
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        line-height: 100px;
        letter-spacing: 0.5em;
        text-transform: uppercase;
        color: #FFFFFF;
        position: absolute;
        top: 0;
        left:0;
    }
    .white-text{
        color: #fff;
    }
    .dots__wrapper {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left:0;
    }
    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 20px;
        cursor: pointer;
    }
    .active-dot {
        background-color: rgba(255, 255, 255, 1);
    }
    .notactive-dot {
        background-color:rgba(255, 255, 255, 0.5);
    }
    .dot:last-child {
        margin-right: 0;
    }
    /* GO TO NEXT SLIDE */

    .slide-next-enter-from {
        transform: translateX(-150%);
    }
    .slide-next-enter-to {
        transform: translateX(0);
    }
    .slide-next-leave-from {
        transform: translateX(0);
    }
    .slide-next-leave-to {
        transform: translateX(150%);
    }
    .slide-next-enter-active,
    .slide-next-leave-active,
    .slide-prev-enter-active,
    .slide-prev-leave-active {
    transition: transform .7s ease-in-out;
    }

    /* GO TO PREVIOUS SLIDE*/
    .slide-prev-enter-from {
        transform: translateX(150%);
    }
    .slide-prev-enter-to {
        transform: translateX(0);
    }
    .slide-prev-leave-from {
        transform: translateX(0);
    }
    .slide-prev-leave-to {
        transform: translateX(-150%);
    }
</style>
