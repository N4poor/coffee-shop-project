import { classNames, select, settings } from './settings.js';
import Product from './components/Product.js';
import nav from './components/nav.js';

const app = {
  initPages: function () {
    const thisApp = this;
  
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
  
    let idFromHash = window.location.hash.replace('#', '');
    if (!idFromHash) idFromHash = 'home';
  
    console.log('[initPages] Initial hash:', idFromHash);
  
    thisApp.activatePage(idFromHash);
  
    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const clickedElement = this;
        const id = clickedElement.getAttribute('href').replace('#', '');
  
        console.log(`[nav click] Link clicked: ${id}`);
  
        thisApp.activatePage(id);
        window.location.hash = '#' + id;
      });
    }
  },

  initData: function () {
    const thisApp = this;
    
    thisApp.data = {};
    
    const url = `${settings.db.url}/${settings.db.products}`;
    
    fetch(url)
      .then(response => response.json())
      .then(parsedResponse => {
        console.log('[initData] Data from API:', parsedResponse);
    
        thisApp.data.products = parsedResponse;
    
        thisApp.initProducts();
      });
  },

  initProducts: function () {
    const thisApp = this;
      
    const productLists = document.querySelectorAll('.products__list');
    console.log('[initProducts] znaleziono listy:', productLists);
      
    thisApp.data.products.forEach((productData, index) => {
      if (index % 2 === 1) {
        productData.reverse = true;
      }
      
      productLists.forEach(list => {
        new Product(productData, list);
      });
    });
  },

  activatePage: function (pageId) {
    const thisApp = this;
  
    console.log(`[activatePage] Activating page: ${pageId}`);
  
    for (let page of thisApp.pages) {
      const isActive = page.id === pageId;
      page.classList.toggle(classNames.pages.active, isActive);
      if (isActive) console.log(` -> Showing: #${page.id}`);
    }
  
    for (let link of thisApp.navLinks) {
      const isActive = link.getAttribute('href') === '#' + pageId;
      link.classList.toggle(classNames.nav.active, isActive);
      if (isActive) console.log(` -> Active nav link: ${link.outerHTML}`);
    }

  },
  

  init: function () {
    const thisApp = this;
    console.log('[init] App starting...');
    thisApp.initPages();
    thisApp.initData();
    nav.init(); // << wywołujesz metodę init z obiektu
  },
};
  
app.init();