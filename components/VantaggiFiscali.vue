<template>
    <div id="vantaggi-fiscali">
        <div class="background">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-6 order-lg-2 mb-5 mb-lg-0">
                        <h3>Vantaggi Fiscali <span class="color-gold">2022</span></h3>
                        <h4 class="font-w-200 size-3">Fai fruttare al massimo il tuo investimento!</h4>
                        <p class="mb-3"><span class="color-gold">Fino all'80% di agevolazioni fiscali</span> con credito d’imposta e industria 4.0: sono queste le novità per il 2022.</p>
                        <p class="mb-3">Un’opportunità incredibile per acquistare macchinari di altissima tecnologia, aumentare il fatturato del centro estetico con servizi esclusivi 
                        e all’avanguardia, e ricevere, oltretutto, un sostanzioso sconto sulle tasse.</p>
                        <p class="mb-4">Inserisci la tua e-mail e ti invieremo tutte le informazioni necessarie e le condizioni per approfittare delle agevolazioni.</p>
                        <TheForm/>
                    </div>
                    <div class="col-lg-6 custom-bg order-lg-1"> 
                        <div style="height: 100%; display: grid; align-items: center; padding: 40px 0;">

                            <p class="text-center d-lg-none" style="font-size: 26px; text-shadow: 0 0 4px #000000d6;">Come funziona:</p>

                            <div class="grid">
                                <div style="grid-column-start: 1; grid-column-end: span 3; border-bottom: 1px solid #fff;">Credito d’imposta in tutta Italia</div>
                                <div class="text-center" style="grid-column-start: 4; grid-column-end: 4; border-bottom: 1px solid #fff; font-size: 24px;">6%</div>
                                <div style="grid-column-start: 1; grid-column-end: span 3; grid-row-start: 2; grid-row-end: 2; border-bottom: 1px solid #fff;">Bonus Industria 4.0</div>
                                <div class="text-center" style="grid-column-start: 4; grid-column-end: 4; grid-row-start: 2; grid-row-end: 2; border-bottom: 1px solid #fff; font-size: 24px;">40%</div>
                                <div style="grid-area: 1 / 5 / span 2 / 5; border-left: 1px solid #fff; border-right: 1px solid #fff; border-bottom: 1px solid #fff; font-size: 14px; padding-left: 8px; padding-right: 8px;"><span class="mobile-rotate">Non cumulabili</span></div>
                                <div style="grid-area: 3 / 1 / 3 / span 3;">Credito d’imposta zone ZES</div>
                                <div class="text-center" style="grid-area: 3 / 4 / 3 / 4; font-size: 24px;">45%</div>
                                <div style="grid-area: 2 / 6 / 2 / 6; border-top: 1px solid #fff; font-size: 14px; padding-left: 8px; padding-right: 8px;">Puoi cumularli e detrarre fino all’</div>
                                <div style="grid-area: 3 / 5 / 3 / 5; border-right: 1px solid #fff;"></div>
                                <div style="grid-area: 3 / 6 / 3 / 6; padding-left: 8px; padding-right: 8px;"><div><span style="font-size: 50px; font-weight: 500;">85</span>%</div></div>
                                <div style="grid-area: 4 / 1 / 4 / span 3; border-top: 1px solid #fff;">Credito d’imposta ZES Sull’acquisto di beni che non Rientrano nell’industria 4.0</div>
                                <div class="text-center" style="grid-area: 4 / 4 / 4 / span 6; border-top: 1px solid #fff; font-size: 24px;">6% + 45%</div>
                            </div>
                        </div>
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
        components: {
            TheForm
        }
    }
</script>

<style lang="scss" scoped>
    @media screen and (max-width: 1023px) {
        .mobile-rotate {
            transform: rotate(-90deg);
            transform-origin: 33% 50%;
        }
    }

    .background {
        background-color: #161512;
        color: #fff;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

    .grid {
        display: grid;
        grid-template-columns: 15% 14% 16% 16% 17% 20%;
        grid-template-rows: repeat(4, 1fr);
        min-height: 200px;
        align-items: center;
        background: #000000bd;
        padding: 14px;
        height: fit-content;
        border-radius: 12px;
    }
    .grid > div {
        height: 100%;
        align-items: center;
        display: grid;
    }

    .custom-bg {
        background-image: url('~/assets/img/agevolazione-fiscale.png');
        background-position: center;
        background-repeat: no-repeat;
    }
</style>