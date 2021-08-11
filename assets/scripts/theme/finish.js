export default function finish() {
    this.theme.bg = document.getElementById("input-bg-image").value.trim();
    this.theme.mask = document.getElementById("input-bg-mask").value.trim();
    this.theme.maskStrength = document.getElementById("input-bg-mask-strength").value.trim();
    this.theme.primaryColor = document.getElementById("input-color-primary").value.trim();
    this.theme.friendsIcon = document.getElementById("input-friends-icon").value.trim();

    this.theme.small = {};
    this.theme.small.bg = document.getElementById('input-small-popout-bg').value.trim().length ? `url(${document.getElementById('input-small-popout-bg').value.trim()})` : `url(${this.theme.bg})`;
    this.theme.small.mask = document.getElementById('input-small-popout-mask-color').value.trim();
    this.theme.small.str = document.getElementById('input-small-popout-mask-strength').value.trim();
    this.theme.small.grad = document.getElementById("input-small-popout-gradient-enabled").checked;
    this.theme.small.gradp = document.getElementById('input-small-popout-gradient-percentage').value.trim().replace("%", '');
    this.theme.small.gradc = document.getElementById('input-small-popout-gradient-color').value.trim().replace("#", '').replace(" ", '');

    this.theme.big = {};
    this.theme.big.bg = document.getElementById('input-big-popout-bg').value.trim().length ? `url(${document.getElementById('input-big-popout-bg').value.trim()})` : `url(${this.theme.bg})`;
    this.theme.big.mask = document.getElementById('input-big-popout-mask-color').value.trim();
    this.theme.big.str = document.getElementById('input-big-popout-mask-strength').value.trim();
    this.theme.big.grad = document.getElementById("input-big-popout-gradient-enabled").checked;
    this.theme.big.gradp = document.getElementById('input-big-popout-gradient-percentage').value.trim().replace("%", '');
    this.theme.big.gradc = document.getElementById('input-big-popout-gradient-color').value.trim().replace("#", '').replace(" ", '');

    this.theme.mention = document.getElementById('input-mention-highlight-color').value.trim().replace("#", "").replace(" ", "").length ? document.getElementById('input-mention-highlight-color').value.trim().replace("#", "").replace(" ", "") : this.theme.primaryColor.replace(/#/gm, '');
    this.theme.scrollbar = document.getElementById('input-scrollbar-color').value.trim().replace("#", "").replace(" ", "").length ? document.getElementById('input-scrollbar-color').value.trim().replace("#", "").replace(" ", "") : this.theme.primaryColor.replace(/#/gm, '');
    this.theme.unread = document.getElementById('input-unread-channel-color').value.trim().replace("#", "").replace(" ", "").length ? document.getElementById('input-unread-channel-color').value.trim().replace("#", "").replace(" ", "") : this.theme.primaryColor.replace(/#/gm, '');

    this.gettingName = true;
};
