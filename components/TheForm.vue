<template>
    <div id="the-form">

        <b-form @submit="onSubmit">
            
            <!-- Nome centro -->
            <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input id="input-1" v-model="form.centerName" type="text" placeholder="Nome del centro estetico" required></b-form-input>
            </b-form-group>

            <!-- Email -->
            <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input id="input-2" v-model="form.email" type="email" placeholder="Email" required></b-form-input>
            </b-form-group>

            <!-- Telefono -->
            <b-form-group id="input-group-3" label-for="input-3">
                <b-form-input id="input-3" v-model="form.phone" type="tel" placeholder="Telefono" required></b-form-input>
            </b-form-group>
            
            <!-- Privacy -->
            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }" class="mt-2">
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
                    centerName: '',
                    email: '',
                    phone: '',
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

                let body = `Un utente ha scaricato il pdf.<br><b>Email</b>: ${this.form.email}<br><b>Nome centro</b>: ${this.form.centerName}<br><b>Telefono</b>: ${this.form.phone}`

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
        input[type="email"],
        input[type="text"],
        input[type="tel"] {
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