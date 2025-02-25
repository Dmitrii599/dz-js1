/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
    let resultArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            resultArray.push(array1[i]);
        }
    }
    return resultArray;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7, 8];

// let array3 = ["apple", "banana", "orange"];
// let array4 = ["banana", "kiwi", "apple"];

console.log(findCommonElements(array1, array2));
// console.log(findCommonElements(array3, array4));
