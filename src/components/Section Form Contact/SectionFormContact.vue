<template>
    <div class="section__wrapper">
        <div class="form-group">
            <input-text val = "Name" :width = "width" @change="showChange"></input-text>
            <input-text val = "Email" :width = "width" @change="showChange"></input-text>
            <input-tel val = "Phone" :width = "width" @change="showChange"></input-tel>
            <input-text val = "Message" :width = "textWidth" @change="showChange"></input-text>
            <div-contacts></div-contacts>
            <button type="submit" id="submit" class="submit" @click="submit">book now</button>
        </div>
    </div>
</template>

<script>
import inputText from './InputText.vue';
import inputTel from './InputTel.vue';
import divContacts from './ContactString.vue'
export default {
    data() {
        return { contact: {Name: '',
                          Email: '',
                          Phone: '',
                          Message: ''
                          },
                  width: '420px',
                  textWidth: '1280px'
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
        divContacts
    }
}

</script>
<style scoped>

    .section__wrapper {
        width: 100%;
    }
    .form-group {
        max-width: 1280px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: center;
    }
    .submit {
        width: 640px;
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

</style>