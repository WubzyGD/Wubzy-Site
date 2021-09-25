<template>
    <div class="container">
        <ThemeIntro v-show="!editing" v-on:start-editing="startEditing"></ThemeIntro>
        <ThemeEditor v-if="editing" id="editor"></ThemeEditor>
    </div>
</template>

<script>
    import editor from '~/components/theme/editor';

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
                {rel: 'icon', type: 'image/x-icon', href: 'https://cdn.discordapp.com/avatars/330547934951112705/a_3f507224356810d225b8e1ada0270bc4.gif?size=128'},
                {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"},
                {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"}
            ],
            bodyAttrs: {
                class: "mainbg"
            }
        },
        data() {
            return {
                editing: false
            }
        },
        methods: {
            startEditing() {
                this.editing = true;
            }
        },
        components: {
            'ThemeEditor': editor
        }
    };
</script>

<style scoped>

</style>
