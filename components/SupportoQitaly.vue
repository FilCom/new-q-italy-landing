<template>
    <div id="supporto-qitaly">
        <div class="background">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-8">
                        <h2 class="size-2-5 mt-5 mb-4">Supporto a tutto campo</h2>

                        <div class="dot-grid mb-4">
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Assistenza dello specialista</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Formazione inclusa</p>
                            </div>
                            <div class="d-flex px-4 size-1-15">
                                <div class="square"></div>
                                <p class="m-0 font-w-500">Filo diretto con le novità</p>
                            </div>
                        </div>

                        <p class="mb-4">Ogni operatore che si trovi a lavorare sui macchinari Q Italy riceve formazione adeguata e approfondita, e può sempre contare sull’assistenza 
                        di un medico specialista per ogni dubbio derivato dall’uso quotidiano. In più, Q Italy prevede frequenti corsi di aggiornamento per estetiste, 
                        così da affiancarle nella propria carriera. Diventare partner Q Italy significa essere sempre al passo con i tempi, conoscere in anticipo le 
                        novità e proporre solo, e sempre, il meglio.</p>

                        <div>
                            <a href="javascript:void(0)" v-on:click="showPopup()" class="red-btn">Contattaci</a>
                            <a href="tel:+39074225198" class="phone-btn"><i class="fa-solid fa-phone"></i></a>
                            <a href="mailto:info@qitaly.it" class="phone-btn desktop-d-none"><i class="fa-solid fa-envelope"></i></a>
                        </div>
                        <a href="mailto:info@qitaly.it" class="underline mt-2 d-inline-block mobile-d-none">info@qitaly.it</a> <i class="fa-solid fa-copy mobile-d-none ml-2 size-1-2 pointer color-grey position-relative" v-on:click="toClipboard()"><span class="copied"> Copiato!</span></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SupportoQitaly',
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
        background-image: url('~/assets/img/dottore-bg.jpg');
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