<template>
    <div v-bind:class="'main popup'" id="get-name-window">
        <h2>Name Your Theme</h2>
        <p><em>Keep it under 35 characters please</em></p>
        <br><br>
        <div>
            <input id="input-name" style="display: inline-block !important; width: 50% !important;" placeholder="Really Cool Theme">
            <button v-on:click="getNameAfter();" style="display: inline-block !important;">Set Name</button>
        </div>
        <button v-on:click="cancelName();" style="margin-top:5px;">Cancel and Continue Editing</button>
    </div>
</template>

<script>
import getNameAfter from "~/assets/scripts/theme/getname";

export default {
    name: "getname",
    methods: {
        cancelName() {this.$emit('name-cancel');},
        getNameAfter: getNameAfter,
        showConf() {this.$emit('conf-show');},
        download() {this.$emit('download');}
    },
    data() {
        return {
            name: ''
        }
    }
}
</script>

<style scoped>

</style>
