function ej1Potencia() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let inpuResult = document.getElementById("result");
    let operacion = n1 ** n2;
    let error = false;
    
    if (isNaN(n1) || n1 === null) {
        alert("Debe de ingresar un numero valido en el input 1");
        error = true;
    } else if (isNaN(n2) || n2 === null) {
        alert("Debe de ingresar un numero valido en el input 2");
        error = true;
    }

    if (!error) {
        inpuResult.value = operacion;
    }
}

