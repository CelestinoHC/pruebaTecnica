
// const montoDeseado = document.getElementById('montoDeseado')
// const tasaAnual = document.getElementById('tasaAnual')
// const btn12Months = document.getElementById('btn12Months')
// const btn24Months = document.getElementById('btn24Months')
// const btn36Months = document.getElementById('btn36Months')
// const pagoMensual = document.getElementById('pagoMensual')
// const comisionApertura = document.getElementById('comisionApertura')
// const montoNetoDepositado = document.getElementById('montoNetoDepositado')
// const totalPagado = document.getElementById('totalPagado')
// const cat = document.getElementById('cat')

$( document ).ready(function() {
    $('#btn12Months').addClass('selected');
    const newPagoMensual = (Number(rangemontoDeseado.value) / 12) + (Number(rangetasaAnual.value))
    const newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 12) - 348.00
    const newtotalPagado = Number(rangemontoDeseado.value) + 348.00 + Number(rangetasaAnual.value)
    $("#pagoMensual").val("$" + newPagoMensual.toFixed(2))
    $("#comisionApertura").val("$" + 348.00.toFixed(2))
    $("#montoNetoDepositado").val("$" + newMontoNetoDepositado.toFixed(2))
    $("#totalPagado").val("$" + newtotalPagado.toFixed(2))
    $("#cat").val(15.71 + "%")
});

const
    rangemontoDeseado = document.getElementById('montoDeseado'),
    rangeVmontoDeseado = document.getElementById('rangeVmontoDeseado'),
    setValuemontoDeseado = () => {
        const
            newValuemontoDeseado = Number((rangemontoDeseado.value - rangemontoDeseado.min) * 100 / (rangemontoDeseado.max - rangemontoDeseado.min)),
            newPositionmontoDeseado = 45 - (newValuemontoDeseado * 0.42);
        rangeVmontoDeseado.innerHTML = `<span>${rangemontoDeseado.value}</span>`;
        rangeVmontoDeseado.style.left = `calc(${newValuemontoDeseado}% + (${newPositionmontoDeseado}px))`;
    };
document.addEventListener("DOMContentLoaded", setValuemontoDeseado);
rangemontoDeseado.addEventListener('input', setValuemontoDeseado);

const
    rangetasaAnual = document.getElementById('tasaAnual'),
    rangeVtasaAnual = document.getElementById('rangeVtasaAnual'),
    setValuetasaAnual = () => {
        const
            newValuetasaAnual = Number((rangetasaAnual.value - rangetasaAnual.min) * 100 / (rangetasaAnual.max - rangetasaAnual.min)),
            newPositiontasaAnual = 45 - (newValuetasaAnual * 0.42);
        rangeVtasaAnual.innerHTML = `<span>${rangetasaAnual.value}</span>`;
        rangeVtasaAnual.style.left = `calc(${newValuetasaAnual}% + (${newPositiontasaAnual}px))`;
    };
document.addEventListener("DOMContentLoaded", setValuetasaAnual);
rangetasaAnual.addEventListener('input', setValuetasaAnual);

$("#montoDeseado").on('change', function () {
    // console.log(tasaAnual.value)
    let newPagoMensual = 0
    let newMontoNetoDepositado = 0
    if ($("#btn12Months").hasClass("selected")) {
        newPagoMensual = (Number(rangemontoDeseado.value) / 12) + (Number(rangetasaAnual.value))
        newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 12) - 348.00
    }
    if ($("#btn24Months").hasClass("selected")) {
        newPagoMensual = (Number(rangemontoDeseado.value) / 24) + (Number(rangetasaAnual.value))
        newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 24) - 348.00
    }
    if ($("#btn36Months").hasClass("selected")) {
        newPagoMensual = (Number(rangemontoDeseado.value) / 36) + (Number(rangetasaAnual.value))
        newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 36) - 348.00
    }
    const newtotalPagado = Number(rangemontoDeseado.value) + 348.00 + Number(rangetasaAnual.value)
    $("#pagoMensual").val("$" + newPagoMensual.toFixed(2))
    $("#comisionApertura").val("$" + 348.00.toFixed(2))
    $("#montoNetoDepositado").val("$" + newMontoNetoDepositado.toFixed(2))
    $("#totalPagado").val("$" + newtotalPagado.toFixed(2))
    $("#cat").val(15.71 + "%")
});

