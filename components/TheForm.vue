<template>
    <div id="the-form">

        <b-form @submit="onSubmit">

            <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Email" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" v-slot="{ ariaDescribedby }" class="mt-2">
                <b-form-checkbox-group v-model="form.privacy" id="checkboxes-2" :aria-describedby="ariaDescribedby">
                    <b-form-checkbox value="Privacy"><a href="https://www.q-italy.it/privacy/" target="_blank">Privacy</a></b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>

             <b-button type="submit" variant="primary">Scarica l'informativa</b-button>
        </b-form>

    </div>
</template>

<script>
    export default {
        name: 'TheForm',
        data() {
            return {
                form: {
                    email: '',
                    privacy: []
                }
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()

                if(!this.form.privacy.length) {
                    return
                }

                let body = `Un utente ha scaricato il pdf. Email: ${this.form.email}`

                // send email
                this.$axios.post('/mail/send.php', {
                    body: body,
                    dJTDb6H7FM6P6u9qzzKt: '26fCSWfAQxCvJZZyKedZ',
                    subject: 'pdf'
                })
                .then(function (response) {
                    console.log(response.data);

                    if (response.data) {
                        window.open('https://q-italy.it/vantaggi-fiscali-2022/bonus-fiscali-2022.pdf', '_blank')
                    }
                })
                .catch(function (error) {
                    console.log(error.response.data);
                });
            }
        }
    }
</script>

<style lang="scss">
    #the-form {
        input, button {
            border-radius: 0 !important;
        }
        #input-group-2 a {
            color: #b7b7b7;
        }
        input[type="email"] {
            outline: none !important;
            border: none !important;
            box-shadow: none !important;
            padding: 10px 16px;
            width: 300px;
        }
        [type="submit"] {
            background-color: #CE8203;
            color: #fff;
            padding: 10px;
            outline: none;
            box-shadow: none;
            border: none;
            font-weight: 600;
            &:hover {
                background-color: #b37000;
            }
        }

        .custom-control-input:checked ~ .custom-control-label::before {
            border-color: #DE3333 !important;
            background-color: #DE3333 !important;
        }   
        .custom-checkbox .custom-control-label::before {
            border-radius: 0 !important;
        }
    }
</style>