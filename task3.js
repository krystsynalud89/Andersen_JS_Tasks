//3// Составить алгоритм: на входе есть числовой массив,
//необходимо вывести элементы массива кратные 3

const array = [2, 3, 6, 9,];
for (const element of array) {
  if (element % 3 === 0) {
    console.log(element);
  }
}
