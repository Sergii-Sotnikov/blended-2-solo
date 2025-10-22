// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...rest) {
//   const array = rest;
//   if (array.length === 0) {
//     alert("Не передано жодного аргументу");
//     return;
//   }
//   let sum = 0;
//   for (let i of array) {
//     if (typeof i !== "number") {
//       alert("Серед масиву є не число");
//       return;
//     }
//     sum += i;
//   }
//   const avr = sum / array.length;
//   return avr;
// }

// console.log(caclculateAverage(1, 4, 5, 6, 43, 3, 4, 5, 5));
