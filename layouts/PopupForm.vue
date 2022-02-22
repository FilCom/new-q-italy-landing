<template>
    <div id="popup-form" v-if="visible">
        <div class="popup">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 background">
                    </div>
                    <div class="col-lg-7">
                        <div class="py-3">
                            <i class="fa-solid fa-xmark size-1-7 close" v-on:click="visible = false"></i>

                            <h3 class="bb-1 pb-3 mobile-size-1-1">Il nostro staff è a tua disposizione!</h3>

                            <b-form @submit="onSubmit" v-if="show">

                                <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                                    <p class="mb-1 font-w-300">Voglio avere informazioni su:</p>
                                    <b-form-checkbox-group
                                    v-model="form.checked"
                                    id="checkboxes-4"
                                    :aria-describedby="ariaDescribedby"
                                    >
                                        <b-form-checkbox value="Q Epilaser 2.0">Q Epilaser 2.0</b-form-checkbox>
                                        <b-form-checkbox value="Q ReGenesys">Q ReGenesys</b-form-checkbox>
                                        <b-form-checkbox value="Q Lipo Body">Q Lipo Body</b-form-checkbox>
                                    </b-form-checkbox-group>
                                </b-form-group>

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

                                <b-button type="submit" variant="primary">Invia la tua richiesta</b-button>

                                <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }" class="text-center mt-2 privacy-color">
                                    <b-form-checkbox-group
                                    v-model="form.privacy"
                                    id="checkboxes-4"
                                    :aria-describedby="ariaDescribedby"
                                    >
                                        <b-form-checkbox value="Privacy"><a href="https://www.q-italy.it/privacy/" target="_blank">Privacy</a></b-form-checkbox>
                                    </b-form-checkbox-group>
                                </b-form-group>

                            </b-form>

                            <div class="success text-center">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PopupForm',
        data() {
            return {
                visible: false,
                form: {
                    fullName: '',
                    email: '',
                    centerName: '',
                    city: '',
                    checked: [],
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

                console.log(this.form.checked)

                if(this.form.checked.length) {
                    body += '<br><b>Macchinari interessati</b>:'
                    this.form.checked.forEach(el => {
                        body += el
                        body += ', '
                    });
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
                        document.querySelector('#popup-form .success').innerHTML = '<p class="invio-mail">Grazie per averci contattato!</p>'
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
    #popup-form {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #000000c4;
        z-index: 999999;

        .success {
            min-height: 28px;
            p {
                margin: 0;
            }
        }

        .background {
            background-image: url('~/assets/img/dottoressa.jpg');
            background-size: cover;
            background-position: center;
        }

        .popup {
            position: relative;
            max-width: 900px;
            width: 90%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            .bb-1 {
                border-bottom: 1px solid #cbcbcb;
            }
            .close {
                position: absolute;
                top: 8px; 
                right: 8px;
                cursor: pointer;
            }
        }
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
            width: 100%;
            font-size: 18px;
            background-color: #DE3333;
            color: #fff;
            padding: 10px;
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

        .background {
            background-image: url('~/assets/img/dottoressa.jpg');
        }
    }
</style>