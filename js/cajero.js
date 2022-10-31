//variables
let btnIngreso = document.querySelector("#btn_ingreso");
let formulario = document.querySelector(".formulario");
let totalesDinero = document.querySelector(".totales");
let contenido = document.querySelector(".aviso");

let totall = 0;


document.addEventListener('DOMContentLoaded', ()=>{
    totall = JSON.parse(localStorage.getItem('cajero')) || [];
    generarHTMLdinero(`Total: $${totall}`);
})
document.addEventListener('DOMContentLoaded', ()=>{
    totalRetirado = JSON.parse(localStorage.getItem('retiro')) || [];
    generarHTMLdinero(`Total en cajero: $${totalRetirado}`);
})



//usuarios
let usuarios = [
    {
        nombre: "sebas",
        numeroDocumento: 1007918688,
        contrasena: 1234,
        tipoUsuario: "administrador",
        cajero: 0
    }, 
    {
        nombre: "kelly",
        numeroDocumento: 10235436112,
        contrasena: 4321,
        tipoUsuario: "cliente"
    }, 
    {
        nombre: "yadir",
        numeroDocumento: 1007915673,
        contrasena: 3215,
        tipoUsuario: "administrador",
        cajero: 0
    }, 
    {
        nombre: "sofia",
        numeroDocumento: 1034618688,
        contrasena: 7534,
        tipoUsuario: "cliente"
    }, 
];

//arrays con el cajero
//cajero


let cajero = [
    {
        valor: 100000,
        total: 0
    },
    {
        valor: 50000,
        total: 0
    },
    {
        valor: 20000,
        total: 0
    },
    {
        valor: 10000,
        total: 0
    },
    {
        valor: 5000,
        total: 0
    }
];




//funcion click validar
btnIngreso.addEventListener("click", validar);

function validar(e){
    e.preventDefault();
    let cedulaUsuario = document.querySelector("#cedula");
    let contraUsuario = document.querySelector("#password");
    usuarios.forEach((usuario)=>{
        if(cedulaUsuario.value == usuario.numeroDocumento && contraUsuario.value == usuario.contrasena && usuario.tipoUsuario == "administrador"){
            administradorValido();
            removerAlerta.remove();
        }else if(cedulaUsuario.value == usuario.numeroDocumento && contraUsuario.value == usuario.contrasena && usuario.tipoUsuario == "cliente"){
            clienteValido();
            //alertas("eres cliente");
        }else{
            alertas("no existe el usuario");
        }
    })
}

//crear html Alertas
function alertas(alerta){
    removerAlerta();
    const error = document.createElement("P");
    error.textContent = alerta;
    error.classList.add("alerta");
    error.style.background = "red";
    error.style.color = "white";
    error.style.padding = "0.5rem";
    error.style.textAlign = "center";
    error.style.marginTop = "2rem";
    formulario.appendChild(error);
    
}

//remover alerta si ya existe una vez
function removerAlerta(){
    let alerta = document.querySelector(".alerta");
    if(alerta){
        alerta.remove();
    }

    setTimeout(() => {
        removerAlerta();
    }, 3000);
}



//administrador
function administradorValido(){
    window.location.href ="administradores.html";
}



