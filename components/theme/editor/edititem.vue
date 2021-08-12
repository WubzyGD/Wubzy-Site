<template>
    <div class="edit-item">
        <h3>{{ title }}</h3>
        <div v-html="desc" v-bind:class="'edit-item-desc'" style="text-align:left;"></div>
        <input v-bind:id="'input-' + baseId" v-bind:placeholder="example" v-model="dvalue" v-if="!special || (special && example)">
        <div v-if="special && popout">
            <div v-for="x in specialItems" v-bind:class="'edit-item-sub'">
                <p style="text-align:left;">{{ x.name }}</p>
                <input v-bind:id="'input-' + baseId + '-' + x.base" v-bind:placeholder="x.ex" v-model="x.val">
            </div>
            <div v-bind:class="'edit-item-gradient-container'">
                <div v-bind:class='"gradient-sub"'>
                    <p style='display:inline-block;'>Gradient</p>
                    <input type='checkbox' v-bind:id='"input-" + baseId + "-gradient-enabled"' v-on:click="gradientEnabled = !gradientEnabled;">
                </div>
                <div v-bind:id='baseId + "-gradient-options"' v-show="gradientEnabled">
                    <div v-bind:class="'edit-item-sub'">
                        <p>Gradient Color</p>
                        <input v-bind:id='"input-" + baseId + "-gradient-color"' value='#171717' placeholder="#ffffff">
                    </div>
                    <div v-bind:class="'edit-item-sub'">
                        <p>Gradient Percentage</p>
                        <input v-bind:id='"input-" + baseId + "-gradient-percentage"' value='100%' placeholder="100%">
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="special && !popout" v-html="forced"></div>
    </div>
</template>

<script>
export default {
    name: "edititem",
    props: {
        "baseId": String,
        "title": String,
        "desc": String,
        "dvalue": {
            type: String,
            default: ""
        },
        "example": {
            type: String,
            default: ""
        },
        "special": {
            default: false,
            type: Boolean
        },
        "popout": {
            default: true,
            type: Boolean
        },
        "forced": {
            default: "",
            type: String
        }
    },
    data() {
        return {
            specialItems: [
                {name: "BG URL", base: "bg", val: "", ex: "https://....png"},
                {name: "Mask RGB", base: "mask-color", val: "0 0 0", ex: "R G B"},
                {name: "Mask Str.", base: "mask-strength", val: "7", ex: "7"}
            ],
            gradientEnabled: false
        }
    }
}
</script>

<style scoped>
    p, h2, h3, input, em, b {text-align: left;}

    .edit-item-desc p, .edit-item-desc h2, .edit-item-desc h3,
    .edit-item-desc input, .edit-item-desc em, .edit-item-desc b {text-align: left;}

    .edit-item-desc {
        display: flex;
        justify-content: left;
        justify-items: left;
        justify-self: left;
        flex-flow: row wrap;
        align-content: flex-start;
    }
</style>
