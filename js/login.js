function loguin() {
    const storedUsername = "jota" ; 
    const storedPassword = "dejame" ; 
    let username;
    let password;

    do {
        username = prompt("Por favor, ingrese su nombre de usuario (minimo 3 caracteres):");

        if (username === null) {
            alert("Operación cancelada.")
            return;
        } 
        
    } while (username === null ) ;
        

    do {
        password = prompt("Por favor, ingrese su contraseña:") ;

        if (password === null) {
            alert("Se requiere una contraseña para continuar. Intentalo de nuevo") ;
        }
    } while (password === null) ;

    if (username === storedUsername && password === storedPassword) {
        alert("¡Bienvenido!") ;
    } else {
        alert("Usuario o contraseña incorectos. Intentalo de nuevo.") ;
        loguin() ;
    }
    
    console.log("Usuario ingresado.") ;
    console.log("Contraseña ingresada.") ;
}

loguin() ;
