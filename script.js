console.log('------------------------Завданя 1---------------------------');
// - создать массив с 20 числами
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
////////////////////////////////////////////////////////////////////////////////////////
// let arr = [];
// for (i = 0; i < 20; i++) {
//     let a = Math.floor(Math.random() * (100 - (-20) + 1)) + (-20);
//     arr.push(a);
// };
// console.log(arr)
// let sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);
// let reversSortArr = arr.sort((a, b) => b - a);
// console.log(reversSortArr);
// let threArr = arr.filter(value => value % 3 == 0 && value !== 0);
// console.log(threArr);
// let tenArr = arr.filter(value => value % 10 == 0 && value !== 0);
// console.log(tenArr);
// arr.forEach(element => console.log(element));
// let multiplyArr = arr.map(element=>element*3);
// console.log(multiplyArr);
// .....................................................................................................
console.log('------------------------Завданя 2---------------------------');
// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// let wordArr = [
//     'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
//     'adipisicing', 'elit', 'Cupiditate', 'soluta', 'eaque', 'delectus', 'fuga', 'assumenda', 'iste'
// ];
// console.log(wordArr);
// let sortArr = wordArr.sort((a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) {
//         return 1;
//     }
//     else if (a.toLowerCase() < b.toLowerCase()) {
//         return -1;
//     }
//     else { return 0 };
// });
// console.log(sortArr);
// let reversSortArr = wordArr.sort((a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) {
//         return -1;
//     } else if (a.toLowerCase() < b.toLowerCase()) {
//         return 1;
//     } else {
//         return 0;
//     };
// });
// console.log(reversSortArr);
// let filterArr = wordArr.filter(value => value.length >= 4);
// console.log(filterArr);
// let newWordarr = wordArr.map(value => value+='!');
// console.log(newWordarr);
// ...........................................................................................
console.log('------------------------Завданя 3---------------------------');
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// let users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];
// console.log(users);
// users.sort((a,b)=>a.age-b.age);
// users.sort((a,b)=>b.age-a.age);
// users.sort((a,b)=>a.name.length-b.name.length);
// users.sort((a,b)=>b.name.length-a.name.length);
// let newUsers = JSON.parse(JSON.stringify(users));
// newUsers
//     .map((elem,index)=>elem.id = index*elem.name.length+elem.age)
//     .sort((a,b)=>a.id-b.id);
// console.log(newUsers);
// ........................................................................................
console.log('------------------------Завданя 4---------------------------');
// -- наисать функцию калькулятора с 2мя числами и колбеком
///////////////////////////////////////////////////////////////////////////////////////////////////
// function calc(a, b, callbackFn){
//     return callbackFn(a,b);
// }
// let res = calc(2,5, (a,b)=>a*b);
// console.log(res);
// ...................................................................................
console.log('------------------------Завданя 5---------------------------');
// -- наисать функцию калькулятора с 3мя числами и колбеком
///////////////////////////////////////////////////////////////////////////////
function calc(a, b, c, callbackFn){
    return callbackFn(a,b,c);
}
let res = calc(2,5,6, (a,b,c)=>(a*b)*c);
console.log(res);
// ............................................................................................