<template>
    <div class="section__wrapper">
        <div class="image">
            <img src = "../assets/img/about-img.jpg" alt = "image">
        </div>
    </div>
</template>
<script>

export default {
    props: [
        'image',
    ],
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
    .image::before {
        content: '';
        position: absolute;
        right: -125px;
        top: 50%;
        transform: translate(0, -50%);
        width: 210px;
        height: 210px;
        border: 20px solid #E8C300;
        border-radius: 5px;
        box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.5), inset 0px 0px 100px rgba(0, 0, 0, 0.5);
    }
</style>