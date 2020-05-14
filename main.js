const name = 'Arek';
const age = 20;
const girlfriendName = 'Basię';

const newAge = 25;


/* alert('siema'); */
/* console.log(name);
console.log('Hi, nice to meet you');
console.log(age);
console.log(`Kocham moją dziewczynę ${girlfriendName}`);

function calculate(myNumber) {
    console.log(`dostałam ${myNumber}`);
    myNumber = myNumber*7;
    return `wynik${myNumber}`
}

const myResult = calculate(age);
console.log(age);

console.log(myResult);
 */

/* const heading = document.querySelector('.welcome');
console.log(heading); */

const heading = document.querySelector('.welcome__heading--js');
console.log(heading);
console.log(heading.innerHTML);

heading.innerHTML = `<span style="color: yellow;">Experiments</span> ${age}`;
console.log(heading.innerHTML);





/* const body = document.querySelector('body');
console.log(body); */