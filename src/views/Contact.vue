<template>
    <section-view id = "contact">
        <div>
            <app-section-text
            :heading = "heading"
            :strongText = "strongText"
            :weakText = "weakText"
            :width = "width"
            ></app-section-text>
            <app-section-contact></app-section-contact>
        </div>
    </section-view>
</template>
<script>
    import appSectionText from '../components/SectionText.vue';
    import appSectionContact from '../components/Section Form Contact/SectionFormContact.vue';

    export default {
        components: {
            appSectionText,
            appSectionContact
        },
        data() {
            return {
                heading: 'Contact',
                strongText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.',
                weakText: '',
                width: '565px'
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 75px);
        min-height: 700px;
        flex-wrap: wrap;
    }
</style>