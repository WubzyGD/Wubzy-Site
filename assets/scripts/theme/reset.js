export default function reset() {
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
    document.getElementById('input-server-listing-columns').value = '';
    document.getElementById('input-server-listing-horizontal-enabled').checked = false;

    document.getElementById("input-name").value = '';

    this.theme = {};
}
