<template>
    <section id = "menu">
        <div class="wrapper">
            <div class="section">
                <h3>Specialties</h3>
                    <div v-for="(dish, index) in dishes" :key = "index">
                        <transition appear>
                            <div class="section_flex"
                                v-if = "activeSlide(index)">
                                <div>
                                    <app-section-image
                                    :image = "dish.image"
                                    ></app-section-image>
                                </div>
                                <div>
                                    <app-section-text class = "white-text"
                                    :heading = "dish.heading"
                                    :strongText = "dish.strongText"
                                    :weakText = "dish.weakText"
                                    :width = "dish.width"
                                    ></app-section-text>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div class = "dots__wrapper">
                        <div v-for = "(dish, i) in dishes" :key = "i"
                            class = "dot"
                            @click = "changeSlide(i)"
                            :class = "indexSlide==i ? 'active-dot' : 'notactive-dot'"></div>
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
                noSlides: null,
                indexSlide: 0,
            }
        },
        methods: {
           activeSlide(index) {
               return index==this.indexSlide;
           },
           changeSlide(i) {
               this.indexSlide = i;
           }
        },
        mounted() {
            this.noSlides = this.dishes.length;
            // loopSlide = function() {
            //     for (let n; n<=this.noSlides; n++) {
            //         setTimeout(function(){
            //             this.indexSlide=this.indexSlide+1;
            //         }, 3000);
            // }
            // }
            // loopSlide();

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
.v-enter{
    transform: translateX(-200%);
}
.v-enter-active {
    transition: transform 1s ease-in;
}
/* .v-enter-to{
    transform: translateX(0);
} */
/* .v-leave{
    transform: translateX(0);
} */
.v-leave-active{
    transition: transform 1s ease-in;
}
.v-leave-to{
    transform: translateX(100%);
}

</style>