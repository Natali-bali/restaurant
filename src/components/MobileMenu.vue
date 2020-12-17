<template>
    <div id="menu-icon" @click = "changeStatus">
                <div class = "menu-icon__lines"
                    :class="isActive ? 'menu-icon__cross' : 'menu-icon__lines'"
                    ></div>

                </div>
</template>
<script>
export default {
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        changeStatus() {
            this.isActive = !this.isActive;
            this.$emit('mobile-active', this.isActive)
        }
    }
}
</script>
<style scoped>
#menu-icon {
    height: 30px;
    width: 30px;
    position: absolute;
    cursor: pointer;
    right:15px;
    top: 15px;
    z-index: 120;
}
@media(min-width: 1080px) {
    #menu-icon,  .mobile-menu {
        display: none;
    }
}
.menu-icon__lines {
    width: 30px;
    height: 4px;
    background-color: #ffff;
    position: absolute;
    top: 12.5px;
    transition: all 0.2s linear;
}
.menu-icon__lines::before {
    content: '';
    width: 30px;
    height: 4px;
    background-color: #ffff;
    position: absolute;
    top: -12.5px;
    transition: transform 0.2s linear, top 0.2s linear 0.2s;
}
.menu-icon__lines::after {
    content: '';
    width: 30px;
    height: 4px;
    background-color: #ffff;
    position: absolute;
    top: 12.5px;
    transition: transform 0.2s linear, top 0.2s linear 0.2s;
}

.menu-icon__cross.menu-icon__lines {
    background-color: transparent;
    transition: all 0.2s linear;
}
.menu-icon__cross.menu-icon__lines::after {
    transform: rotate(45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s linear 0.2s;
}
.menu-icon__cross.menu-icon__lines::before {
    transform: rotate(-45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s linear 0.2s;
}
</style>
