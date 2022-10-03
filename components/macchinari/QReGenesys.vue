<template>
    <div id="q-regenesys">
        <div class="background">
            <div class="container py-5 mt-5">
                <div class="row align-items-center mb-3">

                    <div class="col-lg-8 relative">
                        <p class="mb-1 d-none d-lg-block">Compatibile con:</p>
                        <div>
                            <a href="#vantaggi-fiscali" class="bg-gold color-white hover-gold font-w-500 px-3 py-2 rounded-full d-inline-block">Bonus industria 4.0</a>
                        </div>
                        <p class="mt-1 d-none d-lg-block">Fino all’ <span style="color: red;">85%</span> di detrazioni!</p>

                        <h2 class="size-3 mb-1">Q ReGenesys</h2>
                        <h3 class="color-red mb-2 mb-lg-5">Rifiorire davvero, cellula dopo cellula</h3>
                        
                        <div class="row mb-2">
                            <div class="col-lg-3" style="position: static;">
                                <div class="mobile-wrp">
                                    <img src="~/assets/img/prodotti/epilaser-gun2.png" alt="Regenesys" class="prod-img">
                                    <img src="~/assets/img/prodotti/epilaser-base.png" alt="Regenesys" class="base-img" style="max-width: 100%;">
                                </div>
                            </div>
                            <div class="col-lg-9">

                                <a @click="show('Q ReGenesys')" href="javascript:void(0)" class="red-btn w-100 text-center mt-3 d-lg-none">Contattaci</a>

                                <p class="size-1-2 font-w-500 mt-4 mt-lg-0">SCOPRI LE TECNOLOGIE</p>
                                <div class="tab-nav mb-3">
                                    <div :class="active === 0 ? 'active' : ''" v-on:click="switchTab(0)">Endomassaggio</div>
                                    <div :class="active === 1 ? 'active' : ''" v-on:click="switchTab(1)">Laser</div>
                                    <div :class="active === 2 ? 'active' : ''" v-on:click="switchTab(2)">Biofotomodulazione</div>
                                </div>
                                <div class="tabs">
                                    <div :class="'tab' + (active === 0 ? ' active' : '')">
                                        <p>Evitare la chirurgia estetica, pur ottenendo risultati evidenti, è davvero possibile.
                                            Gli speciali manipoli di Q ReGenesys sono concepiti per arrivare in profondità, riattivare il microcircolo e combattere la ritenzione idrica.
                                            Gli inestetismi, primo fra tutti la cellulite, sono visibilmente ridotti e, seduta dopo seduta, la perdita di centimetri è consistente e misurabile.</p>
                                    </div>
                                    <div :class="'tab' + (active === 1 ? ' active' : '')">
                                        <p>La precisione del laser lipolitico consente di agire su tutte quelle zone che, spesso, è difficile modellare con attività fisica mirata o diete 
                                            dimagranti, come interno delle ginocchia o culotte de cheval. Q ReGenesys ridisegna la silhouette, in armonia con il resto del corpo, regalando 
                                            alle tue clienti la forma fisica perfetta e una pelle luminosa e pura come mai prima.</p>
                                    </div>
                                    <div :class="'tab' + (active === 2 ? ' active' : '')">
                                        <p>Accelerando il metabolismo cellulare in modo non invasivo, il macchinario riesce e a incrementare la produzione delle fibre di collagene ed elastina. 
                                            Così, l’elasticità della pelle è ripristinata e garantita per lungo tempo, ritardando la formazione di rughe e segni del tempo.</p>
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
                                <p class="m-0 font-w-500">Ringiovanimento anche oltre 50 anni</p>
                            </div>
                            <div class="d-flex size-1-15 mb-3">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Rinnovamento cellulare di tutto il corpo</p>
                            </div>
                            <div class="d-flex size-1-15 mb-3">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Manipoli ergonomici, display user friendly</p>
                            </div>
                        </div>
                    </div>

                </div>

                <ContactFormPocket class="d-none d-lg-block" id="contact-form-qregenesys" :macchinario="'Q ReGenesys'"/>
                    
            </div>
        </div>
    </div>
</template>

<script>
    import ContactFormPocket from '../ContactFormPocket.vue'
    import { mapMutations } from 'vuex'

    export default {
        name: 'QReGenesysNew',
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
            transform: translateX(40%);
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