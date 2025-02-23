/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

function includesElement(array, element) {

    for (let i = 0; i < array.length; i++) 
        if (array[i] === element) {
        return true
    }
    return false
}

includesElement([1, 2, 3], 2);
// let array = [1, 2, 3];
// let element = 4;
console.log(includesElement([1, 2, 3], 2));

// includesElement([4, 5, 6], 7);
// let arrays = [4, 5, 6];
// let elements = 6;
// console.log(includesElement([4, 5, 6], 7));

