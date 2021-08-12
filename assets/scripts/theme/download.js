const columns = [72, 126, 184, 242, 304];

const template = `/**
* @name {{themeName}}
* @author puckzxz#2080
* @version 3.2
* @description A custom theme made by WubzyGD#8766's theme generator at https://wubzy.xyz/util/theme based on Puckzxz's NotAnotherAnimeTheme
* @invite FdZhbjY
* @source https://github.com/puckzxz/NotAnotherAnimeTheme
* @updateUrl https://raw.githubusercontent.com/puckzxz/NotAnotherAnimeTheme/master/NotAnotherAnimeTheme.theme.css
*/

@import url(https://puckzxz.github.io/NotAnotherAnimeTheme/build/v3/naat.v3.css);{{horizontal-servers}}

/* 
 * =========================================
 * Created using Wubzy.xyz's theme generator
 * Questions about the theme or generator? Bugs or suggestions?
 * Join NotAnotherAnimeTheme's support server at https://discord.gg/FdZhbjY
 * Feedback is always welcome!
 * 
 * Hope you like your theme! ^^
 * =========================================
 */

/*Generated at {{time}} -> Generator version {{version}}*/

:root {

  /*[MAIN THEME SETTINGS]*/
  /*Some important settings that will change the majority of your client.*/
  --theme-background-image: url({{background-image}}); /*The main image over your whole Discord client*/
  --main-theme-color: {{main-color}}; /*The default theme color*/
  --theme-transparency: {{main-transparency}}; /*The mask that applies over the background*/
  --home-icon-image: url({{friends-icon}}); /*Your friends icon*/
  --home-icon-image-position: center center;
  --home-icon-image-zoom: 100%;

  /*
    Server Listing Width
    Single Column:  72px
    Double Column:  126px
    Triple Column:  184px
    Quad Column:    242px
    Pentad Column:  304px
  */
  /*[SERVER LISTING]*/
  /*The number of columns in your server listing.*/
  --server-listing-width: {{server-columns}}px;

  /*[FONT SIZE]*/
  --font-size: 100%;

  /*[MENTION COLORS]*/
  --mention-color: #{{mention-highlight-color}}4b; /*The color messages that mention you will highlight in*/
  --mention-sider: #{{mention-highlight-color}}7f; /*The small bar on the left of a message that mentions you*/
  --mention-hover-color: #{{mention-highlight-color}}5f; /*The color a mention highlight changes to when you hover over it*/

  --category-hover-color: {{trans-main-color}}; /*Color that categories change to when hovered over*/

  --unread-server-animation: rainbow; /*The color animation that appears over server icons with unreads. Best to leave this be.*/

  /*[VIDEO PLAYER]*/
  --video-screen-button-background-color: rgba(200, 200, 200, 0.2);
  --video-screen-button-foreground-color: white;
  --video-screen-button-background-hovor-color: rgba(200, 200, 200, 0.4);
  --video-screen-button-foreground-hovor-color: white;

  --member-listing-role-color: var(--main-theme-color);

  /*[USER POPOUTS]*/
  /*The settings for the popouts when you click on a user in the members list (small popout) and when you click the "profile" button on a user (big popout)*/
  /*Similar to main theme settings.*/
  --small-user-popout-background-image: {{small-popout-bg}};
  --small-user-popout-background-transparency: {{small-popout-mask}};
  --small-user-popout-background-image-position: center;

  --big-user-popout-background-image: {{big-popout-bg}};
  --big-user-popout-background-transparency: {{big-popout-mask}};
  --big-user-popout-background-image-position: center;

  /*[CODE BLOCKS]*/
  --code-markup-background-color: rgba(0, 0, 0, 0.6); /*Code blocks background color*/
  --code-markup-border: 1px solid transparent; /*An optional border around code blocks (defaults to transparent - or invisible)*/

  --message-box-transparency: rgba(0, 0, 0, 0.6); /*The message box at the bottom. Change the first three values to edit its color, and the last to edit its transparency*/

  --embed-background-transparency: rgba(0, 0, 0, 0.6);

  --message-hover-buttons-background: rgba(200, 200, 200, 0.1); /*The small box that appears around the edit, pin, delete, etc icons when you hover over a message*/

  /*[ADVANCED SETTINGS]*/
  /*This stuff is more on the advanced/nitty-gritty side. Most of the names are pretty self-explanatory.*/

  --context-menu-transparency: rgba(15, 15, 15, 0.8);

  --add-discover-icon-transparency: rgba(200, 200, 200, 0.15);
  --add-discover-icon-color: #43b581;

  --channel-limit-count-color: var(--channels-default);
  --channel-limit-background-left: rgba(200, 200, 200, 0.1);
  --channel-limit-background-right: rgba(200, 200, 200, 0.2);

  --scrollbar-color: #{{scrollbar-color}}89;

  --unread-message-divider-color: #f04747;
  --unread-message-divider-font-color: #fff;

  --new-messages-bar-background-color: var(--main-theme-color); /*The bar atop the screen saying "x new messages" when you're in a channel with unreads*/
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
  --reaction-emoji-hover-border-color: rgba(255, 255, 255, 0.2);{{horizontal-servers-2}}
}

/*Changes the way popout background images apply to account for any size mismatching.*/
.root-3QyAh1 {background-size: cover;} /*Large popout*/
.userPopout-xaxa6l {background-size: cover;} /*Small popout*/

/*Make the Channel Tabs plugin background invisible so it's flush with your theme's background*/
.channelTabs-tabContainer, .channelTabs-container {background: 0 0!important; background-color: initial !important;}`;

