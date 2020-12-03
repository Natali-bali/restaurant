<template>
    <div class="container">
        <input type="text" id="name2"
        v-model="nameValue">
        <label  for="name" :class = "{active: isActive, default: !isActive}">Name</label>
    </div>
    <div class="container">
        <button class="container" @click = "submit">Submit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nameValue: '',
            isActive: false
        }
    },
    methods: {
        submit() {
            console.log(this.nameValue)
        },
        moveLabel() {
            this.isActive = true;
        }
    },
    watch: {
    nameValue: function (val) {
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
        width: 277px;
        height: 60px;
        margin-bottom: 10px;
    }
    .container input {
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
    }
    input[type=text]:focus {
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
    }
   input[type=text]:focus + label{
        transform: translate(0, -16px) scale(.75);
        color: #E8C300;
    }
    .active {
        transform: translate(0, -16px) scale(.75);
        color: #E8C300;
    }
    .default {
        transform: translate(0, 0) scale(1);
    }
</style>