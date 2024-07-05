/**Задание 1 (тайминг 20 минут)
1. Создайте функцию mergeArrays, которая принимает два
массива и возвращает новый массив, содержащий все
элементы из обоих массивов. Используйте spread
оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
*/

// function merge(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(merge(arr, arr2));

/**2. Создайте функцию removeDuplicates, которая принимает
любое количество аргументов и возвращает новый
массив, содержащий только уникальные значения.
Используйте rest оператор для сбора всех аргументов в
массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // [1, 2, 3, 4, 5] */

// function removeDuplicates(...rest) {
//     return rest.filter((item, index) => rest.indexOf(item) === index);
// }

// console.log(removeDuplicates(1,2,2,3,4,5,5,6));

/**Задание 2 (тайминг 25 минут)
1. Напишите функцию getEvenNumbers, которая принимает массив
чисел в качестве аргумента и возвращает новый массив,
содержащий только четные числа.
*/

// function getEvenNumbers(arr) {
//     return arr.filter((value) => value % 2 === 0);
// }
// console.log(getEvenNumbers([1,2,3,4]));

/**2. Задача: Напишите функцию calculateAverage, которая принимает
массив чисел в качестве аргумента и возвращает среднее значение
этих чисел. */

// function calculateAverage(arr) {
//     return arr.reduce((previousValue, currentValue) => previousValue + currentValue) / arr.length;
// }

// console.log(calculateAverage([1,2,3]));

/**3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
качестве аргумента и возвращает новую строку, в которой первая
буква каждого слова является заглавной. */

// function capitalizeFirstLetter(string) {
//   const str = string.split(" ");
//   const newStr = str
//     .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
//     .join(" ");
//   return newStr;
// }

// console.log(capitalizeFirstLetter("привет мир js"));
