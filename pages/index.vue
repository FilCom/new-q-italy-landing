<template>
    <div>
        <MainBanner/>
        <QEpilaser/>
        <QReGenesys/>
        <QLipoBody/>

        <ChiSiamo/>


        <BonusQitaly/>
        <div class="py-5" style="background-color: #fafafa;" id="contact-form">
            <div class="container py-5">
                <ContactFormPocket class="d-none d-lg-block"/>
            </div>
        </div>
        <SupportoQitaly/>
        <TestimonialQitaly/>
        <VantaggiFiscali/>
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
    import ContactForm from '../components/ContactForm.vue'
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
            ContactFormPocket,
            ContactForm
        }
    }
</script>
