/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(stroka1) {
    let result = ""
    for (let i = 0; i < stroka1.length; i++) {
        result += stroka1[i] + stroka1[i];
    }
    return result;
}

let stroka1 = ("hello");
console.log(doubleEachCharacter(stroka1));

// let stroka2 = ("bye");
// console.log(doubleEachCharacter(stroka2));

