<template>
    <div id="the-form">

        <b-form @submit="onSubmit" id="contact-form-pdf-form">
            
            <!-- Nome centro -->
            <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input id="input-1" v-model="form.centerName" type="text" placeholder="Nome del centro estetico" required></b-form-input>
            </b-form-group>

            <!-- Telefono -->
            <b-form-group id="input-group-3" label-for="input-3">
                <b-form-input id="input-3" v-model="form.phone" type="tel" placeholder="Telefono" required></b-form-input>
            </b-form-group>

            <!-- Email -->
            <b-form-group id="input-group-2" label-for="email">
                <b-form-input id="email" v-model="form.email" type="email" placeholder="Email" required></b-form-input>
            </b-form-group>
            
            <!-- Privacy -->
            <b-form-group id="privacy-group" v-slot="{ ariaDescribedby }" class="mt-2 privacy-color">
                <b-form-checkbox-group v-model="form.privacy" id="checkboxes-4" :aria-describedby="ariaDescribedby" name="privacy" required>
                    <b-form-checkbox value="Privacy" required>
                        <a href="https://www.q-italy.it/privacy/" target="_blank">Privacy</a>
                    </b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Scarica l'informativa</b-button>
        </b-form>

        <p class="mt-2" v-if="result" v-html="result"></p>

    </div>
</template>

<script>
    export default {
        name: 'TheForm',
        data() {
            return {
                result: null,
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
                .then(response => {
                    console.log(response.data);

                    if (response.data) {
                        this.result = 'Grazie per averci contattato!';
                        window.open('/vantaggi-fiscali-2022/bonus-fiscali-2022.pdf', '_blank').focus();
                    }
                })
                .catch(error => {
                    console.log(error.response.data);
                    this.result = 'C\'è stato un problema durante l\'invio della mail, riprova più tardi o contattaci a <a href="mailto:info@qitaly.it">info@qitaly.it</a>'
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
            border-radius: 99rem !important;
            padding-right: 14px !important;
            padding-left: 14px !important;
            background-color: #D9A348;
            color: #fff;
            padding: 10px;
            outline: none;
            box-shadow: none;
            border: none;
            font-weight: 600;
            &:hover {
                background-color: #dab169;
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