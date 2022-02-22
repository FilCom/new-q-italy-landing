<template>
    <div id="main-banner">
        <div class="bg-video">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/T0-osA_9YHk?controls=0&autoplay=1&mute=1&rel=0&loop=1&playlist=T0-osA_9YHk&modestbranding=1&showinfo=0&fs=0&disablekb=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                mute
                >
            </iframe>
            <div class="shield"></div>
            
            <div class="content custom-padding">
                <div class="container">
                    <img src="~/assets/img/logo-qitaly-black.png" alt="Q Italy logo" width="110" height="110" class="mb-3 mobile-d-none">
                    <h1 class="mb-3"><span class="font-w-300">Obbiettivo:</span><br><span class="font-w-500">DIFFONDERE LA BELLEZZA</span></h1>

                    <div class="d-inline-block mobile-d-block my-2">
                        <a href="#q-epilaser" class="red-btn mr-3">Q Epilaser 2.0</a>
                    </div>
                    <div class="d-inline-block mobile-d-block my-2">
                        <a href="#q-regenesys" class="red-btn mr-3">Q ReGenesys</a>
                    </div>
                    <div class="d-inline-block mobile-d-block my-2">
                        <a href="#q-lipo-body" class="red-btn">Q Lipo Body Contouring Plus</a>
                    </div>

                    <p class="font-w-500 size-1-2 mt-5">Li conosci già?<br>Acquistali A UN PREZZO MAI VISTO grazie alle<br>
                    <a href="#vantaggi-fiscali" class="color-gold h-color-gold font-w-500"><span class="underline">AGEVOLAZIONI FISCALI 2022</span> ></a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainBanner'
    }
</script>

<style lang="scss" scoped>
    .bg-video {
        width: 100%;
        position: relative;
        overflow: hidden;
        height: calc(100vh - 86px);
        .shield {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 99;
        }
    }

    /* Responsive video height */
    @media screen and (max-width: 1750px) {
        iframe{
            width: 130%;
        }
    }
    @media screen and (max-width: 1480px) {
        iframe{
            width: 150% !important;
        }
    }
    @media screen and (max-width: 999px) {
        iframe{
            height: 999px !important;
            display: none;
        }
        .bg-video {
            height: 600px;
            background-image: url('~/assets/img//slider-mobile.jpg');
            background-size: cover;
            background-position: center;
        }
    }
    iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 110%;
        height: 60vw;
        z-index: -1;
    }

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        min-width: 1140px;
    }
    @media (max-width: 992px) {
        .content {
            max-width: 100%;
            width: 100%;
            min-width: auto;
        }
    }
</style>