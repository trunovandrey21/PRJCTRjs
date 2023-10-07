//Task 1
// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
// let initials = [];

// for (const name of userNames) {
//     const words = name.split(' '); 
//     let initialsString = '';

//     for (const text of words) {
//     initialsString += text[0] + '.'; 
//     }

//     initials.push(initialsString.slice(0, -1)); 
// }

// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// task 2
//умовну конструкція

// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// let filteredNames = [];

// for (const name of userNames) {
//   // Перевіряємо, чи починається ім'я на голосну (a, e, i, o, u)
//     if (/^[АаЕеІіОоУу]/.test(name)) {
//     filteredNames.push(name);
//     }
// }

// console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

//вбудований метод масивів

// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
// const filteredNames = userNames.filter((name) => /^[АаЕеІіОоУу]/.test(name));

// console.log(filteredNames);

// task 3
// const currentMaxValue = 4589;
// let reverseMaxValue = Number(currentMaxValue.toString().split("").reverse().join(""));



// console.log(reverseMaxValue); // 9854
// console.log(typeof reverseMaxValue); // 'number'