function btnTotal(){
    let billeteCien = document.querySelector("#billeteCien").value;
    let billeteCicuenta = document.querySelector("#billeteCicuenta").value;
   let billeteVeinte = document.querySelector("#billeteVeinte").value;
   let billeteDiez = document.querySelector("#billeteDiez").value;
   let billeteCinco = document.querySelector("#billeteCinco").value;

   
    cajero.forEach(moneda =>{
        if(moneda.valor == 100000){
            moneda.total += billeteCien;
        }else if(moneda.valor == 50000){
            moneda.total += billeteCicuenta;
        }else if(moneda.valor == 20000){
            moneda.total += billeteVeinte
        }else if(moneda.valor == 10000){
            moneda.total += billeteDiez
        }else if(moneda.valor == 5000){
            moneda.total += billeteCinco
        }
       })


        let billetes100 = cajero[0].total;
        let billetes50 = cajero[1].total;
        let billetes20 = cajero[2].total;
        let billetes10 =cajero[3].total;
        let billetes5 = cajero[4].total;
        totall = (billetes5*5000) + (billetes10*10000) + (billetes20*20000) + (billetes50*50000) + (billetes100*100000);

        //si todos los billetes están en 0 se reinicia el formulario
        if(totall === 0){
            //alert("Cajero en mantenimiento, vuelva pronto")
            let aviso = document.createElement("P")
            aviso.textContent = "Cajero en mantenimiento, vuelva pronto";
            contenido.style.background = "red";
            contenido.style.color = "white";
            contenido.style.padding = "0.5rem";
            contenido.style.textAlign = "center";
            contenido.style.marginTop = "2rem";
            contenido.appendChild(aviso);

            setTimeout(() => {
                window.location.href ="index.html";
            }, 3000);

            
        }else if (cajero !== 0){
            generarHTMLdinero(`SALDO ACTUALIZADO`);
        
            generarHTMLdinero(`Billetes de $100.000: / ${billetes100}`)
            generarHTMLdinero(`Billetes de $50.000: / ${billetes50}`)
            generarHTMLdinero(`Billetes de $20.000: / ${billetes20}`)
            generarHTMLdinero(`Billetes de $10.000: / ${billetes10}`)
            generarHTMLdinero(`Billetes de $5.000: / ${billetes5}`)
    
            generarHTMLdinero(`Total: $${totall}`);

        }
}


//en caso de que ya haya datos en el area administrativo que el administrador pueda salir
function btnSalir(){
    window.location.href = "index.html"
}

//creando el html de los totales por denominacion
function generarHTMLdinero(totales){
    let dineroTotales = document.createElement("P");
    dineroTotales.textContent = totales;

    totalesDinero.appendChild(dineroTotales);

    sincronizarStorage();
}

//almacenar la cantidades en el localstorage
function sincronizarStorage(){
    localStorage.setItem('cajero', JSON.stringify(totall));
}

/**********cliente****/
function clienteValido(){
    window.location.href = "clientes.html";
}


function btnRetirar(){
    let valorRetirar = document.querySelector("#valorRetirar").value;
    let retirar;

        let retirarBilletes100 = Math.floor(valorRetirar / 100000);
        retirar -= retirarBilletes100 * 100000;
        let retirarBilletes50 = Math.floor(valorRetirar / 50000);
        retirar -= retirarBilletes50 * 50000;
        let retirarBilletes20 = Math.floor(valorRetirar / 20000);
        retirar -= retirarBilletes20 * 20000;
        let retirarBilletes10 = Math.floor(valorRetirar / 10000);
        retirar -= retirarBilletes10 * 10000;
        let retirarBilletes5 = Math.floor(valorRetirar / 5000);
        retirar -= retirarBilletes5 * 5000;

        console.log(retirarBilletes100);
        console.log(retirarBilletes50);
        console.log(retirarBilletes20);
        console.log(retirarBilletes10);
        console.log(retirarBilletes5);

        let totalRetirado = (retirarBilletes100*100000) + (retirarBilletes50*50000) + (retirarBilletes20*20000) + (retirarBilletes10*10000) + (retirarBilletes5*5000)

        generarHTMLdinero(`Billetes de $100.000: / ${retirarBilletes100}`)
        generarHTMLdinero(`Billetes de $50.000: / ${retirarBilletes50}`)
        generarHTMLdinero(`Billetes de $20.000: / ${retirarBilletes20}`)
        generarHTMLdinero(`Billetes de $10.000: / ${retirarBilletes10}`)
        generarHTMLdinero(`Billetes de $5.000: / ${retirarBilletes5}$`)
        generarHTMLdinero(`Total en cajero: $${totalRetirado}`);
        localStorage.setItem('retiro', JSON.stringify(totalRetirado));
}

