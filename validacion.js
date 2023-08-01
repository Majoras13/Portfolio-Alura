//Haz tú validación en javascript acá

const inputs = document.querySelectorAll("input");
const textArea = document.querySelectorAll(".formcontato__textarea");

inputs.forEach( input => {
    input.addEventListener("blur", (input) =>{
       valida(input.target);
    });
});

textArea.forEach( textarea => {
    textarea.addEventListener("blur" , (textarea) =>{
         valida(textarea.target)
    });
});

//validacion

function valida(input){
   /* const tipoDeInput = input.dataset.tipo;*/

    if(input.validity.valid){
        input.classList.remove("error");
        console.log("validado positivo");
    }
    else{
        input.classList.add("error");
        console.log("validado negativo");
    }
}

/*const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensejesDeError ={
    nombre: {
        valueMissing: "Este campo no puede estar vacio"
    },

    email:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    
    asunto:{
        valueMissing:"Esta campo no puede estar vacio"
    },
    
    mensaje:{
        valueMissing: "Este campo no puede estar vacio"
    }
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensejesDeError[tipoDeInput][error]);
            mensaje = mensejesDeError[tipoDeInput][error];

        };
    })
    return mensaje;
};*/