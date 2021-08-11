<template>
    <div class="editor" id="editorcontainer">
        <Item
            v-for="item in items"
            v-bind:title="item.title"
            v-bind:base-id="item.baseId"
            v-bind:dvalue="item.dvalue"
            v-bind:example="item.example"
            v-bind:desc="item.desc"
            v-bind:special="item.special"
            v-bind:popout="item.popout"
            v-bind:forced="item.forced"
            :key="item.baseId"
        ></Item>
    </div>
</template>

<script>
import edititem from "~/components/theme/editor/edititem";

export default {
    name: "editorcontainer",
    components: {
        'Item': edititem
    },
    data() {
        return {
            items: [
                {
                    title: "Background Image", baseId: "bg-image", example: "https://....png",
                    desc: "<p style='text-align:left;'>This is the image that will be displayed as the main background all over your Discord client.<br><br><em>This is a URL to an image. <b>Not</b> imgur links etc.</em></p>"
                }, {
                    title: "Background Color Mask", baseId: "bg-mask", dvalue: "0 0 0", example: "R G B",
                    desc: "<p style='text-align:left;'>A color in <b>RGB</b> form that applies over the background.<br><br>I <b>highly</b> recommend using 0 0 0, as other colors will distort the image. 0 0 0 is black, meaning your image will just be darkened.</p>"
                }, {
                    title: "Background Mask Strength", baseId: "bg-mask-strength", dvalue: "7", example: "7",
                    desc: "<p style='text-align:left;'>The opacity of your background color mask. If you used 0 0 0, this is how much darker your image will be.<br><br><em>This is a number between 0 and 9.</em></p>"
                }, {
                    title: "Primary Theme Color", baseId: "color-primary", example: "#ffffff",
                    desc: "<p style='text-align:left;'>This is the main color that things like unread messages, the scroll bar, category names, and a few other things will be.<br><br><em>This color is in <b>hex</b> form. You can overwrite some of the colors later.</em></p>"
                }, {
                    title: "Friends Icon Image", baseId: "friends-icon", example: "https://....png",
                    desc: "<p style='text-align:left;'>The image that will be displayed as the friends icon in the top left corner. You may leave this blank to use a default.<br><br><em>Please use an image URL here.</em><br><br><em>Do bear in mind that this icon is on the smaller side and is round</em></p>"
                }, {
                    title: "Small User Popout", baseId: "small-popout", special: true,
                    desc: "<p style='text-align:left;'>The background image shown when you click on a user in the friends menu, among other settings.<br><br>It is perfectly okay to leave all of these settings unmodified.</p>"
                }, {
                    title: "Big User Popout", baseId: "big-popout", special: true,
                    desc: "<p style='text-align:left;'>The background image shown when you click on a user's \"Profile\" button.<br><br>It is perfectly okay to leave all of these settings unmodified.</p>"
                }, {
                    title: "Other Colors", baseId: 'other-colors', special: true, popout: false,
                    desc: "<p style='text-align:left;'>Here are some other colors of the theme that you can change if that's your thing<br><br><em>Honestly, it's probably better to leave these be for the most part.</em></p>",
                    forced: "<div class='edit-item-sub'><p>Mention Highlight</p><input id='input-mention-highlight-color' placeholder='#ffffff'></div><div class='edit-item-sub'><p>Unread Channels</p><input id='input-unread-channel-color' placeholder='#ffffff'></div><div class='edit-item-sub'><p>Scrollbar</p><input id='input-scrollbar-color' placeholder='#ffffff'></div>"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
