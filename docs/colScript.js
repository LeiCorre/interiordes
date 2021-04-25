function viewPic () {
    let view = document.getElementsByClassName('view')[0]
    let x = event.target.getAttribute('src')
    let xwidth = event.target.clientWidth;
    let xheight = event.target.clientHeight;
    view.setAttribute('style', 'background-image: url("' + x + '"); background-repeat: no-repeat;') 
}