'use strict';

/*let message = '';

const ADMIN_LOGIN = prompt('Логин', '');

if (ADMIN_LOGIN === 'admin') {

    const ADMIN_PASSWORD = prompt('Пароль', '');

  if (ADMIN_PASSWORD === 'm4ng0h4ckz') {
    alert( message = 'Добро пожаловать!' );
  } else if (ADMIN_PASSWORD === null) { // (*)
    alert( message = ' Отменено пользователем! ' );
  } else {
    alert( message = ' Доступ запрещен, неверный пароль! ' );
  }

} else if (ADMIN_LOGIN === null) { // (**)
  alert( message = 'Отменено пользователем!' );

} else {

  alert( message = ' Доступ запрещен, неверный логин! ' );

}

console.log(message);*/

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = '4ng0h4ckz';
const msgAccessDenied = 'Доступ запрещен!';
const msgCanceledByUser = 'Отменено пользователем!';
const msgWelcome = 'Добро пожаловать!';
let userLogin = prompt("Введите Логин", "");
let userPassword;

if (userLogin === null) {
    alert(msgCanceledByUser);
} else if (userLogin !== ADMIN_LOGIN) {
    alert(msgAccessDenied);
} else {
    userPassword = prompt("Введите Пароль", "");
}

if (userPassword === null) {
    alert(msgCanceledByUser);
} else if (userPassword === ADMIN_PASSWORD) {
    alert(msgWelcome);
} else {
    alert(msgAccessDenied);
}