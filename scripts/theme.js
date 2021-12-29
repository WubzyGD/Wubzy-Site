const template = `/**
* @name {{themeName}}
* @author puckzxz#2080
* @version 3.2
* @description A custom theme made by WubzyGD#8766's theme generator at https://wubzy.xyz/util/theme based on Puckzxz's NotAnotherAnimeTheme
* @invite FdZhbjY
* @source https://github.com/puckzxz/NotAnotherAnimeTheme
* @updateUrl https://raw.githubusercontent.com/puckzxz/NotAnotherAnimeTheme/master/NotAnotherAnimeTheme.theme.css
*/

@import url(https://puckzxz.github.io/NotAnotherAnimeTheme/build/v3/naat.v3.css);

:root {
  --theme-background-image: url({{background-image}});
  --main-theme-color: {{main-color}};
  --theme-transparency: {{main-transparency}};
  --home-icon-image: url({{friends-icon}});
  --home-icon-image-position: center center;
  --home-icon-image-zoom: 100%;

  /*
    Server Listing Width
    Single Column:  72px
    Double Column:  126px
    Triple Column:  184px
    Quad Column:    242px
  */
  --server-listing-width: 72px;

  --font-size: 100%;
  --mention-color: #{{mention-highlight-color}}4b;
  --mention-sider: #{{mention-highlight-color}}7f;
  --mention-hover-color: #{{mention-highlight-color}}5f;

  --category-hover-color: {{trans-main-color}};

  --unread-server-animation: rainbow;

  --video-screen-button-background-color: rgba(200, 200, 200, 0.2);
  --video-screen-button-foreground-color: white;
  --video-screen-button-background-hovor-color: rgba(200, 200, 200, 0.4);
  --video-screen-button-foreground-hovor-color: white;

  --member-listing-role-color: var(--main-theme-color);

  --small-user-popout-background-image: {{small-popout-bg}};
  --small-user-popout-background-transparency: {{small-popout-mask}};
  --small-user-popout-background-image-position: center;

  --big-user-popout-background-image: {{big-popout-bg}};
  --big-user-popout-background-transparency: {{big-popout-mask}};
  --big-user-popout-background-image-position: center;

  --code-markup-background-color: rgba(0, 0, 0, 0.6);
  --code-markup-border: 1px solid transparent;

  --message-box-transparency: rgba(0, 0, 0, 0.6);

  --embed-background-transparency: rgba(0, 0, 0, 0.6);

  --message-hover-buttons-background: rgba(200, 200, 200, 0.1);

  --context-menu-transparency: rgba(15, 15, 15, 0.8);

  --add-discover-icon-transparency: rgba(200, 200, 200, 0.15);
  --add-discover-icon-color: #43b581;

  --channel-limit-count-color: var(--channels-default);
  --channel-limit-background-left: rgba(200, 200, 200, 0.1);
  --channel-limit-background-right: rgba(200, 200, 200, 0.2);

  --scrollbar-color: #{{scrollbar-color}}89;

  --unread-message-divider-color: #f04747;
  --unread-message-divider-font-color: #fff;

  --new-messages-bar-background-color: var(--main-theme-color);
  --new-messages-bar-font-color: #fff;

  --emoji-menu-background-color: rgba(0, 0, 0, 0.6);
  --emoji-menu-sider-background-color: rgba(0, 0, 0, 0);
  --emoji-menu-server-header-background-color: rgba(0, 0, 0, 0.8);
  --emoji-menu-bottom-bar-background-color: black;
  --emoji-menu-search-bar-background-color: rgba(200, 200, 200, 0.1);

  --message-search-menu-background-color: rgba(0, 0, 0, 0.8);
  --message-search-container-background-color: rgba(0, 0, 0, 0.6);
  --message-search-result-background-color: rgba(200, 200, 200, 0.05);

  --text-voice-channel-color: rgb(142, 146, 151);
  --text-voice-channel-hover-color: #dcddde;
  --text-voice-channel-selected-text-color: #fff;
  --unread-text-channel-color: #{{unread-channel-color}};
  --unread-text-channel-bubble-color: #{{unread-channel-color}};

  --folder-background-color: #2f3136;
  --expanded-folder-background-color: transparent;

  --reaction-emoji-background-color: rgba(0, 0, 0, 0);
  --reaction-emoji-border-color: 1px solid transparent;
  --reaction-emoji-hover-background-color: rgba(255, 255, 255, 0.1);
  --reaction-emoji-hover-border-color: rgba(255, 255, 255, 0.2);
}

.root-3QyAh1 {background-size: cover;}
.userPopout-xaxa6l {background-size: cover;}`;

let theme = {};

function start() {
    document.getElementById('info').style.display = 'none';
    document.getElementById('editor').style.display = 'block';
}

