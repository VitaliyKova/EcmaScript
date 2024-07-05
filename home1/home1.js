/** Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки */

// const arr = [1, 5, 7, 9];
// console.log(Math.min(...arr));

/**  Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.*/

// const createCounter = () => {
//   let count = 0;
//   return {
//     increment: () => {
//         count += 1
//         console.log(count);
//     },
//     decrement: () => {
//         count -= 1
//         console.log(count);
//     },
//   };
// };

// const count1 = createCounter();

// count1.increment();
// count1.increment();
// count1.increment();
// count1.decrement();

/**Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); */

// function findElementByClass(root, className) {
//     if (root.classList && root.classList.contains(className)) {
//       return root;
//     }
//     for (let i = 0; i < root.children.length; i++) {
//       const found = findElementByClass(root.children[i], className);
//       if (found) {
//         return found;
//       }
//     }
//     return null;
//   }
  
//   const rootElement = document.getElementById('root');
//   const targetElement = findElementByClass(rootElement, 'my-class');
//   console.log(targetElement);