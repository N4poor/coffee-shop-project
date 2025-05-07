export const select = {
   
  containerOf: {
    pages: '#pages',
  },
  nav: {
    links: '.nav__links a',
  },
};
  
export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: 'http://localhost:3131',
    products: 'products',
  },
};

export const templates = {
  product: Handlebars.compile(
    document.querySelector('#template-product').innerHTML
  ),
};