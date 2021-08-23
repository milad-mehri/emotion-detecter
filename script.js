let colors = {
    'anger': 'red',
    'love': "pink",
    'joy': '#FFC30B',
    'fear': 'purple',
    'sadness': 'grey',
    'surprise': "blue"
}

let icons = {
    'anger': 'fa-angry',
    'love': "fa-grin-hearts",
    'joy': 'fa-grin-tears',
    'fear': 'fa-ghost',
    'sadness': 'fa-sad-tear',
    'surprise': "fa-surprise"
}


function detect() {
    let text = (document.getElementById("text").value)
    setTimeout(() => {
        if (text === (document.getElementById("text").value)) {
            detectEmotionAndChange(text)
        }
    }, 100);
}

async function detectEmotionAndChange(text) {
    try {
        let url = `https://emotion-classifier.shuhaibmehri.repl.co/api?string=${text}`
        let data = await fetch(url)
        let res = await data.json()
        if (res.emotion) {
            setTheme(res.emotion)
        } else {
            apiError()
        }
    } catch {
        apiError()
    }




}

function setTheme(emotion) {
    document.getElementById('nav').style.background = colors[emotion]
    document.getElementById('result').innerHTML = `This text is out of ${emotion}`;
    document.getElementById('result').style.color = colors[emotion]
    var elements = document.getElementsByClassName('emoji');
    for (var i = 0; i < elements.length; i++) {

        elements[i].classList = 'emoji fa ' + icons[emotion]
        elements[i].style.color = colors[emotion];
    }
}

function apiError() {
    document.getElementById('nav').style.background = colors['anger']

    document.getElementById('result').innerHTML = `The API is down!`;
    document.getElementById('result').style.color = colors['anger']
    var elements = document.getElementsByClassName('emoji');
    for (var i = 0; i < elements.length; i++) {

        elements[i].classList = 'emoji fa ' + icons['anger']
        elements[i].style.color = colors['anger'];
    }
}