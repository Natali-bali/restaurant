<template>
    <section>
        <div class="wrapper">
            <div class="section">
                <div class= "center">
                    <app-section-text
                    :heading = "heading"
                    :strongText = "strongText"
                    :weakText = "weakText"
                    :width = "width"
                    ></app-section-text>
                    <menu-items></menu-items>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import appSectionText from '../components/SectionText.vue';
    import menuItems from '../components/MenuItems'
    export default {
        components: {
            appSectionText,
            menuItems
        },
        data() {
            return {
                heading: 'DELICIOUS MENU',
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
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 980px;
    }
    .center {
        margin-left: auto;
        margin-right: auto;
        width: 100%;

    }
</style>
