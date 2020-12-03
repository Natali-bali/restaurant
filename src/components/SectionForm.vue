<template>
    <div class="section__wrapper">
        <h2>Book a table</h2>
        <div class="form-group">
            <input-text val = "Name"></input-text>
            <input-text val = "Email"></input-text>
            <input-tel val = "Phone"></input-tel>







            <div class="container">
               <label for="date">Date (dd/mm)</label>
                <input type="text" id="date"
                v-model="user.date"
                class="form-control">
            </div>

            <div class="container">
                <label for="time">Time</label>
                <input type="textx" id="time"
                v-model="user.time"
                class="form-control">
            </div>

            <button type="submit" id="submit"
            class="submit" @submit.prevent="submit">Submit</button>
        </div>
    </div>
</template>

<script>
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import inputText from './InputText.vue';
import inputTel from './InputTel.vue';

export default {
    data() {
        return { user: {name: 'Name',
                        email: 'Email',
                        phone: 'Phone',
                        people: null,
                        date: null,
                        time: null
                        },

                }
            },
    mounted() {
        flatpickr('#date', {minDate: "today"});
        flatpickr('#time', { enableTime: true,
                            noCalendar: true,
                            dateFormat: "H:i",
                            minTime: "16:00",
                            maxTime: "21:30",
        });
    },
    methods: {
        submit() {
            console.log(this.user.date, this.user.time)
        },
    },
    components: {
        inputText,
        inputTel
    }

}

</script>
<style scoped>

    .section__wrapper {
        max-width: 600px;
        /* display: flex;
        flex-wrap: wrap; */
    }
    .form-group {
        max-width: 565px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
        margin-left: 15px;
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
    label {
        position: absolute;
        font-size: 14px;
        line-height: 60px;
        text-indent: 20px;
        color: rgba(51, 51, 51, 0.5);
        cursor: pointer;
    }

</style>