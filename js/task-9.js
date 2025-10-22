// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'




// const calculator = {
//     read(a, b) {
//     this.a = a;
//     this.b = b;
//     return this;
//     },
//     sum(){
//         return this.exist()? this.a + this.b: 'No such propeties'
//     },
//     mult(){
//         return this.exist()? this.a * this.b: 'No such propeties'
//     },
//     exist(){
//         return Number.isFinite(this.a) && Number.isFinite(this.b)
//     },
// }

// console.log(calculator.read(2,3))
// console.log(calculator.read(2,3).sum())
// console.log(calculator.read(2,3).mult())

