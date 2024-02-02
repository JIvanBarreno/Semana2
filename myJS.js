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

function ej2Conversion() {
    let centigrados = parseInt(document.getElementById("grados").value);
    let inpuResult = document.getElementById("ej2-result");
    let error = false;
    let fahrenheit = 0;

    if (isNaN(centigrados) || centigrados === null) {
        alert("Debe de ingresar un numero valido en el input 1");
        error = true;
    }

    if (!error) {
        fahrenheit = (9/5 * centigrados) + 32;
        inpuResult.value = fahrenheit;
    }
}

var namesList = [];

function ej3List() {
    let inputName = document.getElementById("ej3-name");
    let listNames = document.getElementById("list-names");
    let itemsList = "";

    
    if (inputName.value == "") {
        alert("Debe ingresar un nombre.")
    } else {
        namesList.push(inputName.value);
        namesList.forEach(item => {
            itemsList += `<li> ${item} </li>`;
        });
    
        listNames.innerHTML = itemsList;
    }

    inputName.value = null;
    //console.log(namesList);
}

function ej3Filtro() {
    let len = parseInt(document.getElementById("ej3-filtro").value);
    let filterList = document.getElementById("filter-names");
    let itemsList = "";

    //console.log(filterList);

    if (namesList.length > 0) {
        namesList.forEach(item => {
            if (item.length == len) {
                itemsList += `<li> ${item} </li>`;
            }
        });

        //console.log(itemsList);

        if (itemsList.length > 0) {
            filterList.innerHTML = itemsList;
        } else {
            alert("No existen nombres que coincidad con el criterio.")
        }

    } else {
        alert("La lista esta vacia");
    }

}

function ej4Edad() {
    let startDate = document.getElementById("start-date").value;
    let valueDate = new Date(startDate);
    let todayDate = new Date();
    let resultDate = 0;
    let resultYears = document.getElementById("ej4-result")

    if (valueDate > todayDate) {
        alert("La fecha de nacimiento no puede ser mayor a la fecha actual.")
    } else {
        const format = {year: 'numeric'}
        let resultDate = (todayDate - valueDate);
        let seconds = resultDate / 1000;
        let days = seconds / 86400;
        let yearr = days / 365;
        
        //console.log(valueDate);
        //console.log(Math.floor(yearr));

        resultYears.value = Math.floor(yearr);

    }
}

function ej5Hilera () {
    let inputFrase = document.getElementById("text-sentence").value;

    console.log(inputFrase);
}