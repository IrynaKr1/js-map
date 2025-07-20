const map = new Map();
map.set(1, 'first').set(3, 'third');
//Отримайте кількість елементів.
console.log('Кількість елементів :>> ', map.size);

//Додати та видалити елемент.
map.set(2, 'two');
map.delete(2);
console.log(map);

// Здійсніть пошук за ключом.
console.log(map.get(1));

//Перевірити, чи є в мапі числівник для числа 2.

console.log('чи є в мапі числівник для числа 2?', map.has(2));

//Отримайте список ключів та значень окремо.
const mapKeys = [...map.keys()];
console.log('Map keys :>>', mapKeys);

const mapValues = [...map.values()];
console.log('Map values :>>', mapValues);