async function finish() {
    theme.bg = document.getElementById("input-bg-image").value.trim();
    theme.mask = document.getElementById("input-bg-mask").value.trim();
    theme.maskStrength = document.getElementById("input-bg-mask-strength").value.trim();
    theme.primaryColor = document.getElementById("input-color-primary").value.trim();
    theme.friendsIcon = document.getElementById("input-friends-icon").value.trim();

    theme.small = {};
    theme.small.bg = document.getElementById('input-small-popout-bg').value.trim().length ? `url(${document.getElementById('input-small-popout-bg').value.trim()})` : `url(${theme.bg})`;
    theme.small.mask = document.getElementById('input-small-popout-mask-color').value.trim();
    theme.small.str = document.getElementById('input-small-popout-mask-strength').value.trim();
    theme.small.grad = document.getElementById("input-small-popout-gradient-enabled").checked;
    theme.small.gradp = document.getElementById('input-small-popout-gradient-percentage').value.trim().replace("%", '');
    theme.small.gradc = document.getElementById('input-small-popout-gradient-color').value.trim().replace("#", '').replace(" ", '');

    theme.big = {};
    theme.big.bg = document.getElementById('input-big-popout-bg').value.trim().length ? `url(${document.getElementById('input-big-popout-bg').value.trim()})` : `url(${theme.bg})`;
    theme.big.mask = document.getElementById('input-big-popout-mask-color').value.trim();
    theme.big.str = document.getElementById('input-big-popout-mask-strength').value.trim();
    theme.big.grad = document.getElementById("input-big-popout-gradient-enabled").checked;
    theme.big.gradp = document.getElementById('input-big-popout-gradient-percentage').value.trim().replace("%", '');
    theme.big.gradc = document.getElementById('input-big-popout-gradient-color').value.trim().replace("#", '').replace(" ", '');

    theme.mention = document.getElementById('input-mention-highlight-color').value.trim().replace("#", "").replace(" ", "").length ? document.getElementById('input-mention-highlight-color').value.trim().replace("#", "").replace(" ", "") : theme.primaryColor.replace(/#/gm, '');
    theme.scrollbar = document.getElementById('input-scrollbar-color').value.trim().replace("#", "").replace(" ", "").length ? document.getElementById('input-scrollbar-color').value.trim().replace("#", "").replace(" ", "") : theme.primaryColor.replace(/#/gm, '');
    theme.unread = document.getElementById('input-unread-channel-color').value.trim().replace("#", "").replace(" ", "").length ? document.getElementById('input-unread-channel-color').value.trim().replace("#", "").replace(" ", "") : theme.primaryColor.replace(/#/gm, '');

    showGetName();
}

function conf() {
    document.getElementById('conf-window').style.display = 'none';
    localStorage.setItem('notice-read', 'true');
    download();
}

function showConf() {
    document.getElementById('conf-window').style.display = 'block';
    document.getElementById('input-name').focus();
}

function getName() {
    theme.name = document.getElementById('input-name').value.trim().slice(0, 35);
    if (!theme.name.length) {alert("Your theme must have a name!");}
    else {
        document.getElementById('get-name-window').style.display = 'none';
        if (localStorage.getItem('notice-read') === 'true') {download();}
        else {showConf();}
    }
}

function showGetName() {
    document.getElementById('get-name-window').style.display = 'block';
}

function download() {
    let name = theme.name;
    let mask = theme.mask.split(/\s+/gm);
    let themeFile = template
        .replace(/{{themeName}}/gm, theme.name)
        .replace(/{{main-color}}/gm, `#${theme.primaryColor.replace(/#/gm, '')}`)
        .replace(/{{main-transparency}}/gm, `rgba(${mask[0]}, ${mask[1]}, ${mask[2]}, 0.${theme.maskStrength})`)
        .replace(/{{background-image}}/gm, theme.bg)
        .replace(/{{friends-icon}}/gm, theme.friendsIcon && theme.friendsIcon.length ? theme.friendsIcon : 'https://i.imgur.com/63g6Em8.jpg')
        .replace(/{{trans-main-color}}/gm, `#${theme.primaryColor.replace(/#/gm, '')}5f`)
        .replace(/{{small-popout-bg}}/gm, `${theme.small.grad ? `linear-gradient(to bottom, #00000000 0%, #${theme.small.gradc}${theme.small.gradc.length < 7 ? 'ff' : ''} ${theme.small.gradp}%), ` : ''}${theme.small.bg}`)
        .replace(/{{big-popout-bg}}/gm, `${theme.big.grad ? `linear-gradient(to bottom, #00000000 0%, #${theme.big.gradc}${theme.big.gradc.length < 7 ? 'ff' : ''} ${theme.big.gradp}%), ` : ''}${theme.big.bg}`)
        .replace(/{{small-popout-mask}}/gm,`rgba(${theme.small.mask.split(/\s+/gm).join(",")}, 0.${theme.small.str})`)
        .replace(/{{big-popout-mask}}/gm,`rgba(${theme.big.mask.split(/\s+/gm).join(",")}, 0.${theme.big.str})`)
        .replace(/{{mention-highlight-color}}/gm, theme.mention)
        .replace(/{{scrollbar-color}}/gm, theme.scrollbar)
        .replace(/{{unread-channel-color}}/gm, theme.unread);

    let blob = new Blob([themeFile], {type: 'text/css'});
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, `${name}.theme.css`);
    } else {
        let elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = `${name}.theme.css`;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }

    afterFinish();
}

function afterFinish() {
    document.getElementById('finished-window').style.display = 'block';
}

function reset() {
    document.getElementById("input-bg-image").value = '';
    document.getElementById("input-bg-mask").value = '0 0 0';
    document.getElementById("input-bg-mask-strength").value = '7';
    document.getElementById("input-color-primary").value = '';
    document.getElementById("input-friends-icon").value = '';

    document.getElementById('input-small-popout-bg').value = '';
    document.getElementById('input-small-popout-mask-color').value = '0 0 0';
    document.getElementById('input-small-popout-mask-strength').value = '7';
    document.getElementById("input-small-popout-gradient-enabled").checked = false;
    document.getElementById('input-small-popout-gradient-percentage').value = '100%';
    document.getElementById('input-small-popout-gradient-color').value = '#171717';

    document.getElementById('input-big-popout-bg').value = '';
    document.getElementById('input-big-popout-mask-color').value = '0 0 0';
    document.getElementById('input-big-popout-mask-strength').value = '7';
    document.getElementById("input-big-popout-gradient-enabled").checked = false;
    document.getElementById('input-big-popout-gradient-percentage').value = '100%';
    document.getElementById('input-big-popout-gradient-color').value = '#171717';

    document.getElementById('input-mention-highlight-color').value = '';
    document.getElementById('input-scrollbar-color').value = '';
    document.getElementById('input-unread-channel-color').value = '';

    document.getElementById("input-name").value = '';

    theme = {};

    document.getElementById("finished-window").style.display = 'none';
}

window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {return;}
    if (event.keyCode === 13) {
        if (document.getElementById("get-name-window").style.display === "block") {return getName();}
        if (document.getElementById("finished-window").style.display === "block") {return document.getElementById("finished-window").style.display = 'none';}
        if (document.getElementById("small-popout-preview").style.display === "block") {return document.getElementById("small-popout-preview").style.display = 'none';}
        if (document.getElementById("big-popout-preview").style.display === "block") {return document.getElementById("big-popout-preview").style.display = 'none';}
    }
});

function showSmallPopoutPreview() {
    let popout = document.getElementById('small-popout-preview');
    let bg = document.getElementById('input-small-popout-bg').value;
    let mask = document.getElementById('input-small-popout-mask-color').value;
    let str = document.getElementById('input-small-popout-mask-strength').value;
    let gradp = document.getElementById('input-small-popout-gradient-percentage').value.replace("%", '');
    let gradc = document.getElementById('input-small-popout-gradient-color').value.replace("#", '').replace(" ", '');

    popout.style.background = `${document.getElementById("input-small-popout-gradient-enabled").checked ? `linear-gradient(to bottom, #00000000 0%, #${gradc}${gradc.length < 7 ? 'ff' : ''} ${gradp}%), ` : ''}url(${bg})`;
    popout.style.backgroundSize = 'cover';

    document.getElementById('small-popout-preview-mask').style.background = `rgba(${mask.split(/\s+/gm).join(",")}, 0.${str})`;

    popout.style.display = 'block';
    popout.focus();
}

function showBigPopoutPreview() {
    let popout = document.getElementById('big-popout-preview');
    let bg = document.getElementById('input-big-popout-bg').value;
    let mask = document.getElementById('input-big-popout-mask-color').value;
    let str = document.getElementById('input-big-popout-mask-strength').value;
    let gradp = document.getElementById('input-big-popout-gradient-percentage').value.replace("%", '');
    let gradc = document.getElementById('input-big-popout-gradient-color').value.replace("#", '').replace(" ", '');

    popout.style.background = `${document.getElementById("input-big-popout-gradient-enabled").checked ? `linear-gradient(to bottom, #00000000 0%, #${gradc}${gradc.length < 7 ? 'ff' : ''} ${gradp}%), ` : ''}url(${bg})`;
    popout.style.backgroundSize = 'cover';

    document.getElementById('big-popout-preview-mask').style.background = `rgba(${mask.split(/\s+/gm).join(",")}, 0.${str})`;

    popout.style.display = 'block';
    popout.focus();
}
