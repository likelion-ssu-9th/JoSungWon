const toogleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

const moreIcons = document.querySelector('navbar_moreIcons');
const snsIcons = document.querySelector('navbar_snsIcons');

sns.addEventListener('click', () => {
    snsIcons.classList.toggle('active');
})

const Searching = Search.prototype;
function Search(){
    this.keyword = document.querySelector('input[name="search"]');
    this.engine = document.querySelector('.SelectSearch');
    this.button = document.querySelector('.search-button');
    this.form = document.querySelector('.search');
}