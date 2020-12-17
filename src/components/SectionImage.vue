<template>
    <img :src = "myImage(image)" :style = "marg" alt = "image">
    <div class="square" :style = "pos"></div>
</template>
<script>

export default {
    props: [
        'image',
        'positionSq'
    ],
    data() {
        return {
            pos: 'right: 0;',
            marg: 'margin-right: 105px'
        }
    },
    methods: {
        myImage(image) {
            if (this.positionSq == 'left') {
                this.pos = 'left: 0;';
                this.marg = 'margin-left: 105px'
            }

            return require('../assets/img/section-img/'+image)
        }
    }
}
</script>
<style scoped>

    img {border-radius: 5px;
        position: relative;
        margin: 0 20px;

    }
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
    @media(max-width: 1080px) {
        .square {
            display: none;
        }
        img {
            margin: 20px auto 20px auto!important;
        }
    }
    @media(max-width: 455px) {
        img {
            width: 100%;
        }
    }
</style>