/* Задание 1
С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите результат в консоль.
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort(...));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]
*/

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

const sortByAge = (person1, person2) => {
    if (person1.age > person2.age) {
        return 1;
    }
    if (person1.age < person2.age) {
        return -1;
    }
    return 0;
};

console.log(people.sort(sortByAge));

/* Задание 2
Реализуйте функцию filter, которая должна работать аналогично методу массива filter. 
Возьмите за основу функцию map, которую мы реализовывали на уроке.
Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, 
принимать решение о том, добавлять в результирующий массив очередной элемент или нет.
function isPositive() {
// писать код тут
}
function isMale() {
// писать код тут
}
function filter() {
// писать код тут
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));
*/

function isPositive(number) {
    if (number >= 0) {
        return true;
    }
}
function isMale(person) {
    if (person.gender === 'male') {
        return true;
    }
}
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const persons = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(persons, isMale));

/* Задание 3
Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль 
текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».
*/

const interval = 3;
const deadline = 30;

let timerId = setInterval(() => {
	const currentDate = new Date();
	console.log(currentDate);
  }, 1000 * interval);

setTimeout(() => {
	clearInterval(timerId);
  console.log("30 секунд прошло");
}, 1000 * deadline);

/* Задание 4
Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. 
Используйте setTimeout.
function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
   callback();
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})
*/

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

/* Задание 5
Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
*/

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк

function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond2(() => {
    sayHi("Глеб")
});
