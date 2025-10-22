// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// function findLongestWord(string){
//     const newArray =string.trim().split(" ");
//     let indexlength=[]
//     for (const word of newArray){
//         console.log(word.length)
//         indexlength.push(word.length)
//     }
//     const maxlength = Math.max(...indexlength)
//     const indexMax = indexlength.indexOf(maxlength)
//     return newArray[indexMax]
// }



// console.log(findLongestWord("London is the capital of Great Britain"))