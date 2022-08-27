/*---- ESPRESIONES REGULARES ----*/
export const expressions = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  number: /^[0-9]$/,
};

export const fullflied = {
  userNameR: false,
  userLastNameR: false,
  userEmailR: false,
  password: false
};

/*---- Declaración de Objeto ----*/
  export class UserInfomation {
    constructor(userId, userName, userLastName, userEmail, userPassword, userAdmin) {
      this.userId=userId;
      this.userName = userName;
      this.userLastName = userLastName;
      this.userEmail = userEmail;
      this.userPassword = userPassword;
      this.userAdmin=userAdmin;
    }
  };