
/* alert('Hello in my World') */
/* console.log('Im practising JS)')

const name = 'Basia'
let age = 56
const newAge = age+10

console.log(`age is ${age}`);
console.log(`newAge is ${newAge}`);

const heading = document.querySelector('.welcome')

console.log(heading)

const header = document.querySelector('.main-heading--js')

header.innerHTML = `Hello name is ${name}`

function policzToSam(kolejnyAge) {
    console.log(`dostałem ${kolejnyAge}`);
    return kolejnyAge*5;
}

const myResults = policzToSam(5);

console.log(myResults)
 */

/*  IMMUTABILITY in Objects*/

const numberOne = 15
const numberTwo = 25

const nameOne = 'Arek'
const nameTwo = 'Maciek'


/* object 1 */
const carOne = {
    name: 'mercedes15',
    productionDate: '2014r',
    color: 'white',
    engine: {
        capacity: 2.2,
        power: '215 hp',
    },
    isTurboOn: true,
    alarm: false,
    racing: (opponent) => {
        console.log(`I'll be racing with ${opponent}`)
    },
}

carOne.racing('Vin Disel')

/* object 2 */
const carTwo = {
    name: 'mercedes15',
    productionDate: '2014r',
    color: carOne.color,
    engine: {
        capacity: 2.2,
        power: '215 hp',
    },
    isTurboOn: true,
    alarm: false,
    racing: (opponent) => {
        console.log(`I'll be racing with ${opponent}`)
    },
}

carTwo.engine.capacity = 'only 100 hp'
carTwo.name = 'porshe'
carTwo.engine.capacity = carOne.engine.capacity
carTwo.engine.capacity = 'hello hp'

carOne.racing('Vin Disel')

carOne.color = 'black'

console.log(carOne)
/* console.log(carOne.engine.capacity) */
console.log(carTwo)

const humanOne = {
    name: 'Maciek',
    age: 32,
}

const humanTwo = {
    name: 'Arek',
    age: 25,
}