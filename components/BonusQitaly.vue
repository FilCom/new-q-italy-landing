<template>
    <div id="bonus-q-italy">
        <div class="background">
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <h2 class="size-3 mb-1">Non solo macchinari:<br>scopri i BONUS Q ITALY</h2>
                        <h3 class="color-red">Servizi unici, inclusi nel prezzo</h3>

                        <h2 class="size-2-5 mt-5 mb-4">Marketing <span class="color-red">365</span></h2>
                        <div class="dot-grid mb-4">
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Piano editoriale gratuito</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Pubblicità per il tuo centro estetico</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Condividi contenuti ovunque</p>
                            </div>
                        </div>
                        <p class="mb-4">Essere imprenditore nel mondo della bellezza non significa limitarsi a proporre trattamenti o applicare cosmetici. 
                        Sono necessarie competenze sempre aggiornate, empatia con i clienti, spirito d’iniziativa e creatività. Per questo, 
                        Q Italy ha pensato a un supporto che vada oltre i macchinari in sé e ha creato Marketing 365. Un anno di contenuti, 
                        grafici e di testo, da condividere i propri clienti tramite Facebook, Instagram, WhatsApp o qualsiasi altro canale di 
                        comunicazione, inclusi nell’acquisto di ogni apparecchio.<br>
                        Ecco che promuoversi e valorizzare il proprio lavoro diventa semplice e perfino divertente!</p>

                        <div>
                            <a href="#contact-form" class="red-btn">Scrivici</a>
                            <a href="tel:+39074225198" class="phone-btn"><i class="fa-solid fa-phone"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src="~/assets/img/marketing365.png" alt="Marketing 365" class="mw-100 py-4">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BonusQitaly',
        methods: {
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
        background-color: #f9f9f9;
        background-image: url('~/assets/img/mano-cellulare.jpg');
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 991px) {
        .dot-grid {
            grid-template-columns: 100%;
        }
        .dot-grid > * {
            margin-bottom: 20px;
        }
    }
</style>