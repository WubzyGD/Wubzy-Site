<template>
    <div class="loading-page" id="preload-master" v-if='loading'>
        <div class="spinner-box">
            <div class="configure-border-1">
                <div class="configure-core"></div>
            </div>
            <div class="configure-border-2">
                <div class="configure-core"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            loading: false,
        }),
        methods: {
            start() {
                this.loading = true
            },
            finish() {
                this.loading = false
            },
        },
    }
</script>

<style scoped>
    .loading-page {
        margin: auto;
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        padding: 1rem;
        text-align: center;
        font-size: 3rem;
        font-family: sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(20px);
        transition: backdrop-filter 0.2s;
        z-index: 420;
    }
    .spinner-box {
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }
    .configure-border-1 {
        width: 115px;
        height: 115px;
        padding: 3px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #a172a6;
        animation: configure-clockwise 2s ease-in-out 0s infinite alternate;
    }

    .configure-border-2 {
        width: 115px;
        height: 115px;
        padding: 3px;
        left: -115px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #d0faeb;
        transform: rotate(45deg);
        animation: configure-xclockwise 2s ease-in-out 0s infinite alternate;
    }

    .configure-core {
        width: 100%;
        height: 100%;
        background-color: #2C2F33;
    }

    @keyframes configure-clockwise {
        0% {
            transform: rotate(0);
        }
        25% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(180deg);
        }
        75% {
            transform: rotate(270deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes configure-xclockwise {
        0% {
            transform: rotate(45deg);
        }
        25% {
            transform: rotate(-45deg);
        }
        50% {
            transform: rotate(-135deg);
        }
        75% {
            transform: rotate(-225deg);
        }
        100% {
            transform: rotate(-315deg);
        }
    }

    html {overflow-y: hidden;}
</style>