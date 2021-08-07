<template>
    <div class="container" :style="master">
        <ThemeIntro></ThemeIntro>
    </div>
</template>

<script>
    export default {
        head: {
            title: 'Wubzy | Theme Generator',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: 'A theme generator for Better Discord based off of NotANotherAnimeTheme!'} 
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: 'https://cdn.discordapp.com/avatars/330547934951112705/a_a9d63b8c1f37d9096527ee24fbe9b587.gif?size=128'},
                {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"},
                {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"}
            ]
        },
        data() {
            return {master: {
                background: "linear-gradient(to bottom, #00000000 0%, #00000000 5%, #171717cc 35%, #171717ea 55%, #171717ff 85%), url('~~assets/images/background.jpg')",
                minHeight: "100vh"
            }}
        }
    };
</script>

<style scoped>
    
</style>