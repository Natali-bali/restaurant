<template>
    <div class="wrapper">
        <div class="address">5th London Boulevard, U.K. </div>
        <div class="phone"> +40 729 131 637/+40 726 458 782</div>
        <div class="mail"> office@mindblister.com</div>
    </div>
</template>
<style scoped>
    .wrapper {
        display: flex;
        max-width: 640px;
        height: 60px;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .address, .phone, .mail {
        font-weight: bold;
        font-size: 12px;
        line-height: 60px;
        color: rgba(51, 51, 51, 0.5);
    }
</style>