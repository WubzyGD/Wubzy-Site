let template = `/**
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
  --mention-color: {{main-color}}4b;
  --mention-sider: {{main-color}}4b;
  --mention-hover-color: {{trans-main-color}};

  --category-hover-color: {{trans-main-color}};

  --unread-server-animation: rainbow;

  --video-screen-button-background-color: rgba(200, 200, 200, 0.2);
  --video-screen-button-foreground-color: white;
  --video-screen-button-background-hovor-color: rgba(200, 200, 200, 0.4);
  --video-screen-button-foreground-hovor-color: white;

  --member-listing-role-color: var(--main-theme-color);

  --small-user-popout-background-image: var(--theme-background-image);
  --small-user-popout-background-transparency: rgba(0, 0, 0, 0.6);
  --small-user-popout-background-image-position: center;

  --big-user-popout-background-image: var(--theme-background-image);
  --big-user-popout-background-transparency: rgba(0, 0, 0, 0.6);
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

  --scrollbar-color: {{main-color}}39;

  --unread-message-divider-color: #f04747;
  --unread-message-divider-font-color: #fff;

  --new-messages-bar-background-color: #7289da;
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
  --unread-text-channel-color: var(--main-theme-color);
  --unread-text-channel-bubble-color: var(--main-theme-color);

  --folder-background-color: #2f3136;
  --expanded-folder-background-color: transparent;

  --reaction-emoji-background-color: rgba(0, 0, 0, 0);
  --reaction-emoji-border-color: 1px solid transparent;
  --reaction-emoji-hover-background-color: rgba(255, 255, 255, 0.1);
  --reaction-emoji-hover-border-color: rgba(255, 255, 255, 0.2);
}`;

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
        .replace(/{{trans-main-color}}/gm, `#${theme.primaryColor.replace(/#/gm, '')}5f`);

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
    document.getElementById("input-bg-mask").value = '';
    document.getElementById("input-bg-mask-strength").value = '';
    document.getElementById("input-color-primary").value = '';
    document.getElementById("input-friends-icon").value = '';
    document.getElementById("input-name").value = '';

    theme = {};

    document.getElementById("finished-window").style.display = 'none';
}

window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {return;}
    if (event.keyCode === 13 && document.getElementById("get-name-window").style.display === "block") {return getName();}
});