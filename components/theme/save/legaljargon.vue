<template>
    <div class="main popup higher" id="conf-window">
        <h2>First-Time Theme Creation Notice</h2>
        <p>
            <b>This theme generator is not affiliated with Discord in any way, shape, or form.</b>
            <br><br>
            Its developer is in no way responsible for any conflictions your use of the theme generator may create with Discord's Terms of Service.
            <br>
            Its developer is in no way responsible for anything related to the theme file or the generator that may occur after downloading the theme file.
            <br><br>
            <em>Basically, just use at your own risk. I'm just a guy making a theme generator. Don't come after me if you break ToS with themes.</em>
        </p>
        <button v-on:click="confirmed();">I'm cool with that. Proceed</button>
    </div>
</template>

<script>
export default {
    name: "legaljargon",
    methods: {
        confirmed() {this.$emit('confirmed');}
    }
}
</script>

<style scoped>

</style>
