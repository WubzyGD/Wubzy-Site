<template>
    <div class="main">
        <div id="credits">
            <h2>Discord Theme Generator</h2>
            <p style="color:#a0a0a0;">
                <em>
                    Made by WubzyGD
                    <br>
                    Host theme by puckzxz#2080
                </em>
            </p>
        </div>
        <br>
        <EditorContainer></EditorContainer>
        <br>
        <button v-on:click="finish();" style="font-size: 1.25em; padding: 8px 10px;">Finish</button>

        <GetName v-if="gettingName" v-on:name-cancel="cancelName" v-on:name-got="setName" v-on:conf-show="showConf" v-on:download="download"></GetName>
        <LegalJargon v-if="showingConf" v-on:confirmed="conf"></LegalJargon>
        <AfterComplete v-if="themeCompleted" v-on:clear-complete="clearComplete" v-on:theme-reset="reset"></AfterComplete>
    </div>
</template>

<script>
import '~/assets/css/theme/editor.css';
import '~/assets/css/theme/front.css';

import ec from '~/components/theme/editor/editorcontainer';
import getname from "~/components/theme/save/getname";
import legaljargon from "~/components/theme/save/legaljargon";
import aftercomplete from "~/components/theme/save/aftercomplete";

import reset from "~/assets/scripts/theme/reset";
import finish from "~/assets/scripts/theme/finish";
import download from "~/assets/scripts/theme/download";

export default {
    name: "editor",
    components: {
        'EditorContainer': ec,
        'GetName': getname,
        'LegalJargon': legaljargon,
        'AfterComplete': aftercomplete
    },
    methods: {
        finish: finish,
        cancelName() {
            this.gettingName = false;
            this.theme = {};
        },
        setName(name) {
            this.theme.name = name;
            this.gettingName = false;
        },
        showConf() {this.showingConf = true;},
        conf() {
            this.showingConf = false;
            localStorage.setItem('notice-read', 'true');
            this.download();
        },
        download: download,
        afterFinish() {this.themeCompleted = true;},
        clearComplete() {this.themeCompleted = false;},
        reset: reset
    },
    data() {
        return {
            theme: {},
            gettingName: false,
            showingConf: false,
            themeCompleted: false,
            version: 'Beta - 1.1.3'
        }
    }
}
</script>

<style scoped>
    #credits h2, #credits p {text-align:left;}
    #credits h2 {color: #f3b5d3;}
</style>
