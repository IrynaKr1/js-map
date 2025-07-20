const map = new Map();
map.set(1, 'first').set(3, 'third');
//Отримайте кількість елементів.
console.log('Кількість елементів :>> ', map.size);

//Додати та видалити елемент.
map.set(2, 'two');
map.delete(2);
console.log(map);

// Здійсніть пошук за ключом.
console.log('пошук за ключом 1', map.get(1));

//Перевірити, чи є в мапі числівник для числа 2.

console.log('чи є в мапі числівник для числа 2?', map.has(2));

//Отримайте список ключів та значень окремо.
const mapKeys = [...map.keys()];
console.log('Map keys :>>', mapKeys);

const mapValues = [...map.values()];
console.log('Map values :>>', mapValues);

// Написати функцію, яка перероблятиме текст з числами

function numberToText(phrase) {
  return phrase
    .split(' ')
    .map((m) => {
        const num = parseInt(m);
        return (map.has(num) ? map.get(num) : m)})
    .join(' ');
}

const firstPhrase = 'This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.'
console.log(numberToText(firstPhrase));