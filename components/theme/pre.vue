<template>
    <div class='container'>
        <div class="top" id="info">
            <h1 class="title-rgb">Theme Generator</h1>
            <p>
                This is a theme generator made for the Discord client mod Bandaged Better Discord
                <br>
                Just plug in the info you want and hit download and <em>Alakazam</em> a theme is made using <em>magic!</em>
            </p>
            <p style="color:#d0faeb;">
                Whenever you're ready to get started, click the button at the bottom to dismiss this info page and open the editor.
            </p>
            <br>
            <p>
                <em>
                    This generator was created by <NuxtLink to="/">WubzyGD#8766</NuxtLink> and powered by <a>NotAnotherAnimeTheme</a>
                    <br><br>
                    Pardon our dust! This theme maker is still in the works.
                    <br>
                    While it is functional, it is soon to have things like color pickers and a preview, as well as more customization options
                </em>
                <br>
                <button v-on:click="startEditing();">Get Started</button>
                <button v-on:click="showChangelog = true;">Recent Changes</button>
            </p>
            <changelog v-if="showChangelog" v-on:close-popup="hideChangelog"></changelog>
        </div>
    </div>
</template>

<script>
    import '@/assets/css/theme/editor.css';
    import '@/assets/css/theme/front.css';

    import changelog from '~/components/theme/changelog';

    export default {
        name: "ThemeIntro",
        data() {
            return {
                showChangelog: false
            }
        },
        components: {
            'changelog': changelog
        },
        methods: {
            hideChangelog() {
                this.showChangelog = false;
            },
            startEditing() {
                this.$emit('start-editing');
            }
        }
    };
</script>

<style scoped>

</style>
