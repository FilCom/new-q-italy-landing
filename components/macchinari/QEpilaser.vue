<template>
    <div id="q-epilaser">
        <div class="background">
            <div class="container py-5 mt-5">
                <div class="row align-items-center">
                    <div class="col-lg-4">
                        <img src="~/assets/img/prodotti/epilaser.png" alt="Q Epilaser 2.0" class="mw-100 mobile-mb-3">
                    </div>
                    <div class="col-lg-8">
                        <div class="row mb-5 neg-m">
                            <div class="col-lg-8 mobile-p-0">
                                <h2 class="size-3 mb-1">Q Epilaser 2.0</h2>
                                <h3 class="color-red">Per una pelle a prova di carezza</h3>
                            </div>
                            <div class="col-lg-4 text-right mobile-text-left mobile-mt-3 mobile-p-0">
                                <div class="d-inline-block text-left">
                                    <div>
                                        <!--
                                        <a href="javascript:void(0)" v-on:click="showPopup()" class="red-btn">Contattaci</a>
                                        -->
                                        <a href="#contact-form" class="red-btn">Contattaci</a>
                                        <a href="tel:+39074225198" class="phone-btn"><i class="fa-solid fa-phone"></i></a>
                                        <a href="mailto:info@qitaly.it" class="phone-btn desktop-d-none"><i class="fa-solid fa-envelope"></i></a>
                                    </div>
                                    <a href="mailto:info@qitaly.it" class="underline mt-2 d-inline-block mobile-d-none">info@qitaly.it</a>
                                    <!--
                                        <i class="fa-solid fa-copy mobile-d-none ml-2 size-1-2 pointer color-grey position-relative" v-on:click="toClipboard()"><span class="copied"> Copiato!</span></i>
                                    -->
                                </div>
                            </div>
                        </div>

                        <p class="size-1-2 font-w-500">SCOPRI LE TECNOLOGIE</p>
                        <div class="tab-nav mb-3">
                            <div :class="active === 0 ? 'active' : ''" v-on:click="switchTab(0)">Laser 808 nm</div>
                            <div :class="active === 1 ? 'active' : ''" v-on:click="switchTab(1)">Ice Cooler</div>
                        </div>
                        <div class="tabs">
                            <div :class="'tab' + (active === 0 ? ' active' : '')">
                                <p>Il diodo laser emette un fascio di luce concentrato, che mira unicamente alla melanina nel follicolo del pelo, senza danneggiare i tessuti circostanti. 
                                Anzi, grazie all’abbinamento dei principi di fotobiomodulazione, fototermolisi selettiva e all’uso esperto di cosmetici dedicati, la pelle è nutrita, 
                                luminosa e più elastica. Efficace sui diversi fototipi, Q Epilaser 2.0. permette di liberarsi progressivamente dei peli superflui in tutta sicurezza.</p>
                            </div>
                            <div :class="'tab' + (active === 1 ? ' active' : '')">
                                <p>Il manipolo di Q Epilaser 2.0. è provvisto di un sistema di raffreddamento specifico, ideale per evitare scottature, arrossamenti e irritazioni.<br>
                                Così, il trattamento di epilazione diventa un’esperienza piacevole e indolore, ideale anche per pelli sensibili e, più in generale, per contribuire 
                                alla soluzione di problematiche importanti come irsutismo e ipertricosi.</p>
                            </div>
                        </div>

                        <p class="size-1-2 font-w-500 mt-5">LA DIFFERENZA Q ITALY</p>
                        <div class="dot-grid">
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Un piacevole massaggio sulla pelle</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Risultati reali e progressivamente definitivi</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Facilità d'uso per l'operatore</p>
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
        name: 'QEpilaser',
        data() {
            return {
                active: 0
            }
        },
        methods: {
            switchTab: function(option) {
                this.active = option
            },
            showPopup() {
                this.$root.$refs.PopupForm.visible = true
            },
            toClipboard() {
                navigator.clipboard.writeText('info@qitaly.it')
                let label = this.$el.querySelector('.copied')
                label.style.display = "block"
                setTimeout(function(){
                    label.style.display = "none"
                }, 1500);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .background {
        background-image: url('~/assets/img/gray-square.jpg');
        background-repeat: no-repeat;
        background-position: center;
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