/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let num = 1;

while (num <= 20) {
  if (num % 2 !==0) {
    sum += num;
  }
  num++;
}

console.log(sum);
