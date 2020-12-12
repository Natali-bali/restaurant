<template>
    <a :href="href" @click.prevent="scroll">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props: ['href'],
        data() {
            return {
                el: '',
            }
        },
        methods: {
            scroll() {
                const el = document.querySelector(this.href);
                const y = el.getBoundingClientRect().top + window.pageYOffset - 55;
                window.scrollTo({top: y, behavior: 'smooth'});
                document.querySelector('.active').classList.remove('active');
                document.querySelector(`a[href="${this.href}"]`).classList.add('active');

            },
        }
    }
</script>