<template>
    <div class="address">
        <div> <span style = "color: #E8C300"> <i class="fas fa-map-marker-alt"></i> </span>  5th London Boulevard, U.K. </div>
        <div> <span style = "color: #E8C300"> <i class="fas fa-phone"> </i> </span>  +40 729 131 637/+40 726 458 782</div>
        <div> <span style = "color: #E8C300"> <i class="fas fa-envelope"></i> </span>  office@mindblister.com</div>
    </div>
</template>
<style scoped>
    .address {
        display: flex;
        flex: 0 0 50%;
        max-width: 640px;
        height: 60px;
        justify-content: space-between;
        padding-right: 20px;
    }
    .address div {
        font-weight: bold;
        font-size: 12px;
        line-height: 60px;
        color: rgba(51, 51, 51, 0.5);
        text-align: left;
        /* padding-right: 10px; */
    }
    .address div i {
        margin-right: 10px;
    }
    .fa-envelope {
        margin-right: 0;
    }
</style>