$("#tasaAnual").on('change', function () {
    // console.log(tasaAnual.value)
    let newPagoMensual = 0
    let newMontoNetoDepositado = 0
    if ($("#btn12Months").hasClass("selected")) {
        newPagoMensual = (Number(rangemontoDeseado.value) / 12) + (Number(rangetasaAnual.value))
        newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 12) - 348.00
    }
    if ($("#btn24Months").hasClass("selected")) {
        newPagoMensual = (Number(rangemontoDeseado.value) / 24) + (Number(rangetasaAnual.value))
        newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 24) - 348.00
    }
    if ($("#btn36Months").hasClass("selected")) {
        newPagoMensual = (Number(rangemontoDeseado.value) / 36) + (Number(rangetasaAnual.value))
        newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 36) - 348.00
    }
    const newtotalPagado = Number(rangemontoDeseado.value) + 348.00 + Number(rangetasaAnual.value)
    $("#pagoMensual").val("$" + newPagoMensual.toFixed(2))
    $("#comisionApertura").val("$" + 348.00.toFixed(2))
    $("#montoNetoDepositado").val("$" + newMontoNetoDepositado.toFixed(2))
    $("#totalPagado").val("$" + newtotalPagado.toFixed(2))
    $("#cat").val(15.71 + "%")
});

$("#btn12Months").on('click', function () {
    // console.log(tasaAnual.value)
    $('button').removeClass('selected');
    $(this).addClass('selected');
    const newPagoMensual = (Number(rangemontoDeseado.value) / 12) + (Number(rangetasaAnual.value))
    const newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 12) - 348.00
    const newtotalPagado = Number(rangemontoDeseado.value) + 348.00 + Number(rangetasaAnual.value)
    $("#pagoMensual").val("$" + newPagoMensual.toFixed(2))
    $("#comisionApertura").val("$" + 348.00.toFixed(2))
    $("#montoNetoDepositado").val("$" + newMontoNetoDepositado.toFixed(2))
    $("#totalPagado").val("$" + newtotalPagado.toFixed(2))
    $("#cat").val(15.71 + "%")
});

$("#btn24Months").on('click', function () {
    // console.log(tasaAnual.value)
    $('button').removeClass('selected');
    $(this).addClass('selected');
    const newPagoMensual = (Number(rangemontoDeseado.value) / 24) + (Number(rangetasaAnual.value))
    const newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 24) - 348.00
    const newtotalPagado = Number(rangemontoDeseado.value) + 348.00 + Number(rangetasaAnual.value)
    $("#pagoMensual").val("$" + newPagoMensual.toFixed(2))
    $("#comisionApertura").val("$" + 348.00.toFixed(2))
    $("#montoNetoDepositado").val("$" + newMontoNetoDepositado.toFixed(2))
    $("#totalPagado").val("$" + newtotalPagado.toFixed(2))
    $("#cat").val(15.71 + "%")
});

$("#btn36Months").on('click', function () {
    // console.log(tasaAnual.value)
    $('button').removeClass('selected');
    $(this).addClass('selected');
    const newPagoMensual = (Number(rangemontoDeseado.value) / 36) + (Number(rangetasaAnual.value))
    const newMontoNetoDepositado = (Number(rangemontoDeseado.value) * 36) - 348.00
    const newtotalPagado = Number(rangemontoDeseado.value) + 348.00 + Number(rangetasaAnual.value)
    $("#pagoMensual").val("$" + newPagoMensual.toFixed(2))
    $("#comisionApertura").val("$" + 348.00.toFixed(2))
    $("#montoNetoDepositado").val("$" + newMontoNetoDepositado.toFixed(2))
    $("#totalPagado").val("$" + newtotalPagado.toFixed(2))
    $("#cat").val(15.71 + "%")
});

