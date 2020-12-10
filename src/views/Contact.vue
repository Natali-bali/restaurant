<template>
    <section-view id = "contact" post-title="" post-footer = "">
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

</style>