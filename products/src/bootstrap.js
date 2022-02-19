import faker from "faker"

const mount = (el) => {
  let products = ''

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  // display list of product 
  el.innerHTML = products;
}

// check if in development mode
if (process.env.NODE_ENV === 'development') {
  // check if render in insolation
  // by adding identical id to html in Product app
  // so the element with id dev-products will not exist in Container app
  // which mean if we found this element, that mean Product app is running in isolation
  const el = document.querySelector("#dev-products")

  if (el) {
    mount(el)
  }
}

export { mount }