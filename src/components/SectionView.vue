<template>
    <section :id = "id" >
        <div class="wrapper">
            <div class="section">
                <h3 v-if= "visibleHeader">{{postTitle}}</h3>
                <slot></slot>
                <div class = "footer" v-if = "visibleFooter">{{postFooter}}</div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            visibleHeader: false,
            visibleFooter: false
        }
    },
    props: ['id', 'postTitle', 'postFooter'],
    created() {
        if (this.postTitle) {
            this.visibleHeader = true;
        }
        if (this.postFooter) {
            this.visibleFooter = true;
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
        height: calc(100vh - 55px);
        min-height: 575px;
        /* flex-wrap: wrap; */
    }

    h3 {
        width: 100%;
        height: 100px;
        text-align: center;
        font-weight: 700;
        font-size: 12px;
        line-height: 100px;
        letter-spacing: 0.5em;
        text-transform: uppercase;
        color: #FFFFFF;
        position: absolute;
        top: 0;
        left:0;
    }
    .footer {
        width: 100%;
        height: 100px;
        text-align: center;
        font-size: 12px;
        line-height: 100px;
        color: rgba(51, 51, 51, 0.5);
        position: absolute;
        bottom: 0;
        left:0;
    }
</style>


