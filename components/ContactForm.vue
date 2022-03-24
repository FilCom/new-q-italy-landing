<template>
    <div id="contact-form" class="py-5">
        <div class="container py-5">

            <h3 class="bb-1 pb-3 mobile-size-1-1 text-center">Il nostro staff è a tua disposizione!</h3>

            <b-form @submit="onSubmit" v-if="show">

                <div class="row">
                    <div class="col-lg-6">
                        <b-form-group
                            id="input-group-1"
                            label-for="input-1">
                            <b-form-input
                                id="input-1"
                                v-model="form.fullName"
                                type="text"
                                placeholder="Nome e cognome"
                                required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-lg-6">
                        <b-form-group 
                            id="input-group-2"
                            label-for="input-2">
                            <b-form-input
                                id="input-2"
                                v-model="form.email"
                                type="email"
                                placeholder="Email"
                                required></b-form-input>
                        </b-form-group>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <b-form-group
                            id="input-group-1"
                            label-for="input-1">
                            <b-form-input
                                id="input-1"
                                v-model="form.city"
                                type="text"
                                placeholder="Città"
                                required></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-lg-6">
                        <b-form-group id="input-group-2"
                            label-for="input-2">
                            <b-form-input
                                id="input-2"
                                v-model="form.centerName"
                                type="text"
                                placeholder="Nome del centro estetico"
                                required></b-form-input>
                        </b-form-group>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <b-form-group
                            id="input-group-1"
                            label-for="input-1">
                            <b-form-input
                                id="input-1"
                                v-model="form.phone"
                                type="text"
                                placeholder="Telefono"></b-form-input>
                        </b-form-group>
                    </div>
                </div>

                <b-button type="submit" variant="primary">Contattaci</b-button>

                <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }" class="text-center mt-2 privacy-color">
                    <b-form-checkbox-group v-model="form.privacy" id="checkboxes-4" :aria-describedby="ariaDescribedby" name="privacy" required>
                        <b-form-checkbox value="Privacy" required><a href="https://www.q-italy.it/privacy/" target="_blank">Privacy</a></b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>

            </b-form>

            <div class="success text-center"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactForm',
        data() {
            return {
                visible: false,
                form: {
                    fullName: '',
                    email: '',
                    centerName: '',
                    phone: '',
                    city: '',
                    privacy: []
                },
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()

                if(!this.form.privacy.length) {
                    return
                }

                let body = `<b>Nome completo</b>: ${this.form.fullName}<br><b>Email</b>: ${this.form.email}<br><b>Città</b>: ${this.form.city}<br><b>Centro estetico</b>: ${this.form.centerName}`

                if (this.form.phone && this.form.phone !== '') {
                    body += `<br><b>Telefono</b>: ${this.form.phone}`;
                }

                console.log(body)

                // send email
                this.$axios.post('/mail/send.php', {
                    body: body,
                    dJTDb6H7FM6P6u9qzzKt: '26fCSWfAQxCvJZZyKedZ'
                })
                .then(function (response) {
                    console.log(response.data);

                    if (response.data) {
                        document.querySelector('#contact-form .success').innerHTML = '<p class="invio-mail">Grazie per averci contattato!</p>'
                    }
                })
                .catch(function (error) {
                    console.log(error.response.data);
                });
            }
        },
        created() {
            this.$root.$refs.PopupForm = this;
        }
    }
</script>

<style lang="scss">
    #contact-form {
        background-color: #fafafa;
        .custom-control-label::before {
            border-radius: 0 !important;
            border-color: #878787;
        }
        .custom-control-input:checked ~ .custom-control-label::before {
            background-color: #DE3333;
        }
        input {
            border-radius: 0;
            border-color: #878787;
            font-weight: 300;
        }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #c3c3c3;
            opacity: 1; /* Firefox */
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #c3c3c3;
        }
        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #c3c3c3;
        }
        
        button {
            display: block;
            //width: 100%;
            font-size: 18px;
            background-color: #DE3333;
            color: #fff;
            padding: 10px 30px;
            margin: auto;
            border: none;
            border-radius: 0;
            &:hover {
                background-color: #BA1116;
                color: #fff;
                text-decoration: none;
            }
        }

        .privacy-color a {
            color: #c3c3c3;
            font-weight: 300;
        }
    }
</style>