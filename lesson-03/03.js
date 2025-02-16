// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(first, second, third) {
    const comparison = Math.max(first, second, third);
    return comparison;
}
findLargest(2, 4, 7);
findLargest(3, 9, 8);

console.log(findLargest(2, 4, 7))
console.log(findLargest(3, 9, 8))
