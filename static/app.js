// Pablo Bravo
function cambiop1ap2(){
    document.getElementById('pestanaDietas').classList.add('oculto');
    document.getElementById('pestanaForm').classList.remove('oculto');
}
function cambiop2ap1(){
    document.getElementById('pestanaForm').classList.add('oculto');
    document.getElementById('pestanaDietas').classList.remove('oculto');
}
function enviarAlumno(){
    document.getElementById('pestanaForm').classList.add('oculto');
    document.getElementById('pestanaDietas').classList.remove('oculto');
    alert("Datos guardados correctamente")
}