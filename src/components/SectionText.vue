<template>
    <div class="section__wrapper" v-bind:style = "{maxWidth: width}">
        <h2>{{heading}}</h2>
        <p><strong>{{strongText}}</strong></p>
        <p>{{weakText}}</p>
    </div>
</template>
<script>

export default {
    props: [
        'heading',
        'strongText',
        'weakText',
        'width'
    ],
}
</script>
<style scoped>
    .section__wrapper {
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
    }
    h2 {
        font-family: Banny, sans-serif;
        font-weight: 500;
        font-size: 36px;
        line-height: 1.33;
        text-align: center;
        text-transform: uppercase;
        color: #000000;
        color: inherit;
        height: 56px;
        margin-bottom: 20px;
        position: relative;
    }
    h2::before {
        content: '';
        position: absolute;
        bottom: -7px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 5.11px;
        background-color: #E8C300;
        border-radius: 50px;
    }
    p strong{
        color: #000000;
        color: inherit;
        font-weight: 700;
        font-size: 18px;
        line-height: 1.56;
        text-align: center;
    }
    p {
        color: #000000;
        color: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
    }
    p:last-child{
        margin-top: 20px;
    }
    @media(max-width: 414px) {
        h2 {
            font-size: 28px;
            height: auto;
        }
    }
</style>