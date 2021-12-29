(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{124:function(t,e,n){"use strict";var o=n(173),r=n(174),d=n(1);d.a.component("Visualizer",o.default),d.a.component("ThemeIntro",r.default)},127:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("749e1522",content,!0,{sourceMap:!1})},128:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("02b17626",content,!0,{sourceMap:!1})},157:function(t,e,n){var content=n(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("6da9d7d6",content,!0,{sourceMap:!1})},164:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("69a22d5a",content,!0,{sourceMap:!1})},165:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("21925a05",content,!0,{sourceMap:!1})},171:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{loading:!1}},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1}}},r=(n(221),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",{staticClass:"loading-page",attrs:{id:"preload-master"}},[t._m(0)]):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-box"},[n("div",{staticClass:"configure-border-1"},[n("div",{staticClass:"configure-core"})]),t._v(" "),n("div",{staticClass:"configure-border-2"},[n("div",{staticClass:"configure-core"})])])}],!1,null,"6a4dd06f",null);e.default=component.exports},172:function(t,e,n){"use strict";var o={name:"default",mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),window.onload=function(){t.$nuxt.$loading.finish()}}))}},r=n(20),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},173:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(226),n(17),n(228),n(234),n(236),n(237),n(238),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(262),n(263),n(264),n(51),{name:"Visualizer",methods:{mute:function(){this.audio.pause(),document.getElementById("mute").style.display="block",document.getElementById("unmute").style.display="none",this.muted=!0},unmute:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.audio){e.next=8;break}return t.audio=new Audio("./audio/umbrella_vibes.mp3"),t.audio.loop=!0,e.next=5,t.audio.play();case 5:t.initializeVisualizer(),e.next=9;break;case 8:t.audio.play();case 9:document.getElementById("unmute").style.display="block",document.getElementById("mute").style.display="none",t.muted=!1;case 12:case"end":return e.stop()}}),e)})))()},initializeVisualizer:function(){document.getElementById("visualizer").style.display="block";var canvas=document.getElementById("visualizer");canvas.width=window.innerWidth,canvas.height=window.innerHeight;var t=canvas.getContext("2d"),e=new AudioContext,n=e.createMediaElementSource(this.audio),o=e.createAnalyser();n.connect(o),o.connect(e.destination),o.fftSize=256;var r,d=o.frequencyBinCount,l=new Uint8Array(d),c=canvas.width,f=canvas.height,m=(c-d)/d,h=0;!function e(){requestAnimationFrame(e),h=0,o.getByteFrequencyData(l),t.clearRect(0,0,c,f),t.fillStyle="#ffffff00",t.fillRect(0,0,c,f);for(var n=function(i){var e=[161,114,166],n=[156,187.5,176.25];r=l[i]/2.5;var o=function(t){return i/55*(n[t]-e[t])+e[t]+r/2-75},d=o(0),g=o(1),b=o(2);t.fillStyle="rgb("+d+","+g+","+b+")",t.fillRect(h,f-r,2*m,r),h+=2*m+1},i=0;i<d;i++)n(i)}()}},mounted:function(){},data:{muted:!0,noRender:!0,audio:void 0}}),d=(n(265),n(20)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"}}),t._v(" "),n("canvas",{attrs:{id:"visualizer"}}),t._v(" "),n("div",{attrs:{id:"mutebox"}},[n("i",{staticClass:"fas fa-2x fa-volume-mute",staticStyle:{color:"white"},attrs:{id:"mute"},on:{click:function(e){return t.unmute()}}}),t._v(" "),n("i",{staticClass:"fas fa-2x fa-volume-up",staticStyle:{color:"white",display:"none"},attrs:{id:"unmute"},on:{click:function(e){return t.mute()}}})])])}),[],!1,null,"396d4a78",null);e.default=component.exports},174:function(t,e,n){"use strict";n.r(e);n(127),n(128);var o={name:"ThemeIntro",data:function(){return{showChangelog:!1}},components:{changelog:n(175).default},methods:{hideChangelog:function(){this.showChangelog=!1},startEditing:function(){this.$emit("start-editing")}}},r=n(20),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"top",attrs:{id:"info"}},[n("h1",{staticClass:"title-rgb"},[t._v("Theme Generator")]),t._v(" "),t._m(0),t._v(" "),n("p",{staticStyle:{color:"#d0faeb"}},[t._v("\n            Whenever you're ready to get started, click the button at the bottom to dismiss this info page and open the editor.\n        ")]),t._v(" "),n("br"),t._v(" "),n("p",[n("em",[t._v("\n                This generator was created by "),n("NuxtLink",{attrs:{to:"/"}},[t._v("WubzyGD#8766")]),t._v(" and powered by "),n("a",[t._v("NotAnotherAnimeTheme")]),t._v(" "),n("br"),n("br"),t._v("\n                Pardon our dust! This theme maker is still in the works.\n                "),n("br"),t._v("\n                While it is functional, it is soon to have things like color pickers and a preview, as well as more customization options\n            ")],1),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:function(e){return t.startEditing()}}},[t._v("Get Started")]),t._v(" "),n("button",{on:{click:function(e){t.showChangelog=!0}}},[t._v("Recent Changes")])]),t._v(" "),t.showChangelog?n("changelog",{on:{"close-popup":t.hideChangelog}}):t._e()],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n            This is a theme generator made for the Discord client mod Bandaged Better Discord\n            "),n("br"),t._v("\n            Just plug in the info you want and hit download and "),n("em",[t._v("Alakazam")]),t._v(" a theme is made using "),n("em",[t._v("magic!")])])}],!1,null,"6eda2270",null);e.default=component.exports},175:function(t,e,n){"use strict";n.r(e);n(127),n(128);var o={name:"changelog",data:function(){return{recent:["The site is now in Nuxt.js!","Added server listing columns","Added the option for horizontally-displayed servers"],old:["Added small and big popout settings","Gave small and big popouts gradients","Added preview for popouts"]}},methods:{closePopup:function(){this.$emit("close-popup")}}},r=(n(269),n(20)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main popup higher"},[n("h2",[t._v("Changelog")]),t._v(" "),n("div",[n("h3",[t._v("Recent Changes")]),t._v(" "),n("ul",t._l(t.recent,(function(e){return n("li",[t._v("\n                "+t._s(e)+"\n            ")])})),0),t._v(" "),n("h3",[t._v("Older changes")]),t._v(" "),n("ul",t._l(t.old,(function(e){return n("li",[t._v("\n                "+t._s(e)+"\n            ")])})),0)]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[n("button",{on:{click:function(e){return t.closePopup()}}},[t._v("Close")])])])}),[],!1,null,"c74e4042",null);e.default=component.exports},180:function(t,e,n){n(181),t.exports=n(182)},221:function(t,e,n){"use strict";n(157)},222:function(t,e,n){var o=n(36)(!1);o.push([t.i,".loading-page[data-v-6a4dd06f]{margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;padding:1rem;text-align:center;font-size:3rem;font-family:sans-serif;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);transition:-webkit-backdrop-filter .2s;transition:backdrop-filter .2s;transition:backdrop-filter .2s,-webkit-backdrop-filter .2s;z-index:420}.loading-page[data-v-6a4dd06f],.spinner-box[data-v-6a4dd06f]{display:flex;align-items:center;justify-content:center}.spinner-box[data-v-6a4dd06f]{width:300px;height:300px;background-color:transparent}.configure-border-1[data-v-6a4dd06f]{position:absolute;background:#a172a6;-webkit-animation:configure-clockwise-data-v-6a4dd06f 2s ease-in-out 0s infinite alternate;animation:configure-clockwise-data-v-6a4dd06f 2s ease-in-out 0s infinite alternate}.configure-border-1[data-v-6a4dd06f],.configure-border-2[data-v-6a4dd06f]{width:115px;height:115px;padding:3px;display:flex;justify-content:center;align-items:center}.configure-border-2[data-v-6a4dd06f]{left:-115px;background:#d0faeb;transform:rotate(45deg);-webkit-animation:configure-xclockwise-data-v-6a4dd06f 2s ease-in-out 0s infinite alternate;animation:configure-xclockwise-data-v-6a4dd06f 2s ease-in-out 0s infinite alternate}.configure-core[data-v-6a4dd06f]{width:100%;height:100%;background-color:#2c2f33}@-webkit-keyframes configure-clockwise-data-v-6a4dd06f{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}to{transform:rotate(1turn)}}@keyframes configure-clockwise-data-v-6a4dd06f{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(180deg)}75%{transform:rotate(270deg)}to{transform:rotate(1turn)}}@-webkit-keyframes configure-xclockwise-data-v-6a4dd06f{0%{transform:rotate(45deg)}25%{transform:rotate(-45deg)}50%{transform:rotate(-135deg)}75%{transform:rotate(-225deg)}to{transform:rotate(-315deg)}}@keyframes configure-xclockwise-data-v-6a4dd06f{0%{transform:rotate(45deg)}25%{transform:rotate(-45deg)}50%{transform:rotate(-135deg)}75%{transform:rotate(-225deg)}to{transform:rotate(-315deg)}}html[data-v-6a4dd06f]{overflow-y:hidden}",""]),t.exports=o},223:function(t,e,n){var content=n(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("bc32c83c",content,!0,{sourceMap:!1})},224:function(t,e,n){var o=n(36),r=n(179),d=n(225),l=o(!1),c=r(d);l.push([t.i,".mainbg{background:linear-gradient(180deg,transparent 0,transparent 5%,hsla(0,0%,9%,.8) 35%,hsla(0,0%,9%,.91765) 55%,#171717 85%),url("+c+');min-height:100vh;margin:0;padding:0}.title-rgb{font-family:"Montserrat",sans-serif;width:5em;margin-left:auto;margin-right:auto;text-align:center;font-size:3.5em;overflow:auto;background:linear-gradient(90deg,#a172a6 20%,#171717 35%,#171717 0,#a172a6 50%);background-size:200% auto;color:#a172a6;-webkit-background-clip:text;background-clip:text;transition:background .5s ease-in-out,-webkit-animation .5s ease-in-out;transition:background .5s ease-in-out,animation .5s ease-in-out;transition:background .5s ease-in-out,animation .5s ease-in-out,-webkit-animation .5s ease-in-out}.title-rgb,.title-rgb:hover{-webkit-animation:dropdown-title 1.5s ease-in-out,shine 2.5s linear infinite;animation:dropdown-title 1.5s ease-in-out,shine 2.5s linear infinite;-webkit-text-fill-color:transparent}.title-rgb:hover{background:linear-gradient(90deg,#a172a6 20%,#fff 35%,#fff 0,#a172a6 50%);-webkit-background-clip:text;background-clip:text;background-size:200% auto}@-webkit-keyframes shine{to{background-position:200%}}@keyframes shine{to{background-position:200%}}@-webkit-keyframes dropdown-title{0%{transform:translateY(-100vh)}to{transform:translateY(0)}}@keyframes dropdown-title{0%{transform:translateY(-100vh)}to{transform:translateY(0)}}',""]),t.exports=l},225:function(t,e,n){t.exports=n.p+"img/background.3c6ae2f.jpg"},265:function(t,e,n){"use strict";n(164)},266:function(t,e,n){var o=n(36)(!1);o.push([t.i,"#visualizer[data-v-396d4a78]{position:fixed;left:0;top:0;width:100%;height:100%;display:none;pointer-events:none;opacity:.35;transition:opacity .75s ease-in}#mutebox[data-v-396d4a78]{position:absolute;right:0;top:0;padding:20px}#mute[data-v-396d4a78],#unmute[data-v-396d4a78]{cursor:pointer;transition:color .35s ease-in}#mute[data-v-396d4a78]:hover,#unmute[data-v-396d4a78]:hover{color:#858585}",""]),t.exports=o},267:function(t,e,n){var o=n(36)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap);"]),o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap);"]),o.push([t.i,'.main button,.main input{background-color:rgba(30,39,66,.24706);color:#d0faeb;text-align:center;border:1px solid #f3b5d3;border-radius:3px;width:auto;margin-left:auto;margin-right:auto;font-size:.82em;padding:5px 7px;font-family:"Monsterrat",sans-serif;transition:background-color .65s ease-in-out,border-color .65s ease-in-out,color .65s ease-in-out;cursor:pointer}.main h2,.main h3{color:#d0faeb!important}.main h2,.main input,.main li,.main p{text-align:left!important}.main p{font-size:1.25em}.main input{width:90%}.main input:hover{border-color:#a172a6}.main input:focus{background-color:hsla(0,0%,9%,.84706);color:#f3b5d3;outline:none}.main li{color:#c7c7c7;font-family:"Nunito",sans-serif;transition:color .35s ease-in}.main li:hover{color:#f3b5d3}.main h3{font-family:"Nunito",sans-serif}.editor{display:inline-flex;justify-content:left;justify-items:left;justify-self:left;flex-flow:row wrap;align-items:stretch;align-content:flex-start;grid-auto-rows:1fr}.edit-item{display:flex;justify-content:space-between;flex-direction:column;background-color:rgba(30,39,66,.24706);border:2px solid #a172a6;border-radius:3px;width:-webkit-min-content;width:-moz-min-content;width:min-content;padding:6px 15px 12px;transition:background-color .75s ease-in-out;height:available;min-height:100%;text-align:left}@media only screen and (min-width:1201px){.edit-item{max-width:27vw;min-width:15vw;margin-right:22px;margin-bottom:22px}}@media only screen and (max-width:1200px){.edit-item{max-width:45vw;min-width:20vw;margin-right:17px;margin-bottom:17px}}@media only screen and (max-width:800px){.edit-item{max-width:53vw;min-width:25vw;margin-right:15px;margin-bottom:15px}.main input{width:85%}}@media only screen and (max-width:600px){.edit-item{max-width:80vw;min-width:65vw;padding:4px 12px 14px;margin-right:12px;margin-bottom:12px}}@media only screen and (max-width:400px){.edit-item{max-width:100vw;min-width:85vw}}.edit-item h3{text-align:left;font-family:"Monsterrat",sans-serif;color:hsla(0,0%,78%,.87451)}.edit-item button{margin-left:auto;margin-right:auto}.edit-item p{overflow:fragments}.edit-item:hover{background-color:rgba(30,39,66,.49804)}.edit-item-sub *{display:inline-block}.edit-item-sub p,.gradient-sub p{font-size:.85em!important;color:#fff!important;width:30%!important}.edit-item-sub input{width:55%!important}.popup{position:fixed;left:30%;right:30%;top:40%;background-color:hsla(0,0%,9%,.96078);border:3px solid #a172a6;border-radius:2px}.higher{top:25%}#extra-options{display:none}#input-big-popout-gradient-enabled,#input-server-listing-horizontal-enabled,#input-small-popout-gradient-enabled{display:inline-block;width:auto;height:auto}.preview-window{border:none;background-color:#000;margin-left:auto;margin-right:auto;background-size:cover}.preview-window button,.preview-window p{z-index:100}.preview-window-mask{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}#small-popout-preview{width:300px;height:675px}#big-popout-preview{width:600px;height:400px}',""]),t.exports=o},268:function(t,e,n){var o=n(36)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap);"]),o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap);"]),o.push([t.i,'.title-rgb{font-family:"Montserrat",sans-serif;width:5em;margin-left:auto;margin-right:auto;text-align:center;font-size:3.5em;overflow:auto;background:linear-gradient(90deg,#a172a6 20%,#171717 35%,#171717 0,#a172a6 50%);background-size:200% auto;color:#a172a6;-webkit-background-clip:text;background-clip:text;transition:background .5s ease-in-out,-webkit-animation .5s ease-in-out;transition:background .5s ease-in-out,animation .5s ease-in-out;transition:background .5s ease-in-out,animation .5s ease-in-out,-webkit-animation .5s ease-in-out}.title-rgb,.title-rgb:hover{-webkit-animation:dropdown-title 1.5s ease-in-out,shine 2.5s linear infinite;animation:dropdown-title 1.5s ease-in-out,shine 2.5s linear infinite;-webkit-text-fill-color:transparent}.title-rgb:hover{background:linear-gradient(90deg,#a172a6 20%,#fff 35%,#fff 0,#a172a6 50%);-webkit-background-clip:text;background-clip:text;background-size:200% auto}@-webkit-keyframes shine{to{background-position:200%}}@keyframes shine{to{background-position:200%}}@-webkit-keyframes dropdown-title{0%{transform:translateY(-100vh)}to{transform:translateY(0)}}@keyframes dropdown-title{0%{transform:translateY(-100vh)}to{transform:translateY(0)}}.main,.top{max-width:100%;width:auto;padding:20px 30px}.main h2,.main p,.top p{color:#f3b5d3;text-align:center;width:auto;margin-left:auto;margin-right:auto;font-family:"Nunito",sans-serif;transition:background-color .75s ease-in-out}.top{font-size:1.35em}.main a,.top a{text-decoration:none;color:#fff}.top button{background-color:rgba(30,39,66,.24706);color:#d0faeb;text-align:center;border:1px solid #f3b5d3;border-radius:3px;width:auto;margin-left:auto;margin-right:auto;font-size:1.05em;padding:12px 15px;font-family:"Monsterrat",sans-serif;transition:background-color .65s ease-in-out,border-color .65s ease-in-out,color .65s ease-in-out;margin-top:2%;cursor:pointer}.main button:hover,.top button:hover{background-color:hsla(0,0%,9%,.84706);border-color:#a172a6;color:#f3b5d3}',""]),t.exports=o},269:function(t,e,n){"use strict";n(165)},270:function(t,e,n){var o=n(36)(!1);o.push([t.i,"button[data-v-c74e4042]{padding:5px 7px;font-size:.85em}",""]),t.exports=o}},[[180,10,2,11]]]);