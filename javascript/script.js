const toggle = document.getElementById('toggle');
const iconshowmenu = document.getElementById('iconmenu');
const iconclosemenu = document.getElementById('iconclose');
const menus = document.getElementById('menu');



toggle.addEventListener('click', () =>{
    menus.classList.toggle('show');
    iconclosemenu.classList.toggle('close')
    iconshowmenu.classList.toggle('close');

})
