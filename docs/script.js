function linksFormat () {
    let link1 = document.getElementById('link1');
    let link2 = document.getElementById('link2');
    let link3 = document.getElementById('link3');
    let link4 = document.getElementById('link4');
    link1.setAttribute('class', 'visibleNava');
    link2.setAttribute('class', 'visibleNava');
    link3.setAttribute('class', 'visibleNava');
    link4.setAttribute('class', 'visibleNava');
}

function linksUnformat () {
    let link1 = document.getElementById('link1');
    let link2 = document.getElementById('link2');
    let link3 = document.getElementById('link3');
    let link4 = document.getElementById('link4');
    link1.removeAttribute('class', 'visibleNava');
    link2.removeAttribute('class', 'visibleNava');
    link3.removeAttribute('class', 'visibleNava');
    link4.removeAttribute('class', 'visibleNava');
}


function closeMenu () {
    let menu = document.getElementsByTagName('nav')[0];
    let close = document.getElementById('close');
    let hamburger = document.getElementById('hamburger');
    let body = document.getElementsByTagName('body')[0]
    let h6 = document.getElementsByTagName('h6')[0];
    body.removeAttribute('class', 'overflow')
    menu.removeAttribute('class', 'menu-visible');
    hamburger.removeAttribute('class', 'hidden');
    close.removeAttribute('class', 'visible');
    linksUnformat();
}

function openMenu () {
    let menu = document.getElementsByTagName('nav')[0];
    let close = document.getElementById('close');
    let hamburger = document.getElementById('hamburger');
    let body = document.getElementsByTagName('body')[0]
    let h6 = document.getElementsByTagName('h6')[0];
    body.setAttribute('class', 'overflow')
    menu.setAttribute('class', 'menu-visible');
    hamburger.setAttribute('class', 'hidden');
    close.setAttribute('class', 'visible');
    linksFormat();

}

