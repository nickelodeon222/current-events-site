var div = document.getElementsByTagName('div')[0];

console.log(div.children)
let no = 1;
let index = 0;
for (let el of div.children) {
    console.log(el)
    if (el.tagName !== "br" && no != 1) {
    window.addEventListener('scroll', () => {
        var rect = el.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        let isVisible = !(rect.bottom < 0 || rect.top - viewHeight >= 0);

        if (isVisible) {
            el.className = "visible"
        } else {
            if (el.className === "visible") el.className = 'fadeout'
        }
    }); 
    }
    no++;
    index++;
    
}

