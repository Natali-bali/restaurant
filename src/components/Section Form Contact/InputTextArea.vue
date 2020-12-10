<template>
    <div class="container">
        <textarea class = "textarea" type="input"
        v-model="value">
        </textarea>
        <label  for="textarea" :class = "{activelabel: isActive, defaultlabel: !isActive}">{{val}}</label>
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
        max-width: 1280px;
        height: 120px;
        position: relative;
        margin-bottom: 10px;
        flex: 0 0 100%;
        max-width: 1280px;
    }
    .textarea {
        /* width: 100%; */
        height: 100%;
        width: 100%;
        border-radius: 5px;
        border: none;
        background-color: #E5E5E5;
        outline: 0;
        color: rgba(51, 51, 51, 0.7);
        font-size: 14px;
        line-height: 60px;
        text-indent: 20px;
        z-index: 11;
    }

    .textarea:focus {
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
   .textarea:focus + label{
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
</style>