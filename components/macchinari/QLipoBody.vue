<template>
    <div id="q-lipo-body">
        <div class="background">
            <div class="container py-5 mb-5">
                <div class="row align-items-center">
                    <div class="col-lg-4">
                        <img src="~/assets/img/prodotti/lipobody.png" alt="Q Lipo Body Contouring Plus" class="mw-100 mobile-mb-3">
                    </div>
                    <div class="col-lg-8">
                        <div class="row mb-5 neg-m">
                            <div class="col-lg-8 mobile-p-0">
                                <h2 class="size-3 mb-1">Q Lipo Body Contouring Plus</h2>
                                <h3 class="color-red">Realizza il sogno di un corpo perfetto</h3>
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

                        <p class="size-1-2 font-w-500 mt-5">LA DIFFERENZA Q ITALY</p>
                        <div class="dot-grid">
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Azione risolutiva anche nei punti critici</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Software personalizzato</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Macchinario hands free</p>
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
        name: 'QLipoBody',
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