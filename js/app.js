


// 1er punto

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



//2do punto
let acceso = false;

function preguntas(){
    ingreseDocumento = parseInt(prompt("ingrese su documento"));
    ingreseContrasena = parseInt(prompt("ingrese su contrasena"));
}

do {
    
    preguntas();

    //3er, 4to,5to y 6to punto
    for(let i = 0; i<usuarios.length; i++){
        if(usuarios[i].numeroDocumento === ingreseDocumento && usuarios[i].contrasena === ingreseContrasena && usuarios[i].tipoUsuario === "administrador"){
            acceso = true;

            /*punto 6 sin resolver*/
            let cantidad = [];
            let ingreseCantidad = parseInt(prompt("ingrese la cantidad de billetes al cajero: billetes de 5, 10, 20, 50, 100"));
            let billetes = parseInt(prompt("de cuanta cantidad? 5.000, 10.000, 20.000, 50.000, 100.000"));
        
            let suma = ingreseCantidad * billetes;
            
        
            cantidad.push(suma);
            console.log(cantidad);
        
        if(cantidad.length !== 0){
            preguntas();
            console.log(cantidad);
        }else if(cantidad.length === 0){
            alert("cajero en mantenimiento");
        }

        /*********************************************/


        }else if(usuarios[i].numeroDocumento === ingreseDocumento && usuarios[i].contrasena === ingreseContrasena && usuarios[i].tipoUsuario === "cliente"){
            console.log("cliente")
        }else{
            //console.log("usuario no existe")
        }


        



}
    
} while (!acceso);



