/*---- IMPORTACION ----*/
import { expressions, fullflied } from "./variables.js";

/*---- DECLARACION DE LA FUNCION VALIDATION----*/

export const fieldValidation = (field, value, expression) => {
    if (expression.test(value)) {
        document.getElementById(`${field}`).classList.remove('is-invalid');
        document.getElementById(`${field}`).classList.add('is-valid');
        fullflied[field] = true;
    } else {
        document.getElementById(`${field}`).classList.add('is-invalid');
        document.getElementById(`${field}`).classList.remove('is-valid');
        fullflied[field] = false;
    };
};

export const validationPassword2 = () => {
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");

    if (password1.value !== password2.value) {
        document.getElementById(`password2`).classList.add('is-invalid');
        document.getElementById(`password2`).classList.remove('is-valid');
        fullflied['password'] = true;
    } else {
        document.getElementById(`password2`).classList.remove('is-invalid');
        document.getElementById(`password2`).classList.add('is-valid');
        fullflied['password'] = true;
    };
};

/*---- Traer la información de db.json ----*/
export function takedata() {
    fetch("./../assets/data/db.json")
      .then((response) => response.json())
      .then((data) => {
        //Transformación con JSON y subida al LocalStorage
        const usersList = JSON.stringify(data);
        localStorage.setItem("users", usersList);
      })
  };

  // Función para almacenar en el SessionStorage
export const sessionUser = (user) => {
    const sessionLogin =JSON.stringify(user);
    sessionStorage.setItem("userSession", sessionLogin);
  };