function startTimer(duration, display){
    var timer = duration, minutos, segundos;
    var resto, resto1;

    setInterval(function (){
        dias = parseInt(timer/86400);
        resto = parseInt(timer%86400);
        horas = parseInt(resto/3600);
        resto1 = parseInt(resto%3600);
        minutos = parseInt(resto1/ 60);
        segundos = parseInt(resto1 % 60);
        //alert(timer +' '+dias +' '+horas + ' '+ minutos+ ' '+segundos);
        	
        dias = dias < 10 ? '0'+dias : dias;
        horas = horas < 10 ? '0'+horas : horas;
        minutos = minutos < 10 ? '0'+minutos : minutos;
        segundos = segundos < 10 ? '0'+segundos : segundos;

        display[3].textContent = segundos;
        display[2].textContent = minutos;
        display[1].textContent = horas;
        display[0].textContent = dias;
        if (--timer < 0){
            timer = duration
        }
    },1000)
}
function letsGo(){
    if (document.getElementById("entradadia").value == ''){
        alert('Digite o numero de dias');
        return null;
    }
    else if (document.getElementById("entradahora").value == ''){
        alert('Digite o número de horas');
        return null;
    }
    else if (document.getElementById("entradaminuto").value == ''){
        alert('Digite o número de minutos');
        return null;
    }
    else if (document.getElementById("entradasegundo").value == ''){
        alert('Digite o número de segundos');
        return null;
    }
    var segundos = parseInt(document.getElementById("entradasegundo").value);
    var minutos = parseInt(document.getElementById("entradaminuto").value);
    var horas = parseInt(document.getElementById("entradahora").value);
    var dias = parseInt(document.getElementById("entradadia").value);
    var total = parseInt(segundos + minutos*60 + horas*3600 + dias*86400);
    var display = document.getElementsByClassName("valor");
    rudini();
    startTimer(total, display);
};
function rudini(){
    document.getElementsByClassName("inputs")[0].disabled = true;
    document.getElementsByClassName("inputs")[1].disabled = true;
    document.getElementsByClassName("inputs")[2].disabled = true;
    document.getElementsByClassName("inputs")[3].disabled = true;
    document.getElementsByClassName("inputs")[4].disabled = true;
    document.getElementById("formulario").style.opacity = '0%';
    document.getElementById("corpo").style.opacity = '100%';
}

/*
alert("1231");
function rodartemporizador(display, tempo) {
    var minutos = parseInt(tempo/60);
    alert("ola"+minutos);
    var timer = tempo, segundos, minutos;
    setInterval(function (){
        minutos = parseInt(tempo % 60);
        segundos = parseInt()
        tempo= tempo < 0 ? '0'+tempo : tempo;
        minutos = minutos < 0 ? '0'+tempo : tempo;
        display.textContent = segundos;
        display[3].innerHTML = minutos;
        if (--timer < 0){
            timer = tempo;
        }
    },1000);
}

window.onload = function(){
    var timer = 100;
    var display = document.getElementsByClassName("hr1");
    rodartemporizador(display,timer);
}*/