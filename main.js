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

 const calculate2 = (myNumber) => myNumber*7
 const myResult = calculate2(8)
 console.log(myResult)

/* const heading = document.querySelector('.welcome');
console.log(heading); */

const heading = document.querySelector('.welcome__heading--js');
console.log(heading);
console.log(heading.innerHTML);

heading.innerHTML = `<span style="color: yellow;">Experiments</span> ${age}`;
console.log(heading.innerHTML);

/* function greet(myNumber) {
    console.log(`dostałem ${myNumber}`);
    myNumber = myNumber*7;
    return `Hello ${myNumber}`;

}

const myResult = calculate(age);

console.log(myResult) */

/* function greet(age, name) { 
    heading.innerHTML = `<span style="color: yellow;">Experiments</span> To jest mój wiek:${age}, a tak mam na imię: ${name}`;
    console.log(heading.innerHTML);
}
greet(18, 'Arek' )*/

const greet = (age, name) => {
    heading.innerHTML = `Experiments To jest mój wiek:${age}, a tak mam na imię: ${name}`;
    console.log(heading.innerHTML);
}
greet(40,'arek')

 function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
 }

 createContent('.welcome__heading--js', 'Witam w nowym Jorku <span style="color: yellow">elo</span> elo')

 createContent('.main-heading--js', 'Hello<span style="color: yellow">World</span> elo')


 console.log()

 function helloWorld() {
     console.log('Dzień dobry :D 😎')
 }

 helloWorld()



/* const body = document.querySelector('body');
console.log(body); */