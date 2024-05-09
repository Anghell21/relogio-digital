
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


const mes = document.getElementById("mes")
const dia = document.getElementById("dia")
const ano = document.getElementById("ano")

const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segudos = document.getElementById("segundos")

const relogio = setInterval(function Time(){
    let dateToday = new Date()

    let m = dateToday.getMonth()
    let d = dateToday.getDate()
    let a = dateToday.getFullYear()


    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getUTCSeconds()
    
   

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    
    horas.textContent = checkTime(hr)
    minutos.textContent = checkTime(min)
    segudos.textContent  = checkTime(s)
    mes.textContent = meses[m]
    dia.textContent = checkTime(d)
    ano.textContent = a

})