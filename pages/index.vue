<template>
    <div>
        <MainBanner/>
        <QEpilaser/>
        <QReGenesys/>
        <QLipoBody/>

        <ChiSiamo/>


        <BonusQitaly/>
        <div class="py-5" style="background-color: #fafafa;" id="contact-form">
            <div class="container py-5 px-lg-0 px-5">
                <ContactFormPocket id="contact-form-general-form"/>
            </div>
        </div>
        <SupportoQitaly/>
        <TestimonialQitaly/>
        <VantaggiFiscali/>

        <div class="container py-5">
            <p class="text-center h3 py-2 mb-4">Siamo presenti nelle riviste di settore:</p>
            <div class="d-flex mobile-flex-col justify-between items-ceter gap-3">
                <img src="~assets/img/loghi/logo-beautyplan.jpg" alt="" width="170">
                <img src="~assets/img/loghi/logo-estetispa.png" alt="" width="170">
                <img src="~assets/img/loghi/logo-esthetitaly.png" alt="" width="170">
                <img src="~assets/img/loghi/logo-lne.jpg" alt="" width="170">
                <img src="~assets/img/loghi/logo-mabella.png" alt="" width="170">
            </div>

            <p class="text-center h3 py-2 mb-2 mt-5">Abbiamo partecipato a:</p>
            <p class="text-center mb-2">Cosmoprof Bologna 2022</p>
            <p class="text-center">The Beauty & wellness congress (Milano)</p>

            <p class="text-center h3 py-2 mb-2 mt-5">Prossimi appuntamenti:</p>
            <p class="text-center">Aestetica Beauty & Wellness Exhibition (Napoli) <i>12-14 Novembre 2022 | Padiglione 1, Stand 136</i></p>
        </div>
    </div>
</template>

<script>
    import MainBanner from '../components/MainBanner'
    import QEpilaser from '../components/macchinari/QEpilaser'
    import QReGenesys from '../components/macchinari/QReGenesys'
    import QLipoBody from '../components/macchinari/QLipoBody'
    import ChiSiamo from '../components/ChiSiamo'
    import BonusQitaly from '../components/BonusQitaly'
    import SupportoQitaly from '../components/SupportoQitaly'
    import TestimonialQitaly from '../components/TestimonialQitaly'
    import VantaggiFiscali from '../components/VantaggiFiscali'
    import ContactFormPocket from '../components/ContactFormPocket'

    export default {
        name: 'IndexPage',
        components: {
            MainBanner,
            QEpilaser,
            QReGenesys,
            QLipoBody,
            ChiSiamo,
            BonusQitaly,
            SupportoQitaly,
            TestimonialQitaly,
            VantaggiFiscali,
            ContactFormPocket
        }
    }
</script>
