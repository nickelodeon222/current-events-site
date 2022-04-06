function nextPage() {
    const url = location.pathname;
    let page = url.split("/")[2]

    if (page == '')
        page = 2;
    
    else if (page != 10)
    {
        page++;
    }
    else {
        return
    }
        
    
    location.pathname = 'america-queerphobia/' + page;
}

function prevPage() {
    const url = location.pathname;
    let page = url.split("/")[2]
    if (page == 2) {
        location.pathname = 'america-queerphobia/';
    }
    else if (page == '') {
        return
    }
    else {
        location.pathname = 'america-queerphobia/' + (page - 1);
    }
}

window.addEventListener("keydown", ev => {
    if (ev.code === 'ArrowRight')
        nextPage()
    if (ev.code === 'ArrowLeft')
        prevPage()
});

let touchX;
let oldTouchX=0;
window.addEventListener("touchstart", ev => {
    oldTouchX = ev.changedTouches[0].screenX;

})

window.addEventListener("touchend", ev => {
    touchX = ev.changedTouches[0].screenX;
    if (touchX < oldTouchX) {
        nextPage()
    }
    else if (touchX > oldTouchX) {
        prevPage()
    }
})