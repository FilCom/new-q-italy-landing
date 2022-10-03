<template>
    <div>
        <TheNavbar :config="headerConfig"/>
        <FixedButton/>

        <PopupForm/>
        
        <Nuxt/>
        <TheFooter/>
    </div>
</template>

<script>
    import TheNavbar from '../layouts/TheNavbar'
    import TheFooter from '../layouts/TheFooter'
    import FixedButton from '../layouts/FixedButton'
    import PopupForm from '../layouts/PopupForm'

    export default {
        components: {
            TheNavbar,
            TheFooter,
            FixedButton,
            PopupForm
        },
        data() {
            return {
                headerConfig: {
                    full: false,
                    logo: {
                        src: '~/assets/img/logo-hd-von-panty.png',
                        alt: 'logo'
                    },
                    menu: [
                        {
                            label: 'Q Epilaser 2.0',
                            href: '#q-epilaser'
                        },
                        {
                            label: 'Q ReGenesys',
                            href: '#q-regenesys'
                        },
                        {
                            label: 'Q Lipo Body',
                            href: '#q-lipo-body'
                        },
                        {
                            label: 'Chi Siamo',
                            href: '#chi-siamo'
                        },
                        /*
                            {
                                label: 'Cosa Dicono di noi',
                                href: '/'
                            },
                        */
                        {
                            label: 'Agevolazioni 2022',
                            href: '#vantaggi-fiscali'
                        }
                    ],
                    socials: {
                    }
                }
            }
        }
    }
</script>