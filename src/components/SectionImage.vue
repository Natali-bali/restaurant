<template>
    <img :src = "myImage(image)" :style = "pos" alt = "image">
    <div class="square"></div>
</template>
<script>

export default {
    props: [
        'image',
        'positionSq'
    ],
    data() {
        return {
            pos: 'right: 8%;'
        }
    },
    methods: {
        myImage(image) {
            if (this.positionSq == 'left') {
                this.pos = 'left: 8%;';
            }

            return require('../assets/img/section-img/'+image)
        }
    }
}
</script>
<style scoped>
    img {border-radius: 5px;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
    .square {
        position: relative;
        width: 210px;
        height: 210px;
        border: 20px solid #E8C300;
        border-radius: 5px;
        box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5), inset 0px 0px 100px rgba(0, 0, 0, 0.5);
    }
</style>