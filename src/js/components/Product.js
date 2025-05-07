import { templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(data, wrapper) {
    const thisProduct = this;
    thisProduct.data = data;

    const generatedHTML = templates.product(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    wrapper.appendChild(thisProduct.element);
  }
}

export default Product;