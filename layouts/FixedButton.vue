<template>
    <div id="fixed-button">
        <div class="button" v-on:click="status = 'open'">
            <img src="~/assets/img/agevolazione-fiscale.png" alt="Vantaggi fiscali 2022" width="70" height="70">
        </div>
        <div class="content" :data-status="status">
            <div>
                <p class="mb-0"><b>VANTAGGI FISCALI <span class="color-gold">2022</span></b><br><a href="#vantaggi-fiscali" class="underline color-gold">Scopripli tutti</a> ></p>
            </div>
            <i class="fa-solid fa-xmark text-light size-0-8 close" v-on:click="status = 'closed'"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FixedButton',
        data() {
            return {
                status: 'closed'
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    #fixed-button {
        position: fixed;
        left: 0;
        bottom: 16px;
        background-color: #161512;
        color: #fff;
        cursor: pointer;
        z-index: 999;
        img {
            padding: 10px;
        }
    }
    .button {
        position: relative;
        z-index: 1000;
        background-color: #161512;
    }
    .content {
        position: fixed;
        left: 69px;
        bottom: 16px;
        background-color: #161512;
        color: #fff;
        height: 70px;
        display: grid;
        align-items: center;
        z-index: 999;
        padding: 0 28px 0 14px;
        transform: translate(-100%, 0);
        cursor: default;
        a {
            cursor: pointer;
        }
        .close {
            position: absolute;
            top: 4px;
            right: 4px;
            cursor: pointer;
        }
        &[data-status="open"] {
            transform: translate(0, 0);
        }
    }
</style>