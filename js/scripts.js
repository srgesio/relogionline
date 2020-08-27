function carregar() {
    var msg = document.querySelector('div#msg')
    var bom = document.querySelector('h1#bom')
    var img = './css/img/dia.jpg'
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()
    // var hora = 15
    msg.innerHTML = `<h2>${hora}:${min}</h2>`
    if (hora >= 0 && hora < 12) {
        img = './css/img/dia.jpg'
        bom.innerHTML = `Bom dia!`
    } else if (hora > 12 && hora <= 18) {
        img = './css/img/tarde.jpg'
        bom.innerHTML = `Boa tarde!`
    } else {
        img = './css/img/noite.jpg'
        bom.innerHTML = `Boa noite!`
    }
    document.body.style.backgroundImage = `url(${img})`
    // document.body.style.backgroundSize = `auto`
}