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

//==================================================================================================================================================================
// Oбъект 'products' - база данных товаров в формате имя-товара; цена-за-единицу.
/*const products = {
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
  console.log(cashier.error); // null*/

/*const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1,
};

const cashier = {
    name: 'Mango',
    customerMoney: 0,
    totalPrice: 0,
    change: 0,
    error: null,
    greet() {
        return console.log(`Добрый день, вас обслуживает ${this.name}`);
    },
    getCustomerMoney(value) {
        return this.customerMoney = value;
    },
    countTotalPrice(allProducts, order) {

        for (let values in allProducts) {

            const keysOrder = Object.keys(order);


            if (keysOrder.includes(values)) {

                this.totalPrice += allProducts[values] * order[values];

            }
        }

        return this.totalPrice;
    },
    countChange() {

        this.change = this.customerMoney - this.totalPrice;

        return this.change;
    },
    onSuccess() {

        const equalsTotalPrice = this.customerMoney === this.totalPrice ?
            console.log('Спасибо за покупку!') :
            console.log(`Спасибо за покупку, ваша сдача ${this.change}!`);

        return equalsTotalPrice;

    },
    onError() {
        return console.log('Очень жаль, вам не хватает денег на покупки');

    },
    reset() {

        this.customerMoney = 0;
        this.totalPrice = 0;
        this.change = 0;
        this.error = null;
    }
}


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

// // Проверяем что в поле с деньгами клиента
console.log(cashier.customerMoney); // 300

// // Вызываем countChange для подсчета сдачи
cashier.countChange();

// // Проверяем что нам вернул countChange
console.log(cashier.change); // 190

// Проверяем результат подсчета денег
if (cashier.customerMoney >= cashier.totalPrice && cashier.error === null) {

    // При успешном обслуживании вызываем метод onSuccess
    cashier.onSuccess(); // Спасибо за покупку, ваша сдача 190
} else {
    // При неудачном обслуживании вызываем метод onError
    cashier.onError(); // Очень жаль, вам не хватает денег на покупки
};


// Вызываем reset при любом исходе обслуживания
cashier.reset();

// Проверяем значения после reset
console.log(cashier.customerMoney); // 0
console.log(cashier.totalPrice); // 0
console.log(cashier.change); // 0
console.log(cashier.error); // null*/
//============================================================================

/*
Создайте объект notebook для работы с массивом заметок. Каждая заметка это объект следующего формата:
// Shema
id: string | integer
title: string
body: string
priority: integer [0-2]
id - уникальный идентификатор объекта, чтобы можно было найти его в коллекции. Пока что для удобства используем числа, потом перейдем к строкам.
title - заголовок заметки, строка.
body - текст заметки, строка.
priority - значение приоритета, от 0 (низкий) до 2 (высокий).
Вот карта приоритетов, используйте ее.
*/

const PRIORITY_TYPES = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };
  
  // Напишите код для работы методов данного объекта.
  
  const notebook = {
    notes: [],
    getNotes() {
      return this.notes;
    },
    findNoteById(id) {
      for (const note of this.notes) {
  
        if (note.id === id) {
          return note;
        };
      };
    },
    saveNote(note) {
      this.notes.push(note);
    },
    deleteNote(id) {
      for (let i = 0; i < this.notes.length; i += 1) {
        const note = this.notes[i];
  
        if (note.id === id) {
          return this.notes.splice(i, 1);
        };
      };
    },
    updateNoteContent(id, updatedContent) {
      const note = this.findNoteById(id);
      const updateNoteContent = Object.keys(updatedContent);
  
      for (const key of updateNoteContent) {
        note[key] = updatedContent[key];
      }
  
      // Вариант с Деструкторизацией!
  
      // const { fields, value } = updatedContent;
      // const note = this.findNoteById(id);
  
      // return note[fields] = value;
    },
    updateNotePriority(id, priority) {
      const note = this.findNoteById(id);
  
      if (!note) {
        return;
      }
      note.priority = priority;
    },
    filterNotes(query) {
      const filteredNote = [];
      for (let i = 0; i < this.notes.length; i += 1) {
  
        const { title, body } = this.notes[i];
        const note = `${title} ${body}`;
        const resultNote = note.toLowerCase().includes(query.toLowerCase());
  
        if (resultNote) {
          filteredNote.push(this.notes[i]);
        };
      };
      return filteredNote;
    },
    filterByPriority(priority) {
      const filteredNotesOnPriority = [];
      const notes = this.getNotes();
  
      for (const note of notes) {
  
        if (note.priority === priority) {
          filteredNotesOnPriority.push(note);
        };
      };
      return filteredNotesOnPriority;
    },
  };
  
  // Далее идет код для проверки работоспособности объекта, вставьте его в конец скрипта. Ваша реализация методов объекта notebook должна проходить этот тест.
  
  /*
    Добавляю 4 заметки и смотрю что получилось
  */
  notebook.saveNote({
    id: 1,
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  });
  
  notebook.saveNote({
    id: 2,
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  });
  
  notebook.saveNote({
    id: 3,
    title: 'Get comfy with Frontend frameworks',
    body:
      'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  });
  
  notebook.saveNote({
    id: 4,
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  });
  
  console.log('Все текущие заметки: ', notebook.getNotes());
  
  /*
    Ищу заметку по ID
  */
  console.log(notebook.findNoteById(1));
  
  
  /*
    Зима уже близко, пора поднять приоритет на покупку одежды
  */
  notebook.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
  // Смотрю что у меня в заметках
  console.log(
    'Заметки после обновления приоритета для id 4: ',
    notebook.getNotes(),
  );
  
  
  /*
    Решил что фреймворки отложу немного, понижаю приоритет
  */
  notebook.updateNotePriority(3, PRIORITY_TYPES.LOW);
  console.log(
    'Заметки после обновления приоритета для id 3: ',
    notebook.getNotes(),
  );
  
  
  /*
    Решил отфильтровать заметки по слову html
  */
  console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notebook.filterNotes('html'),
  );
  
  /*
    Решил отфильтровать заметки по слову javascript
  */
  console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notebook.filterNotes('javascript'),
  );
  
  
  /*
    Обновим контент заметки с id 3
  */
  notebook.updateNoteContent(3, { title: 'Get comfy with React.js or Vue.js' });
  console.log(
    'Заметки после обновления контента заметки с id 3: ',
    notebook.getNotes(),
  );
  
  /*
  Вариант для деструкторизации
  */
  // notebook.updateNoteContent(3, { fields: 'title', value: 'Get comfy with React.js or Vue.js' });
  // console.log(
  //   'Заметки после обновления контента заметки с id 3: ',
  //   notebook.getNotes(),
  // );
  
  /*
    Обновим контент заметки с id 4
  */
  // notebook.updateNoteContent(4, { fields: 'body', value: 'In winter it is very cold. This is not very good, I love the heat' });
  // console.log(
  //   'Заметки после обновления контента заметки с id 3: ',
  //   notebook.getNotes(),
  // );
  
  
  /*
    Повторил HTML и CSS, удаляю запись c id 2
    */
  notebook.deleteNote(2);
  console.log('Заметки после удаления с id 2: ', notebook.getNotes());
  
  /*
    Выберает все заметки с указаным приоритетом
  */
  console.log('Отфильтрованые заметки по приоритету: ', notebook.filterByPriority(PRIORITY_TYPES.HIGH));
