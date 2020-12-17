<template>
    <div class="section__wrapper">
        <h2>Book a table</h2>
        <div class="form-group">
            <input-text val = "Name" @change="showChange"></input-text>
            <input-text val = "Email" @change="showChange"></input-text>
            <input-tel val = "Phone" @change="showChange"></input-tel>
            <input-people val = "People" @change="showChange"></input-people>
            <input-date val = "Date" @change="showChange"></input-date>
            <input-time val = "Time" @change="showChange"></input-time>

            <button type="submit" id="submit"
            class="submit" @click="submit">book now</button>
        </div>
    </div>
</template>

<script>
import inputText from './InputText.vue';
import inputTel from './InputTel.vue';
import inputDate from './InputDate.vue';
import inputTime from './InputTime.vue';
import inputPeople from './InputSelect.vue';
export default {
    data() {
        return { user: {Name: '',
                        Email: '',
                        Phone: '',
                        People: null,
                        Date: null,
                        Time: null
                        },
//---- keys must be exactly same as val props (capital letter for design issue)
                }
    },

    methods: {
        submit() {
            console.log(this.user.Name, this.user.Email, this.user.Date, this.user.Time)
        },
//-------send value from input component to parent data
        showChange(event) {
            for (let key in this.user) {
                if (key == event.target.id) {
                    this.user[key] = event.target.value;
                }
            }
        }
    },
    components: {
        inputText,
        inputTel,
        inputPeople,
        inputDate,
        inputTime
    }
}

</script>
<style scoped>

    .section__wrapper {
        max-width: 600px;
    }
    .form-group {
        max-width: 575px;
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
    .submit {
        max-width: 565px;
        flex: 0 0 100%;
        height: 60px;
        line-height: 60px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 5px;
        background-color: #E8C300;
        border: none;
        cursor: pointer;
    }
    @media(max-width: 1188px) {
        /* #submit {
            margin-left: 0;
        } */
        .form-group {
            justify-content: center;

        }

    }
    @media(max-width: 768px) {
        .form-group {
            margin-left: 0;
        }
        #submit {
            max-width: 100%;
        }

    }

</style>