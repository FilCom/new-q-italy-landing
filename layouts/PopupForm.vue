<template>
    <div id="popup-form" v-if="$store.state.popup.isVisible">
        <div class="popup">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 background">
                    </div>
                    <div class="col-lg-7">
                        <div class="py-3">
                            <i class="fa-solid fa-xmark size-1-7 close" @click="hide()"></i>

                            <h3 class="pb-3 mobile-size-1-1">Compila il Form per ricevere informazioni specifiche sui bonus 4.0 per questo macchinario</h3>

                            <b-form @submit="onSubmit" id="contact-form-the-popup-form">

                                <div class="row mb-3">
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
                                                v-model="form.phone"
                                                type="text"
                                                placeholder="Telefono"
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
                                    <div class="col-lg-12">
                                        <b-form-textarea
                                            id="textarea"
                                            v-model="form.message"
                                            placeholder="Messaggio (Facoltativo)"
                                            rows="3"
                                            max-rows="6"
                                            style="height: 92px;"
                                        ></b-form-textarea>
                                    </div>
                                </div>

                                <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }" class="text-center mt-2 privacy-color">
                                    <b-form-checkbox-group v-model="form.privacy" id="checkboxes-4" :aria-describedby="ariaDescribedby" name="privacy" required>
                                        <b-form-checkbox value="Privacy" required><a href="https://www.q-italy.it/privacy/" target="_blank">Privacy</a></b-form-checkbox>
                                    </b-form-checkbox-group>
                                </b-form-group>

                                <b-button type="submit" variant="primary">Contattaci</b-button>

                            </b-form>

                            <p class="mt-2" v-if="result" v-html="result"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'PopupForm',
        data() {
            return {
                visible: false,
                result: null,
                form: {
                    fullName: null,
                    phone: null,
                    email: null,
                    city: null,
                    message: null,
                    privacy: [],
                }
            }
        },
        methods: {
            ...mapMutations({
                hide: 'popup/hide'
            }),
            onSubmit(event) {
                event.preventDefault();

                let body = `<b>Macchinario</b>: ${this.$store.state.popup.macchinario ? this.$store.state.popup.macchinario : ''}<br>
                    <b>Nome completo</b>: ${this.form.fullName}<br>
                    <b>Email</b>: ${this.form.email}<br>
                    <b>Telefono</b>: ${this.form.phone}<br>
                    <b>Città</b>: ${this.form.city}<br>
                    <b>Messaggio</b>: ${this.form.message}`;

                console.log(body);

                // send email
                this.$axios.post('/mail/send.php', {
                    body: body,
                    dJTDb6H7FM6P6u9qzzKt: '26fCSWfAQxCvJZZyKedZ'
                })
                .then(response => {
                    console.log(response.data);
                    if (response.data) {
                        this.result = 'Grazie per averci contattato!';
                    }
                })
                .catch(error => {
                    console.log(error.response.data);
                    this.result = 'C\'è stato un problema durante l\'invio della mail, riprova più tardi o contattaci a <a href="mailto:info@qitaly.it">info@qitaly.it</a>';
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
            p {
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
        .custom-control.custom-checkbox {
            text-align: left;
        }
        .custom-control-label::before {
            border-radius: 0 !important;
            border-color: #878787;
        }
        .custom-control-input:checked ~ .custom-control-label::before {
            background-color: #DE3333;
        }
        input, textarea {
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

        .background {
            background-image: url('~/assets/img/dottoressa.jpg');
        }
    }
</style>