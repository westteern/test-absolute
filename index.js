// const makePromise = (text, delay) => {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(text), delay);
// 	});
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
// 	.then(value => console.log(value)) //["promiseA value", "promiseB value"]
// 	.catch(error => console.log(error));

// ----------імітація масив з данними--------------
let newArray = [];

const min = 1;
const max = 100;
let resultMathRandom = getRandomIntInclusive(min, max);

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(resultMathRandom);

for (let i = 1; i <= resultMathRandom; i += 1) {
	newArray.push(i);
}
console.log(newArray); // ----------!!!!!!!!!!------------

// -----прийшов масив newArray з бази------
// -----створюємо масив масисвів при умові >= 20 --------------
let subarray = [];
if (newArray.length <= 20) {
	console.log(newArray);
} else {
	let size = 20; //розмір масиву
	subarray = []; //новий масив масивів.
	for (let i = 0; i < Math.ceil(newArray.length / size); i++) {
		subarray[i] = newArray.slice(i * size, i * size + size);
	}
}
console.log(subarray); //----------------!!!!!!!!!!----------------

// ------------пагінація-------------
let pageCount = subarray.length; // кількість кнопок
console.log(pageCount);

// ----------------при кліку по кнопці пагінаці----------------

const btnRef = document.querySelector(".header-conteiner");
btnRef.addEventListener("click", onClick);
let btnTarget = 0;
let numberOfArray;

function onClick(e) {
	e.preventDefault();
	btnTarget = e.target.innerText; //----отримую номер кнопки
	console.dir(btnTarget);
	numberOfArray = Number(btnTarget); //----підставляю номер масиву
	console.log(numberOfArray);
	let arrayForRender = subarray[numberOfArray]; // отримав масив під фетч та рендер
	console.log(arrayForRender);
}
// console.dir(subarray[0]);
