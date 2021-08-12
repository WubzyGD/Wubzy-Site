<template>
    <div class="main popup higher">
        <h2>Changelog</h2>
        <div>
            <h3>Recent Changes</h3>
            <ul>
                <li v-for="change in recent">
                    {{ change }}
                </li>
            </ul>
            <h3>Older changes</h3>
            <ul>
                <li v-for="change in old">
                    {{ change }}
                </li>
            </ul>
        </div>
        <p style="text-align:center;">
            <button v-on:click="closePopup();">Close</button>
        </p>
    </div>
</template>

<script>
import '@/assets/css/theme/editor.css';
import '@/assets/css/theme/front.css';

export default {
    name: "changelog",
    data() {
        return {
            recent: [
                "The site is now in Nuxt.js!",
                "Added server listing columns",
                "Added the option for horizontally-displayed servers"
            ],
            old: [
                "Added small and big popout settings",
                "Gave small and big popouts gradients",
                "Added preview for popouts"
            ]
        }
    },
    methods: {
        closePopup() {
            this.$emit('close-popup');
        }
    }
}
</script>

<style scoped>
    button {
        padding: 5px 7px;
        font-size: .85em;
    }
</style>
