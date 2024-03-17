/* Задание 1
Преобразовать строку 'js' в верхний регистр.
*/

console.log('Задание 1');

const str = 'js';
const upperCaseString = str.toUpperCase();
console.log(upperCaseString);

/* Задание 2
Создать функцию, которая принимает массив строк и строку. 
Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. 
Регистр символов не влияет на результат.
*/

console.log('Задание 2');

const getArrayStartingWithString = (stringArray, string) => {
    const newArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].toLowerCase().startsWith(string.toLowerCase())) {
            newArray.push(stringArray[i]);
        }
    }
    return newArray;
}

const array = ['JavaScript', 'Python', 'Java', 'JavaType', 'Ruby'];
const word = 'java';
const arrayContainingWord = getArrayStartingWithString(array, word);
console.log(arrayContainingWord); 

/* Задание 3
Округлить число 32.58884:
До меньшего целого.
До большего целого.
До ближайшего целого.
*/

console.log('Задание 3');

const number = 32.58884;
console.log(`Округлить число ${number} до меньшего целого: ${Math.floor(number)}`);
console.log(`Округлить число ${number} до большего целого: ${Math.ceil(number)}`);
console.log(`Округлить число ${number} до ближайшего целого: ${Math.round(number)}`);

/* Задание 4
Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
*/

console.log('Задание 4');

// Решение с использованием spread
console.log('Решение 1');

const numArray = [52, 53, 49, 77, 21, 32];
const max1 = Math.max(...numArray);
console.log("Максимально число: " + max1);
const min1 = Math.min(...numArray);
console.log("Минимальное число: " + min1);

// Решение с использованием функций
console.log('Решение 2');

function getMaxOfArray(numArray) {
    return Math.max.apply(this, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(this, numArray);
} 

const numArr = [52, 53, 49, 77, 21, 32];
const max2 = getMaxOfArray(numArr);
console.log("Максимально число: " + max2);
const min2 = getMinOfArray(numArr);
console.log("Минимальное число: " + min2);

/* Задание 5
Создать функцию, которая выводит в консоль случайное число от 1 до 10.
*/

console.log('Задание 5');

const random = Math.floor(Math.random() * 10) + 1;
console.log(`Случайное число: ${random}`);

/* Задание 6
Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. 
Длина массива должна быть в два раза меньше переданного числа.
*/

console.log('Задание 6');

const getRandomNumArr = (number) => {
    const randomArrNum = new Array(Math.floor(number / 2));
    for (let i = 0; i < randomArrNum.length; i++) {
        randomArrNum[i] = Math.round(Math.random() * number);
    }
    return randomArrNum;
}

const randomArrNum = getRandomNumArr(12);
console.log(randomArrNum);

/* Задание 7
Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
*/

console.log('Задание 7');

const getRandomNumberWithinRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumberWithinRange(3, 9);
console.log(randomNumber);

/* Задание 8
Вывести в консоль текущую дату.
*/

console.log('Задание 8');

const currentDate = new Date();
console.log("Сегодня: " + currentDate);

/* Задание 9
Создать переменную currentDate, хранящую текущую дату. 
Вывести дату, которая наступит через 73 дня после текущей.
*/

console.log('Задание 9');

const today = new Date();
const daysForNextDate = 73;

// Решеение 1 с использованием милисекунд
console.log('Решение 1');
const daysForNextDateInMillis = daysForNextDate * 24 * 60 * 60 * 1000;
const nextDate = (+today) + daysForNextDateInMillis;
console.log("Новая дата: " + new Date(nextDate).toLocaleDateString('ru-Ru', {year: 'numeric', month: 'long', day: 'numeric'}));

// Решение 2 с использованием getDate();
console.log('Решение 2');
const newDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysForNextDate);
console.log("Новая дата: " + newDate.toLocaleDateString('ru-Ru', {year: 'numeric', month: 'long', day: 'numeric'}));

// Решение  с использованием getDate() и setDate()
console.log('Решение 3');
today.setDate(today.getDate() + daysForNextDate);
console.log("Новая дата: " + today.toLocaleDateString('ru-Ru', {year: 'numeric', month: 'long', day: 'numeric'}));

/* Задание 10
Написать функцию, которая принимает дату и возвращает ее в формате:
Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды]
*/

console.log('Задание 10');

function formatDate (date) {
    const optionsDate = {year: 'numeric', month: 'long', day: 'numeric'};
    const optionsWeekday = {weekday: 'long'};
    const optionsTime = {hour: '2-digit', minute:'2-digit', second: '2-digit'}; 
    const formatedDate = "Дата: " + date.toLocaleDateString('ru-Ru', optionsDate) + 
        " - это " + date.toLocaleDateString('ru-Ru', optionsWeekday) + ".\n" + 
        "Время: " + date.toLocaleTimeString('ru-RU', optionsTime);
    return formatedDate;
}

const date = new Date(2024, 6, 29, 12, 30, 20, 10);
const formatedDate = formatDate(date);
console.log(formatedDate);  

/* Задание 11. Работа с макетом
Выполнено в отдельном файле hw_7_game_2.js
Необходимо создать еще один блок макета «Запомни слова» (игра 2) и сделать адаптив.
Слова для запоминания поместить в массив:
['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
Мобильная версия сайта должна отображаться при разрешении 375–767 px.
При клике на кнопку «Играть» должна запускаться программа с функционалом, описанным ниже.
*/


