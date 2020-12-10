<template>
    <section-view id = "team" post-title="our team">
        <div>
            <app-section-image
            :image = "image"
            ></app-section-image>
        </div>
        <div>
            <app-section-text class = "white-text"
            :heading = "heading"
            :strongText = "strongText"
            :weakText = "weakText"
            :width = "width"
            :positionSq = "positionSq"
            ></app-section-text>
        </div>
    </section-view>
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
                heading: 'MASTER CHEF',
                strongText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
                weakText: 'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.',
                image: 'team-img.jpg',
                width: '600px',
                positionSq: 'left'
            }
        }
    }
</script>
<style scoped>
    #team {
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/img/backgrounds/team-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .white-text{
        color: #fff;
    }
</style>