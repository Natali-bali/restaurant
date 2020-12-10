<template>
    <div class="section__wrapper">
        <div class="image">
            <div class="square" :style = "pos"></div>
            <img :src = "myImage(image)" alt = "image">
        </div>
    </div>
</template>
<script>

export default {
    props: [
        'image',
        'positionSq'
    ],
    data() {
        return {
            pos: 'right: -105px;'
        }
    },
    methods: {
        myImage(image) {
            if (this.positionSq == 'left') {
                this.pos = 'left: -105px;';
            }

            return require('../assets/img/section-img/'+image)
        }
    }
}
</script>
<style scoped>
    .section__wrapper {
        width: 620px;
    }
    .image {
        width: 475px;
        height: 475px;
        position: relative;
        margin-left: 20px;
        border-radius: 5px;
    }
    img {border-radius: 5px;}
    .square {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 210px;
        height: 210px;
        border: 20px solid #E8C300;
        border-radius: 5px;
        box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5), inset 0px 0px 100px rgba(0, 0, 0, 0.5);
    }
</style>