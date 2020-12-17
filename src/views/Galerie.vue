<template>
    <section id = "galerie">
        <div class="galerie">
            <div v-for = "index in 4" :key="index"
                @click="showImg(index)"
                class = "image"
                :style = "'background-image: url(' + imgs[index-1] + ');'">
            </div>
        </div>
        <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
        >
        <template v-slot:toolbar = "{ toolbarMethods }">
            <button  style="display:none" @click="toolbarMethods.zoomIn">zoom in</button>
        </template>
        </vue-easy-lightbox>
    </section>
</template>

<script>
    import VueEasyLightbox from 'vue-easy-lightbox'
    export default {
        data() {
            return {
                imgs: [require('../assets/img/galerie/'+'img1.jpg'), require('../assets/img/galerie/'+'img2.jpg'), require('../assets/img/galerie/'+'img3.jpg'), require('../assets/img/galerie/'+'img4.jpg'), require('../assets/img/galerie/'+'img5.jpg'), require('../assets/img/galerie/'+'img6.jpg'), require('../assets/img/galerie/'+'img7.jpg')],
                visible: false,
                index: 0
            }
        },
        methods: {
            showImg(i) {
                this.index = i;
                this.visible = true;
            },
            handleHide() {
                this.visible = false;
            }
        },
        components: {
            VueEasyLightbox
        }
    }
</script>
<style scoped>
    .galerie {
        width: 100%;
        margin: 0 auto 0 auto;
        display: flex;
    }
    .image {
        width: 25%;
        cursor: pointer;
        transition: all 0.2s ease-out;
        background-size: contain;
        background-repeat: no-repeat;
        height: 0;
        padding-top: 37.1%;
        transition: transform 0.2s ease-out;
    }
    .image:hover {
        transform: scale(0.95);
    }
    @media(max-width: 950px) {
       .galerie {
           flex-wrap: wrap;
        }
        .image {
            width: 50%;
            padding-top: 50%;
        }
    }
</style>