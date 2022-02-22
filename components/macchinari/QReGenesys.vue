<template>
    <div id="q-regenesys">
        <div class="background">
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-4">
                        <img src="~/assets/img/prodotti/regenesys.png" alt="Q ReGenesys" class="mw-100 mobile-mb-3">
                    </div>
                    <div class="col-lg-8">
                        <div class="row mb-5 neg-m">
                            <div class="col-lg-8 mobile-p-0">
                                <h2 class="size-3 mb-1">Q ReGenesys</h2>
                                <h3 class="color-red">Rifiorire davvero, cellula dopo cellula</h3>
                            </div>
                            <div class="col-lg-4 text-right mobile-text-left mobile-mt-3 mobile-p-0">
                                <div class="d-inline-block text-left">
                                    <div>
                                        <a href="javascript:void(0)" v-on:click="showPopup()" class="red-btn">Contattaci</a>
                                        <a href="tel:+39074225198" class="phone-btn"><i class="fa-solid fa-phone"></i></a>
                                        <a href="mailto:info@qitaly.it" class="phone-btn desktop-d-none"><i class="fa-solid fa-envelope"></i></a>
                                    </div>
                                    <a href="mailto:info@qitaly.it" class="underline mt-2 d-inline-block mobile-d-none">info@qitaly.it</a> <i class="fa-solid fa-copy mobile-d-none ml-2 size-1-2 pointer color-grey position-relative" v-on:click="toClipboard()"><span class="copied"> Copiato!</span></i>
                                </div>
                            </div>
                        </div>

                        <p class="size-1-2 font-w-500">SCOPRI LE TECNOLOGIE</p>
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

                        <p class="size-1-2 font-w-500 mt-5">LA DIFFERENZA Q ITALY</p>
                        <div class="dot-grid">
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Ringiovanimento anche oltre 50 anni</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Rinnovamento cellulare di tutto il corpo</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Manipoli ergonomici, display user friendly</p>
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
        name: 'QReGenesys',
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