<template>
    <div>
        <MainBanner/>
        <QEpilaser/>
        <QReGenesys/>
        <QLipoBody/>
        <ContactForm/>
        <ChiSiamo/>
        <BonusQitaly/>
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
            ContactForm
        }
    }
</script>
