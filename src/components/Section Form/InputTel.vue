<template>
    <div class="container">
        <input type="tel" :id="val"
        v-model="value">
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
        'val'
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
        max-width: 277px;
        flex: 0 0 50%;
        height: 60px;
        margin: 0 10px 10px 0;
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
    @media(max-width: 1188px) {
        .container {
            max-width: 100%;
            flex: 0 0 100%;
            margin-right: 0;
        }
    }
</style>