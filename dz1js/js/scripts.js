//'use strict';
/*var adminLogin ;
var adminPassword ;
const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';*/
login_ok = false;
ADMIN_LOGIN = "";
ADMIN_PASSWORD = "";
ADMIN_LOGIN = prompt("ADMIN_LOGIN","");
ADMIN_LOGIN = ADMIN_LOGIN.toLowerCase();

ADMIN_PASSWORD = prompt("ADMIN_PASSWORD","");
ADMIN_PASSWORD = ADMIN_PASSWORD.toLowerCase();
if (ADMIN_LOGIN==="admin" && ADMIN_PASSWORD==="m4ngo1zh4ackz0r") {
login_ok=true;

window.location="https://github.com/shynkarenkoalex/goit-fe-course/tree/master/javascript/JSHW1";
alert("Добро пожаловать!");
}


if (login_ok===false) alert("Доступ запрещен!");
