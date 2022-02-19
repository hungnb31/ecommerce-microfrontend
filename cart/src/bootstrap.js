import faker from "faker"

const cartText = `<div>You have ${faker.datatype.number()} in your cart</div>`

document.querySelector('#dev-cart').innerHTML = cartText