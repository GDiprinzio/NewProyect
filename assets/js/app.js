/*---- IMPORTACION ----*/
import { expressions, fullflied , UserInfomation } from "./variables.js";
import { fieldValidation, validationPassword2, takedata, sessionUser } from "./functions.js";

/*---- DECLARACION DE CONST ----*/
const formRegister = document.getElementById('formRegister');
const inputsR = document.querySelectorAll('#formRegister input');

const formLogin = document.getElementById('formLogin');
const inputsL = document.querySelectorAll('#formLogin input');

/*---- TOMAD DE DATO DE DB.JSON & ALMACENAMIENTO EN EL LOCALSTORAGE ----*/
takedata();

/*---- VALIDACION DE MODAL REGISTRO ----*/
const validationR = (e) => {
    switch (e.target.name) {
        case "userNameR":
            fieldValidation(e.target.name, e.target.value, expressions.nombre)
            break;
        case "userLastNameR":
            fieldValidation(e.target.name, e.target.value, expressions.nombre)
            break;
        case "userEmailR":
            fieldValidation(e.target.name, e.target.value, expressions.correo)
            break;
        case "password1":
            fieldValidation(e.target.name, e.target.value, expressions.password)
            validationPassword2()
            break;
        case "password2":
            validationPassword2()
            break;
    }
}

inputsR.forEach((input) => {
    input.addEventListener("keyup", validationR)
    input.addEventListener("blur", validationR)
})

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();

    if (fullflied.userNameR && fullflied.userLastNameR && fullflied.userEmailR && fullflied.password) {
        const usersListStorage = JSON.parse(localStorage.getItem("users"));
        const emailValidation = usersListStorage.find(
            (Element) => Element.userEmail === e.target.userEmailR.value
        );
        if (emailValidation ? true : false) {
            Swal.fire({
                icon: "error",
                title: "Error de E-mail",
                text: "El correo electrónico ya se encuentra registrado.",
            });
        } else {
            const lastUser = usersListStorage[usersListStorage.length - 1];
            let userId = Object.values(lastUser)[0];
            userId++;
            let userAdmin = false;

            const newUser = new UserInfomation(
                userId,
                e.target.userNameR.value,
                e.target.userLastNameR.value,
                e.target.userEmailR.value,
                e.target.password1.value,
                userAdmin
            );
            usersListStorage.push(newUser);
            const newUserStorage = JSON.stringify(usersListStorage);
            localStorage.setItem("users", newUserStorage);
            sessionUser(newUser);
            window.open('./../../pages/main.html', "_self");
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor complete todos los campos.",
        });
    }
});

/*---- VALIDACION DEL MODAL LOGIN ----*/
const validationL = (e) => {
    switch (e.target.name) {
        case "userEmailL":
            fieldValidation(e.target.name, e.target.value, expressions.correo)
            break;
        case "passwordL":
            fieldValidation(e.target.name, e.target.value, expressions.password)
            break;
    };
};

inputsL.forEach((input) => {
    input.addEventListener("keyup", validationL)
    input.addEventListener("blur", validationL)
});

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const usersListStorage = JSON.parse(localStorage.getItem("users"));
    const userValidation= usersListStorage.find((Element)=> Element.userEmail === e.target.userEmailL.value && Element.userPassword === e.target.passwordL.value);
    if( userValidation ? true : false){
      const position= usersListStorage.findIndex(user=>user.userEmail ===e.target.userEmailL.value);
      const userLogin = usersListStorage[position];
      sessionUser(userLogin); 
      window.open('./../../pages/main.html',"_self");
   
    }else{
    
  Swal.fire({
    icon: 'error',
    title: 'Error de Login',
    text: 'Usuario o contraseña incorrecto!'
  })
    }
  });