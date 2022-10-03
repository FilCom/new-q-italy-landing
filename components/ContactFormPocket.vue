<template>
    <div>

        <h3 class="bb-1 pb-1 mobile-size-1-1" style="font-size: 20px;">IL NOSTRO STAFF È A TUA DISPOSIZIONE!</h3>

        <b-form @submit="onSubmit" v-if="show" :id="id">

            <div class="row">
                <div class="col-lg-6 px-2">

                    <div class="row">
                        <div class="col-lg-6 px-2">
                            <b-form-group
                                id="full-name-group"
                                label-for="full-name">
                                <b-form-input
                                    id="full-name"
                                    v-model="form.fullName"
                                    type="text"
                                    placeholder="Nome e cognome"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-lg-6 px-2">
                            <b-form-group
                                id="city-group"
                                label-for="city">
                                <b-form-input
                                    id="city"
                                    v-model="form.city"
                                    type="text"
                                    placeholder="Città"
                                    required></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-lg-6 px-2">
                            <b-form-group
                                id="phone-group"
                                label-for="phone">
                                <b-form-input
                                    id="phone"
                                    v-model="form.phone"
                                    type="text"
                                    placeholder="Telefono"></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-lg-6 px-2">
                            <b-form-group 
                                id="email-group"
                                label-for="email">
                                <b-form-input
                                    id="email"
                                    v-model="form.email"
                                    type="email"
                                    placeholder="Email"
                                    required></b-form-input>
                            </b-form-group>
                        </div>

                        <div class="col-lg-6 px-2">
                            <b-button type="submit" variant="primary">Contattaci</b-button>
                        </div>

                        <div class="col-lg-6 px-2">
                            <b-form-group 
                                id="privacy-group"
                                v-slot="{ ariaDescribedby }"
                                class="mt-2 privacy-color">
                                <b-form-checkbox-group
                                    v-model="form.privacy"
                                    id="checkboxes-4"
                                    :aria-describedby="ariaDescribedby"
                                    name="privacy"
                                    required>
                                    <b-form-checkbox
                                        value="Privacy"
                                        required>
                                        <a href="https://www.q-italy.it/privacy/" target="_blank">Privacy</a>
                                    </b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
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
        </b-form>

        <p class="success mt-2" v-if="result" v-html="result"></p>
    </div>
</template>

<script>
    export default {
        name: 'ContactForm',
        props: [
            'id',
            'macchinario'
        ],
        data() {
            return {
                visible: false,
                form: {
                    fullName: '',
                    email: '',
                    phone: '',
                    city: '',
                    privacy: [],
                    message: ''
                },
                result: null,
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

                let body = `<b>Macchinario</b>: ${this.macchinario}<br><b>Nome completo</b>: ${this.form.fullName}<br><b>Email</b>: ${this.form.email}<br><b>Telefono</b>: ${this.form.phone}<br><b>Città</b>: ${this.form.city}<br><b>Messaggio</b>: ${this.form.message}`

                // send email
                this.$axios.post('/mail/send.php', {
                    body: body,
                    dJTDb6H7FM6P6u9qzzKt: '26fCSWfAQxCvJZZyKedZ'
                })
                .then(response => {
                    console.log(response.data);

                    if (response.data) {
                        this.result = 'Grazie per averci contattato!'
                    }
                })
                .catch(error => {
                    console.log(error.response.data);
                    this.result = 'C\'è stato un problema durante l\'invio della mail, riprova più tardi o contattaci a <a href="mailto:info@qitaly.it">info@qitaly.it</a>'
                });
            }
        },
        created() {
            this.$root.$refs.PopupForm = this;
        }
    }
</script>

<style lang="scss" scoped>
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
        //width: 100%;
        font-size: 18px;
        background-color: #DE3333;
        color: #fff;
        padding: 10px 30px;
        border: none;
        border-radius: 0;
        width: 100%;
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
</style>