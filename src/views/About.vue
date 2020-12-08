<template>
    <div id="about">
        <div class="wrapper">
            <div class="section">
                <div>
                    <app-section-text
                    :heading = "heading"
                    :strongText = "strongText"
                    :weakText = "weakText"
                    :width = "width"
                    ></app-section-text>
                </div>
                <div>
                    <app-section-image
                    :image = "image"
                    ></app-section-image>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import appSectionText from '../components/SectionText.vue';
    import appSectionImage from '../components/SectionImage.vue';
    export default {
        hash: 'about',
        components: {
            appSectionText,
            appSectionImage,
        },
        data() {
            return {
                heading: 'ABOUT US',
                strongText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
                weakText: 'Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.',
                image: './../assets/img/about-img.jpg',
                width: '600px'
            }
        }
    }
</script>
<style scoped>
    .wrapper {
        max-width: 1280px;
        margin: 0 auto 0 auto;
    }
    .section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: calc(100vh - 75px);
        min-height: 575px;
    }
</style>