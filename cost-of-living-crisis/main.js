var soundBuffer;

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var context = new AudioContext();

function loadSound(url) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.responseType = 'arraybuffer';

    req.onload = function () {
        context.decodeAudioData(req.response, function(buffer) {
            soundBuffer = buffer
        }, function() {
            alert("audio broke!")
        })
    }

    req.send()
}

function playSound(buffer) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination)
    source.start(0)
}



loadSound("YEAH.mp3")

var list = document.getElementsByTagName("ul")[0];

var listChildren = list.children;

for (var i=0; i<listChildren.length; i++) {
    var element = listChildren[i].children[0];

    if (element.tagName === "P") {
        element.onclick = function() {
            playSound(soundBuffer);
        }
    }
}

var ACollection = document.getElementsByTagName('a');

for (var i=0; i<ACollection.length; i++) {
    var a = ACollection[i];
    a.onclick = function (ev) {
        ev.preventDefault();
        window.open(this.href)
    } 
}


document.getElementById("author").onclick = function() {
    playSound(soundBuffer);
}