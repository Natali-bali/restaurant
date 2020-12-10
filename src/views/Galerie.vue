<template>
    <section id = "galerie">
        <div class="galerie">
            <div v-for = "(img, index) in imgs" :key="index"
                @click="showImg(index)"
                class = "image">
                <img :src="img" :alt = "img">
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
        overflow: hidden;
    }
    .image {
        width: 360px;
        height: 360px;
        cursor: pointer;
        transition: all 0.2s ease-out;
    }
    .image:hover {
        transform: scale(1.1);
    }
    .image img {
        width: 360px;
        height: 360px;
    }
</style>