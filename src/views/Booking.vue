<template>
    <div id = "booking">
        <div class="wrapper">
            <div class="section">
                <div>
                    <app-section-form>
                    </app-section-form>
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
    import appSectionForm from '../components/Section Form/SectionForm.vue';
    import appSectionImage from '../components/SectionImage.vue';
    export default {
        components: {
            appSectionForm,
            appSectionImage,
        },
        data() {
            return {
                image: './../assets/img/book-img.jpg',
            }
        }
    }
</script>
<style scoped>
    #team {
        width: 100%;
        height: calc(100vh - 75px);
        min-height: 675px;
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
        height: calc(100vh - 75px);
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