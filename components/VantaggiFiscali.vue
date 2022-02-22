<template>
    <div id="vantaggi-fiscali">
        <div class="background">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-5">
                        <img src="~/assets/img/agevolazione-fiscale.png" alt="Vantaggi fiscali 2022" class="mw-100 mb-3">
                    </div>
                    <div class="col-lg-7">
                        <h3>Vantaggi Fiscali <span class="color-gold">2022</span></h3>
                        <h4 class="font-w-200 size-3">Fai fruttare al massimo il tuo investimento!</h4>
                        <p class="mb-3"><span class="color-gold">Fino all'80% di agevolazioni fiscali</span> con credito d’imposta e industria 4.0: sono queste le novità per il 2022.</p>
                        <p class="mb-3">Un’opportunità incredibile per acquistare macchinari di altissima tecnologia, aumentare il fatturato del centro estetico con servizi esclusivi 
                        e all’avanguardia, e ricevere, oltretutto, un sostanzioso sconto sulle tasse.</p>
                        <p class="mb-3">Inserisci la tua e-mail e ti invieremo tutte le informazioni necessarie e le condizioni per approfittare delle agevolazioni.</p>
                        <TheForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TheForm from '../components/TheForm'
    export default {
        name: 'VantaggiFiscali',
        components: {
            TheForm
        }
    }
</script>

<style lang="scss" scoped>
    .background {
        background-color: #161512;
        color: #fff;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
</style>