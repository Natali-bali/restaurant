<template>
    <div id = "team">
        <div class="wrapper">
            <h3>our team</h3>
            <div class="section">
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
                    ></app-section-text>
                </div>
            </div>
        </div>
    </div>
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
                image: './../assets/img/team-img.jpg',
                width: '600px'
            }
        }
    }
</script>
<style scoped>
    #team {
        width: 100%;
        height: calc(100vh - 75px);
        min-height: 575px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/img/team-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .wrapper {
        max-width: 1280px;
        margin: 0 auto 0 auto;
    }
    .section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: calc(100% - 100px);
    }
    .white-text{
        color: #fff;
    }
    h3 {
        width: 100%;
        height: 100px;
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        line-height: 100px;
        align-items: center;
        letter-spacing: 0.5em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
</style>