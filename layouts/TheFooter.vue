<template>
    <div id="the-footer">
        <div class="background py-5">
            <div class="container text-center border-bottom pb-4">
                <img src="~/assets/img/logo-qitaly-white.png" alt="Logo Q Italy" width="100" height="100">

                <div class="mt-4 mb-2">
                    <i class="fa-solid fa-location-dot color-red size-1-7"></i>
                </div>
                <p class="text-light mb-4">Strada Fornace Vecchia, s.n.<br>61122 Pesaro (PU)</p>

                <div class="mt-4 mb-2">
                    <i class="fa-solid fa-phone color-red size-1-7"></i>
                </div>
                <a href="tel:+39074225198">+39 0742 25198</a>

                <div class="mt-4 mb-2">
                    <i class="fa-solid fa-envelope color-red size-1-7"></i>
                </div>
                <a href="mailto:info@qitaly.it">info@qitaly.it</a>

                <div class="mt-4">
                    <a href="#" class="px-2">Privacy Policy</a> <a href="#" class="px-2">Cookie Law</a>
                </div>
            </div>
            <div class="container text-center">
                <p class="text-light size-0-8 mt-1">Copyright © 2021 Q-Italy. Tutti i diritti riservati. Strada Fornace Vecchia, s.n. 61122 Pesaro (PU) tel. +39 0721 25198 - fax +39 0721 220372 - email: info@qitaly.it P.IVA 02310110412 - REA 0171557 - Cap. Soc. € 20.000 i.v. Sito Web Progettato e Realizzato da Comunicativi Web Agency Pesaro</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheFooter'
    }
</script>

<style lang="scss" scoped>
    .background {
        background-color: #000;
    }
    a {
        color: #CE8203 !important;
    }
    .border-bottom {
        border-bottom: 1px solid red;
    }
</style>