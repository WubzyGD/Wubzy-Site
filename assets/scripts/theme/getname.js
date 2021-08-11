export default function getNameAfter() {
    this.name = document.getElementById('input-name').value.trim().slice(0, 35);
    if (!this.name.length) {alert("Your theme must have a name!");}
    else {
        this.$emit('name-got', this.name);
        if (localStorage.getItem('notice-read') === 'true') {this.download();}
        else {this.showConf();}
    }
};
