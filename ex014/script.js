//var agora = new Date()
//var hora = agora.getHours()
var hora = 4
var texto = document.querySelector('div#texto')
var img = document.querySelector('img#img')
var sec = document.querySelector('div#box')

if(hora >= 5 && hora < 12){
    img.src = "https://images.pexels.com/photos/28217986/pexels-photo-28217986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    texto.innerText = "BOM DIA!"   
} else if(hora >= 12 && hora < 18){
    img.src = "https://images.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg?auto=compress&cs=tinysrgb&w=600"
    texto.innerText = "BOA TARDE!"  
    box.style.background = "rgb(246, 181, 142)"
    document.body.style.backgroundColor = "rgb(200, 131, 116)"
} else if(hora >= 18 && hora < 24){
    img.src = "https://images.pexels.com/photos/376533/pexels-photo-376533.jpeg?auto=compress&cs=tinysrgb&w=600"
    texto.innerText = "BOA NOITE!" 
    box.style.background = "rgb(44, 44, 44)"
    texto.style.color = "white"
    document.body.style.backgroundColor = "rgb(104, 104, 104)"
    document.body.style.color = "white"
} else if(hora >= 1 && hora < 5){
    img.src = "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600"
    texto.innerText = "BOA MADRUGADA!"  
    box.style.background = "rgb(41, 0, 80)"
    texto.style.color = "white"
    document.body.style.backgroundColor = "rgb(69, 0, 134)"
    document.body.style.color = "white"
}  