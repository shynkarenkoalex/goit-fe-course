"use strict"

/*
  Создайте скрипт кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того хватает 
  денег или нет, уведомляет покупателя о результате.
*/

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */
/*const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};*/
/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
/*const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1,
};


function Cashier(name, productsDatabase) {
    this.name = name;
    this.productsDatabase = productsDatabase;
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
    this.greet = function() {
        console.log(`Здравствуйте, вас обслуживает ${this.name} !`);
    };
    this.onSuccess = function() {
        if (this.changeAmount === 0) {
            console.log(`Спасибо за покупку!`);
        } else {
            console.log('Спасибо за покупку, ваша сдача: ', this.changeAmount);
        }
    };
    this.onError = function() {
        console.log('Очень жаль, вам не хватает денег на покупки');
    };
    this.countTotalPrice = function(order) {
        const productNames = Object.keys(order);
        for (productName of productNames) {
            if (productsDatabase[productName]) {
                this.totalPrice += order[productName] * productsDatabase[productName];
            }
        }
        return this.totalPrice;
    };

    this.getCustomerMoney = function(value) {
        this.customerMoney = Number(value);
        return this.customerMoney;
    };

    this.countChange = function() {
        if (this.customerMoney >= this.totalPrice) {
            this.changeAmount = this.customerMoney - this.totalPrice;
        } else {
            this.changeAmount = null;
        }
        return this.changeAmount;
    };

    this.reset = function() {
        this.totalPrice = 0;
        this.customerMoney = 0;
        this.changeAmount = 0;
    };
}

// ===========================================================================================

const mango = new Cashier('Mango', products);

// // Проверяем исходные значения полей
console.log(mango.name); // Mango
console.log('mango.productsDatabase: ', mango.productsDatabase); // ссылка на базу данных продуктов (объект products)
console.log('mango.totalPrice -Initial: ', mango.totalPrice); // 0
console.log('mango.customerMoney -Initial: ', mango.customerMoney); // 0
console.log('mango.changeAmount -Initial: ', mango.changeAmount); // 0
// // Вызываем метод greet
mango.greet(); // Здравствуйте, вас обслуживает Mango

// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
mango.countTotalPrice(order);

// // Проверям что посчитали
console.log('mango.totalPrice: ', mango.totalPrice); // 110

// // Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(300);

// // Проверяем что в поле с деньгами пользователя
console.log('mango.customerMoney: ', mango.customerMoney); // 300

// // Вызываем countChange для подсчета сдачи
const result = mango.countChange();

// // Проверяем что нам вернул countChange
console.log('result: ', result); // 190

// // Проверяем результат подсчета денег
if (result !== null) {
    //     // При успешном обслуживании вызываем метод onSuccess
    mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
} else {
    //     // При неудачном обслуживании вызываем метод onError
    mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// // Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения полей после reset
console.log('Проверяем значения: [totalPrice] после reset: ', mango.totalPrice); // 0
console.log('Проверяем значения: [customerMoney] после reset: ', mango.customerMoney); // 0
console.log('Проверяем значения: [changeAmount] после reset: ', mango.changeAmount); // 0*/

//=============================================================================================

// Создайте скрипт кассира, который получает список продуктов и деньги, подсчитывает общую стоимость продуктов,
// и в зависимости от того хватает денег или нет, уведомляет покупателя о результате.

// Создайте объект cashier со следующими свойствами и методами:

