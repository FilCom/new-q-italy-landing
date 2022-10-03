<template>
    <div id="q-lipo-body">
        <div class="background">
            <div class="container py-5 mt-5">
                <div class="row align-items-center mb-3">

                    <div class="col-lg-8 relative">
                        <p class="mb-1 d-none d-lg-block">Compatibile con:</p>
                        <div>
                            <a href="#vantaggi-fiscali" class="bg-gold color-white hover-gold font-w-500 px-3 py-2 rounded-full d-inline-block">Bonus industria 4.0</a>
                        </div>
                        <p class="mt-1 d-none d-lg-block">Fino all’ <span style="color: red;">85%</span> di detrazioni!</p>

                        <h2 class="size-3 mb-1">Q Lipo Body<br>Contouring Plus</h2>
                        <h3 class="color-red mb-2 mb-lg-5">Realizza il sogno di un corpo perfetto</h3>
                        
                        <div class="row mb-2">
                            <div class="col-lg-3" style="position: static;">
                                <div class="mobile-wrp">
                                    <img src="~/assets/img/prodotti/lipo-gun.jpg" alt="LipoBody" class="prod-img" style="border-radius: 14px;">
                                    <img src="~/assets/img/prodotti/lipo-base.png" alt="LipoBody" class="base-img" style="max-width: 100%;">
                                </div>
                            </div>
                            <div class="col-lg-9">

                                <a @click="show('Q Lipo Body')" href="javascript:void(0)" class="red-btn w-100 text-center mt-3 d-lg-none">Contattaci</a>

                                <p class="size-1-2 font-w-500 mt-4 mt-lg-0">SCOPRI LE TECNOLOGIE</p>
                                <div class="tab-nav mb-3">
                                    <div :class="active === 0 ? 'active' : ''" v-on:click="switchTab(0)">Diodo Laser</div>
                                    <div :class="active === 1 ? 'active' : ''" v-on:click="switchTab(1)">Onde biostimolanti</div>
                                    <div :class="active === 2 ? 'active' : ''" v-on:click="switchTab(2)">Radiofrequenza</div>
                                </div>
                                <div class="tabs">
                                    <div :class="'tab' + (active === 0 ? ' active' : '')">
                                        <p>Un macchinario che permette, finalmente, di rimodellare il corpo eliminando i depositi adiposi in modo facile e veloce. Seduta dopo seduta, il laser e la stimolazione elettrica agiscono sugli accumuli, smaltendoli e favorendone l’eliminazione naturalmente, senza effetti collaterali. 
                                            <br>I trattamenti sono personalizzabili, consentendo così a ogni cliente di seguire un proprio percorso specifico.</p>
                                    </div>
                                    <div :class="'tab' + (active === 1 ? ' active' : '')">
                                        <p>Le onde, che attraversano i muscoli in modo impercettibile, contribuiscono ad aumentare il tono muscolare. L’esito visibile è una pelle decisamente più levigata, tonica, rimpolpata. 
                                        <br>Una trasformazione importante, ottenuta senza l’ausilio del bisturi né di attività fisica, ma con sedute rilassanti e trattamenti che seguono, pur enfatizzandoli, i processi naturali del corpo.</p>
                                    </div>
                                    <div :class="'tab' + (active === 2 ? ' active' : '')">
                                        <p>Creare nuove fibre elastiche e indurre il corpo a continuarne la produzione è l’obiettivo primario della radiofrequenza. In questo modo la pelle si mantiene giovane nel tempo e si rallenta l’insorgenza di inestetismi. La specificità di Q Lipo Body Contouring Plus è, poi, la possibilità di agire sulla cliente senza intervento da parte dell’operatore, che avrà il solo ruolo di applicare i manipoli e programmare il macchinario, e poi potrà dedicarsi anche a più utenti contemporaneamente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-1">

                    </div>

                    <div class="col-lg-3">
                        <p class="size-1-2 font-w-500 mt-3 mt-lg-5">LA DIFFERENZA Q ITALY</p>
                        <div class="dot-grid">
                            <div class="d-flex size-1-15 mb-3">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Azione risolutiva anche nei punti critici</p>
                            </div>
                            <div class="d-flex size-1-15 mb-3">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Software personalizzato</p>
                            </div>
                            <div class="d-flex size-1-15 mb-3">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Macchinario hands free</p>
                            </div>
                        </div>
                    </div>

                </div>

                <ContactFormPocket class="d-none d-lg-block" id="contact-form-qlipobody" :macchinario="'Q Lipo Body'"/>
                    
            </div>
        </div>
    </div>
</template>

<script>
    import ContactFormPocket from '../ContactFormPocket.vue'
    import { mapMutations } from 'vuex'

    export default {
        name: 'QLipoBody',
        components: {
            ContactFormPocket
        },
        data() {
            return {
                active: 0
            }
        },
        methods: {
            ...mapMutations({
                show: 'popup/show'
            }),
            switchTab: function(option) {
                this.active = option
            }
        }
    }
</script>

<style lang="scss" scoped>
    @media screen and (max-width: 1023px) {
        .mobile-wrp {
            position: relative;
        }
        .base-img {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100px;
        }
    }
    .prod-img {
        max-width: 100%;
        @media screen and (min-width: 1024px) {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -10%);
            width: 420px;
            max-width: auto;
        }
    }

    .background {
        @media screen and (min-width: 1024px) {
            background-image: url('~/assets/img/gray-square.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-position-x: calc(50% - 247px);
            background-size: 700px;
        }
    }
    .tab-nav {
        display: flex;
        > * {
            margin-right: 16px;
            cursor: pointer;
            &.active {
                border-bottom: 2px solid #DE3333;
            }
        }
    }
    .tab {
        display: none;
        &.active {
            display: block !important;
        }
    }
    .neg-m {
        margin-left: -100px;
    }
    @media screen and (max-width: 991px) {
        .neg-m {
            margin-left: 0;
        }
        .dot-grid {
            grid-template-columns: 100%;
        }
        .dot-grid > * {
            margin-bottom: 20px;
        }
        .mobile-p-0 {
            padding: 0 !important;
        }
    }
</style>