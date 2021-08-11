<template>
    <div class="main popup higher" id="finished-window">
        <h2>Theme Completed!</h2>
        <p><em>Congratulations, your theme is complete!</em></p>
        <br><br>
        <p>
            Now that you're done, you can edit this theme to make a similar one, or reset to start from scratch.
            <br><br>
            <b>Enjoy your new theme!</b>
            <br>
            <em>Hey, Wubzy from the future here. Resetting currently doesn't work while I get the generator on nuxt.js, so just Ctrl+R/Refresh if you want to reset.</em>
        </p>
        <br><br>
        <div>
            <button v-on:click="clearWindow();">Continue Editing</button>
            <button v-on:click="reset();" style="display: inline-block !important;">Reset</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "aftercomplete",
    methods: {
        clearWindow() {this.$emit('clear-complete');},
        reset() {this.clearWindow(); this.$emit('reset-theme');}
    }
}
</script>

<style scoped>

</style>
