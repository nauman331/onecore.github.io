var icon = document.querySelector('.nav-icon');
var menu = document.querySelector('.nav-menu');
icon.addEventListener('click', function () {
    if (menu.style.marginLeft = "-25rem") {
        menu.style.marginLeft = "0rem";
    }
})
window.onscroll = () => {
    menu.style.marginLeft = "-25rem";

}