// name - имя кассира, пусть будет Mango
// customerMoney - сумма введенная клиентом при запросе денег, начальное значение 0
// totalPrice - хранит общую стоимость покупок заказа, начальное значение 0
// change - значение сдачи клиента, начальное значение 0
// error - свойство хранящее текст ошибки, начальное значение null
// greet() - метод, использует значение свойства name, выводит в консоль сообщение Добрый день, вас обслуживает ${name}
// getCustomerMoney(value) - метод, получает число (деньги клиента), и записывает его в свойство customerMoney.
// countTotalPrice(allProducts, order) - метод, получает объекты всех продуктов из списка покупок, считает общую стоимость покупок
// и записывает результат в свойство totalPrice. Ключи объекта order есть в объекте products, который будет записан в параметр allProducts.
// Из order берем количество единиц продукта, а из allProducts цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
// Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.
// countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами клиента, записывает результат в свойство change.
// Обязательно проверьте что customerMoney не меньше значения totalPrice
// Если денег было передано достаточно, возвращает разницу денег.
// Если в customerMoney меньше денег чем в totalPrice, записывает в свойство error строку Вам не хватает денег на покупки
// onSuccess() - метод, использует значение свойства change и выводит в консоль строку Спасибо за покупку, ваша сдача ${change}!.
// onError() - метод, выводит в консоль значение свойства error
// reset() - метод, сбрасывает поля customerMoney, totalPrice, change и error в исходные значения

// Oбъект 'products' - база данных товаров в формате имя-товара; цена-за-единицу.
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };
  
  // Заказ клиента хранится в виде объекта следующего формата. имя-товара; количество-единиц.
  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1,
  };
  
  //Обьект кассир.
  
  const cashier = {
    name: 'Mango',
    customerMoney: 0,
    totalPrice: 0,
    change: 0,
    error: null,
    greet() {
      console.log(`Добрый день, вас обслуживает ${cashier.name}`);
    },
    getCustomerMoney(value) {
      cashier.customerMoney = value;
    },
    countTotalPrice(allProducts, order) {
      let total = 0;
      for (const productKey in allProducts) {
        for (const orderKey in order) {
          if (productKey === orderKey) {
            total += Number(allProducts[productKey]) * Number(order[orderKey]);
          }
        }
      }
      cashier.totalPrice = total;
    },
    countChange() {
      if (Number(cashier.totalPrice) <= Number(cashier.customerMoney)) {
        cashier.change =
          Number(cashier.customerMoney) - Number(cashier.totalPrice);
      } else {
        cashier.error = 'Bам не хватает денег на покупки !';
      }
    },
    onSuccess() {
      console.log(`Спасибо за покупку, ваша сдача ${cashier.change}!`);
    },
    onError() {
      console.log(`Очень жаль, ${cashier.error}!`);
    },
    reset() {
      cashier.customerMoney = 0;
      cashier.totalPrice = 0;
      cashier.change = 0;
      cashier.error = null;
    },
  };
  
  // Вызовы свойств и методов объектов для проверки работоспособности.
  
  // Проверяем исходные значения полей
  console.log(cashier.name); // Mango
  console.log(cashier.customerMoney); // 0
  console.log(cashier.totalPrice); // 0
  console.log(cashier.change); // 0
  console.log(cashier.error); // null
  
  cashier.greet(); // Добрый день, вас обслуживает Mango
  
  // Вызываем метод countTotalPrice для подсчета общей суммы
  // передавая products - список всех продуктов и order - список покупок клиента
  cashier.countTotalPrice(products, order);
  
  // Проверям что посчитали
  console.log(cashier.totalPrice); // 110
  
  // Вызываем getCustomerMoney для запроса денег клиента
  cashier.getCustomerMoney(300);
  
  // Проверяем что в поле с деньгами клиента
  console.log(cashier.customerMoney); // 300
  
  // Вызываем countChange для подсчета сдачи
  cashier.countChange();
  
  // Проверяем что нам вернул countChange
  console.log(cashier.change); // 190
  
  // Проверяем результат подсчета денег
  if (cashier.error === null) {
    // При успешном обслуживании вызываем метод onSuccess
    cashier.onSuccess(); // Спасибо за покупку, ваша сдача 190
  } else {
    // При неудачном обслуживании вызываем метод onError
    cashier.onError(); // Очень жаль, вам не хватает денег на покупки
  }
  
  // Вызываем reset при любом исходе обслуживания
  cashier.reset();
  
  // Проверяем значения после reset
  console.log(cashier.customerMoney); // 0
  console.log(cashier.totalPrice); // 0
  console.log(cashier.change); // 0
  console.log(cashier.error); // null