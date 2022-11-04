<template>
    <div id="q-epilaser">
        <div class="background">
            <div class="container py-5 mt-5">
                <div class="row align-items-center mb-3">

                    <div class="col-lg-8 relative">
                        <p class="mb-1 d-none d-lg-block">Compatibile con:</p>
                        <div>
                            <a href="#vantaggi-fiscali" class="bg-gold color-white hover-gold font-w-500 px-3 py-2 rounded-full d-inline-block">Bonus industria 4.0</a>
                        </div>
                        <p class="mt-1 d-none d-lg-block">Fino all’ <span style="color: red;">85%</span> di detrazioni!</p>

                        <h2 class="size-3 mb-1">Q Epilaser 2.0</h2>
                        <h3 class="color-red mb-2 mb-lg-5">Per una pelle a prova di carezza</h3>
                        
                        <div class="row mb-2">
                            <div class="col-lg-3" style="position: static;">
                                <div class="mobile-wrp">
                                    <img src="~/assets/img/prodotti/epilaser-gun.png" alt="Epilaser" class="prod-img">
                                    <img src="~/assets/img/prodotti/epilaser-base.png" alt="Epilaser" class="base-img" style="max-width: 100%;">
                                </div>
                            </div>
                            <div class="col-lg-9">

                                <a @click="show('Q Epilaser')" href="javascript:void(0)" class="red-btn w-100 text-center mt-3 d-lg-none">Contattaci</a>

                                <p class="size-1-2 font-w-500 mt-4 mt-lg-0">SCOPRI LE TECNOLOGIE</p>
                                <div class="tab-nav mb-3">
                                    <div :class="active === 0 ? 'active' : ''" v-on:click="switchTab(0)">Laser 808 nm</div>
                                    <div :class="active === 1 ? 'active' : ''" v-on:click="switchTab(1)">Ice Cooler</div>
                                </div>
                                <div class="tabs">
                                    <div :class="'tab' + (active === 0 ? ' active' : '')">
                                        <p class="mb-0">Il diodo laser emette un fascio di luce concentrato, che mira unicamente alla melanina nel follicolo del pelo, senza danneggiare i tessuti circostanti. 
                                        Anzi, grazie all’abbinamento dei principi di fotobiomodulazione, fototermolisi selettiva e all’uso esperto di cosmetici dedicati, la pelle è nutrita, 
                                        luminosa e più elastica. Efficace sui diversi fototipi, Q Epilaser 2.0. permette di liberarsi progressivamente dei peli superflui in tutta sicurezza.</p>
                                    </div>
                                    <div :class="'tab' + (active === 1 ? ' active' : '')">
                                        <p class="mb-0">Il manipolo di Q Epilaser 2.0. è provvisto di un sistema di raffreddamento specifico, ideale per evitare scottature, arrossamenti e irritazioni.<br>
                                        Così, il trattamento di epilazione diventa un’esperienza piacevole e indolore, ideale anche per pelli sensibili e, più in generale, per contribuire 
                                        alla soluzione di problematiche importanti come irsutismo e ipertricosi.</p>
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
                                <p class="m-0 font-w-500">Un piacevole massaggio sulla pelle</p>
                            </div>
                            <div class="d-flex size-1-15 mb-3">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Risultati reali e progressivamente definitivi</p>
                            </div>
                            <div class="d-flex size-1-15 mb-3">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Facilità d'uso per l'operatore</p>
                            </div>
                        </div>
                        <a href="https://www.q-italy.it/service/q-epilaser-2-0/" target="_blank" class="red-btn px-5 mt-4 w-100 text-center">Più info</a>
                    </div>

                </div>

                <ContactFormPocket class="d-none d-lg-block" id="contact-form-qepilaser" :macchinario="'Q Epilaser'"/>
                    
            </div>
        </div>
    </div>
</template>

<script>
    import ContactFormPocket from '../../components/ContactFormPocket.vue'
    import { mapMutations } from 'vuex'

    export default {
        name: 'QEpilaser',
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
            transform: translateX(20%);
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