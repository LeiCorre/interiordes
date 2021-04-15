


function closeMenu () {
    let menu = document.getElementsByTagName('nav')[0];
    let close = document.getElementById('close');
    let hamburger = document.getElementById('hamburger');
    let h6 = document.getElementsByTagName('h6')[0];
    menu.removeAttribute('class', 'opened');
    menu.setAttribute('class', 'closed')
    menu.removeAttribute('style', 'height:' + screen.height + 'px');
    menu.removeAttribute('class', 'widthmenu');
    h6.removeAttribute('class', 'iconInvisible');
    close.removeAttribute('class', 'iconVisible')
    close.setAttribute('class', 'iconInvisible')
    hamburger.removeAttribute('class', 'iconInvisible')
    hamburger.setAttribute('class', 'iconVisible')
    
}

function openMenu () {
    let menu = document.getElementsByTagName('nav')[0];
    let close = document.getElementById('close');
    let hamburger = document.getElementById('hamburger');
    let h6 = document.getElementsByTagName('h6')[0];
    menu.removeAttribute('class', 'closed');
    menu.setAttribute('class', 'opened');
    menu.setAttribute('style', 'height:' + screen.height + 'px');
    menu.setAttribute('class', 'widthmenu');
    h6.setAttribute('class', 'iconInvisible');
    hamburger.removeAttribute('class', 'iconVisible')
    hamburger.setAttribute('class', 'iconInvisible')
    close.removeAttribute('class', 'iconInvisible')
    close.setAttribute('class', 'iconVisible')
}

function partialOpen() {
    let menu = document.getElementsByTagName('nav')[0];
    menu.removeAttribute('class', 'closed');
    menu.setAttribute('class', 'opened');
}