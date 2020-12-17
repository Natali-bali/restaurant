<template>
    <section-view id = "booking" post-footer = "Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM, Phone: +40 729 131 637/+40 726 458 782">
                <div>
                    <app-section-form></app-section-form>
                </div>
                <div>
                    <app-section-image
                    :image = "image"
                    ></app-section-image>
                </div>
    </section-view>
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
                image: 'book-img.jpg',
            }
        }
    }
</script>
