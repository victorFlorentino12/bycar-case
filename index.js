let card = document.querySelector('.card')
let icon1 = document.querySelector('.icon-1')
let icon2 = document.querySelector('.icon-2')

function Honda(){
    card.src='img/card2.svg'
    icon1.setAttribute('onclick',"moto2()")
    icon2.setAttribute('onclick',"moto2()")
}
function moto2(){
    card.src='img/card .svg'
    icon1.setAttribute('onclick',"Honda()")
    icon2.setAttribute('onclick',"Honda()")
}