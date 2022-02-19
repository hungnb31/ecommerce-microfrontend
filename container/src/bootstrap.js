import { mount as productMount } from 'products/ProductsBootstrap';
import { mount as cartMount } from "cart/CartBootstrap"

console.log("Container!")

const productEl = document.querySelector('#my-products')
const cartEl = document.querySelector('#my-cart')

productMount(productEl)
cartMount(cartEl)