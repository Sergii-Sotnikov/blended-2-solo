// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array){
//     const userlogin = prompt('Enter your login')
//     if(userlogin === null){
//         alert("Canceled")
//         return
//     }

//     const updtUserlogin = userlogin.toLocaleLowerCase().trim()

//     if(updtUserlogin === ''){
//         alert("Введено не корректны дані");
//         return
//     }

//     for(const login of array){
//         if (updtUserlogin === login.toLocaleLowerCase()){
//             return alert(`"Welcome, ${userlogin.trim()}!`)
//         } return alert(`User not found`)
//     }
// }

// checkLogin(logins)