export default function download() {
    let name = this.theme.name;
    let mask = this.theme.mask.split(/\s+/gm);
    let themeFile = template
        .replace(/{{themeName}}/gm, this.theme.name)
        .replace(/{{main-color}}/gm, `#${this.theme.primaryColor.replace(/#/gm, '')}`)
        .replace(/{{main-transparency}}/gm, `rgba(${mask[0]}, ${mask[1]}, ${mask[2]}, 0.${this.theme.maskStrength})`)
        .replace(/{{background-image}}/gm, this.theme.bg)
        .replace(/{{friends-icon}}/gm, this.theme.friendsIcon && this.theme.friendsIcon.length ? this.theme.friendsIcon : 'https://i.imgur.com/63g6Em8.jpg')
        .replace(/{{trans-main-color}}/gm, `#${this.theme.primaryColor.replace(/#/gm, '')}5f`)
        .replace(/{{small-popout-bg}}/gm, `${this.theme.small.grad ? `linear-gradient(to bottom, #00000000 0%, #${this.theme.small.gradc}${this.theme.small.gradc.length < 7 ? 'ff' : ''} ${this.theme.small.gradp}%), ` : ''}${this.theme.small.bg}`)
        .replace(/{{big-popout-bg}}/gm, `${this.theme.big.grad ? `linear-gradient(to bottom, #00000000 0%, #${this.theme.big.gradc}${this.theme.big.gradc.length < 7 ? 'ff' : ''} ${this.theme.big.gradp}%), ` : ''}${this.theme.big.bg}`)
        .replace(/{{small-popout-mask}}/gm,`rgba(${this.theme.small.mask.split(/\s+/gm).join(",")}, 0.${this.theme.small.str})`)
        .replace(/{{big-popout-mask}}/gm,`rgba(${this.theme.big.mask.split(/\s+/gm).join(",")}, 0.${this.theme.big.str})`)
        .replace(/{{mention-highlight-color}}/gm, this.theme.mention)
        .replace(/{{scrollbar-color}}/gm, this.theme.scrollbar)
        .replace(/{{unread-channel-color}}/gm, this.theme.unread)
        .replace(/{{server-columns}}/gm, `${columns[this.theme.columns - 1]}`)
        .replace(/{{horizontal-servers}}/gm, this.theme.horizontal ? '\n@import url(https://g2ningyo.github.io/HorizontalNAAT/build/HNAAT.css);' : '')
        .replace(/{{horizontal-servers-2}}/gm, this.theme.horizontal ? "\n\n\n  /*[HORIZONTAL SERVER LISTING]*/\n  /*Here's some CSS from Ningyo's horizontal server listing to change its settings.*/\n\n  /*==Server Listing Size, Spacing and Container==*/\n  /*SERVER LIST*/ --server-size: var(--Top-server-icon-size, var(--Top-size, 46px)) !important; /*Change only the pixels if wanted*/\n  /*SERVER LIST*/ --server-spacing: var(--Top-server-spacing, var(--Top-spacing, 10px))  !important; /*Change only the pixels if wanted*/\n  /*SERVER LIST*/ --server-container: calc(var(--server-size) + 20px)  !important; /*Please dont change this if you dont understand CSS*/" : '')
        .replace(/{{time}}/gm, new Date().toUTCString())
        .replace(/{{version}}/gm, this.version);

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

    this.afterFinish();
};
