/* Задание 1
Создайте переменную a. Запишите в нее значение 10, выведите его на экран с помощью метода alert(). 
Затем запишите в нее же значение 20, выведите его на экран. 
*/

let a = 10;
alert(a);
a = 20;
alert(a);

/* Задание 2
Создайте переменную и присвойте ей значение года выпуска первого iPhone. 
Выведите значение переменной на экран. 
*/

const firstIPhoneYear = 2007;
alert(`Год выпуска первого iPhone: ${firstIPhoneYear}.`);

/* Задание 3
Создайте переменную и присвойте ей значение имени создателя языка JavaScript. 
Выведите значение переменной на экран. 
*/

const javaScriptCreator = 'Брендан Эйх';
alert(`Имя создателя языка JavaScript: ${javaScriptCreator}.`);

/* Задание 4
Создайте две переменные: 10 и 2. 
С помощью метода alert() выведите на экран их сумму, разность, произведение и частное (результат деления). 
*/

let firstNumber = 10;
let secondNumber = 2;
alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);

/* Задание 5
Возведите 2 в 5-ю степень. Результат запишите в переменную result и выведите на экран с помощью метода alert(). 
*/

let result = 2 ** 5;
alert(`2 в 5-й степени равно ${result}.`);

/* Задание 6
Даны переменные: a = 9 и b = 2. Найдите остаток от деления a на b и выведите результат на экран с помощью метода 
alert(). 
*/

let a1 = 9;
let b = 2;
alert(`Остаток от деления равен ${a1 % b}.`);


/* Задание 7
Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним):
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num); 
*/

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

/* Задание 8
Создайте переменную age, присвойте ей значение с помощью метода prompt() «Сколько вам лет?». Результат выведите с помощью 
alert().
*/

let age = prompt("Сколько вам лет?");
alert(`Ваш возраст: ${age}`);

/* Задание 9.0
Создайте объект user, у которого есть следующие свойства: name, age, isAdmin. Значения для свойств придумайте произвольные. 
Обратите внимание, что для свойства name значение должно быть строковым, для age — числовым, а для isAdmin — булевым.
*/

let user = {
    name: 'Катя',
    age: 43,
    isAdmin: true
};

/* Задание 9.1
Добавьте объекту user свойство city of residence.
*/

user['city of residence'] = 'Екатеринбург';

/* Задание 9.2
Измените у объекта user свойство age на любое другое новое значение.
*/

user.age = 44;

/* Задание 9.3
Удалите у объекта user свойство city of residence.
*/

delete user['city of residence'];

/* Задание 9.4
Создайте переменную info, присвойте ей значение с помощью метода prompt() «Какую информацию хотите узнать о пользователе?».
Далее обращайтесь к свойствам объекта user через переменную info. Выведите результат с помощью alert.
*/

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

/* Задание 10
С помощью метода prompt() спросите у пользователя его имя и сохраните в переменную. С помощью метода alert()
выведите на экран шаблонную строку: Привет, ИМЯ! 
*/

let username = prompt('Как тебя зовут?');
alert(`Привет, ${username}!`);