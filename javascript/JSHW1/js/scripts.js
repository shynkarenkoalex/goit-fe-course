'use strict';

let message = '';

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

console.log(message);