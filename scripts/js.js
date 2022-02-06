var myinterval;
function startTimer(duration, display){
    var timer = duration;
    var resto, resto1;
    myinterval = setInterval(function (){
        dias = parseInt(timer/86400);
        resto = parseInt(timer%86400);
        horas = parseInt(resto/3600);
        resto1 = parseInt(resto%3600);
        minutos = parseInt(resto1/ 60);
        segundos = parseInt(resto1 % 60);
 	
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
        return null;
    }
    else if (document.getElementById("entradahora").value == ''){
        return null;
    }
    else if (document.getElementById("entradaminuto").value == ''){
        return null;
    }
    else if (document.getElementById("entradasegundo").value == ''){
        return null;
    }
    var segundos = parseInt(document.getElementById("entradasegundo").value);
    var minutos = parseInt(document.getElementById("entradaminuto").value);
    var horas = parseInt(document.getElementById("entradahora").value);
    var dias = parseInt(document.getElementById("entradadia").value);
    var total = parseInt(segundos + minutos*60 + horas*3600 + dias*86400);
    var display = document.getElementsByClassName("valor");
    rudini();
    clearInterval(myinterval);
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
function aparecer(){
    document.getElementsByClassName("inputs")[0].disabled = false;
    document.getElementsByClassName("inputs")[1].disabled = false;
    document.getElementsByClassName("inputs")[2].disabled = false;
    document.getElementsByClassName("inputs")[3].disabled = false;
    document.getElementsByClassName("inputs")[4].disabled = false;
    document.getElementById("formulario").style.opacity = '100%';
    document.getElementById("corpo").style.opacity = '5%';
}