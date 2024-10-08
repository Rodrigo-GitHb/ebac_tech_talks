AOS.init();

const dataDoEvento = new Date("Oct 29, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const dias = Math.floor(distanciaAteOEvento / diaEmMs);
    const horas = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutos = Math.floor((distanciaAteOEvento %  horaEmMs) / minutosEmMs);
    const segundos = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "O evento já passou!";
    }
}, 1000)