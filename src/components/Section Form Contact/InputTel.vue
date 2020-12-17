<template>
    <div class="container">
        <input type="tel"
        v-model="value" v-bind:style = "{maxWidth: width}" >
        <label  :for="val" :class = "{activelabel: isActive, defaultlabel: !isActive}">{{val}}</label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            isActive: false
        }
    },
    props: [
        'val',
        'width'
    ],
    watch: {
        value: function (val) {
            if (val!=='') {
                this.isActive = true;
            }
            else {this.isActive = false}
        }
    }
}
</script>

<style scoped>
    .container {
        position: relative;
        flex: 0 0 33%;
        max-width: 640px;
        height: 60px;
        margin-bottom: 10px;
    }
    .container input[type=tel] {
        border: none;
        outline: 0;
        width: 100%;
        height: 100%;
        background: #E5E5E5;
        border-radius: 5px;
        color: rgba(51, 51, 51, 0.7);
        font-size: 14px;
        line-height: 60px;
        text-indent: 20px;
        z-index: 11;
    }
    input[type=tel]:focus {
        border: 2px solid #E8C300;
    }
    .container label {
        position: absolute;
        left: 0;
        font-size: 14px;
        line-height: 60px;
        text-indent: 20px;
        color: rgba(51, 51, 51, 0.5);
        transition: transform 0.15s ease-in;
        z-index: 10;
        cursor: text;
    }
   input[type=tel]:focus + label{
        transform: translate(0, -16px) scale(.75);
        color: #E8C300;
    }
    .activelabel {
        transform: translate(0, -16px) scale(.75);
        color: #E8C300;
    }
    .defaultlabel {
        transform: translate(0, 0) scale(1);
    }
    @media(max-width:414px) {
        .container {
            flex: 0 0 100%;
        }
    }
</style>