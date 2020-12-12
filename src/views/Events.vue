<template>
    <section-view id = "events" post-title = "private events" post-footer = "For private events please call: +40 729 131 637/+40 726 458 782 or use the contact form.">
        <div>
            <app-section-image
            :image = "image1"
            positionSq = "left"
            ></app-section-image>
            <div class="weddings">
            <div class = "weddings_text">weddings</div>
        </div>
        </div>
        <div>
            <app-section-image
            :image = "image2"
            positionSq = "right"
            ></app-section-image>
            <div class="corporate">
            <div class = "corporate_text">corporate parties</div>
        </div>
        </div>
    </section-view>
</template>
<script>
import appSectionImage from '../components/SectionImage.vue';
export default {
    components: {
            appSectionImage,
        },
        data() {
            return {
                image1: 'events-img1.jpg',
                image2: 'events-img2.jpg',
            }
        }
}
</script>
<style scoped>
    #events {
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/img/backgrounds/team-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .footer {
        color: rgba(255, 255, 255, 0.5);
    }
    .weddings, .corporate {
        display: block;
        background-color: black;
        color: #ffffff;
        font-family: Banny;
        font-size: 24px;
        line-height: 80px;
        /* or 50% */
        width: 80px;
        height: 476px;
        position: absolute;

    }
    .weddings {
        left: 498px;
        top: 101px;
        border: 0 5px 5px 0;
        /* z-index: 100; */
    }
    .corporate {
        right: 498px;
        top: 101px;
        border: 5px 0 5px 0;
    }
    .weddings_text {
        text-transform: uppercase;
        transform: rotate(90deg);
        position: absolute;
        top: 40px;
        left: -20px;

    }
    .corporate_text {
        text-transform: uppercase;
        width: 400px;
        transform: rotate(-90deg);
        position: absolute;
        bottom: 175px;
        left: -158px;
    }
</style>