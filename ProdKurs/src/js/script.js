  
                
function createItemTemplate(item) {
  return `<div class="catalog__item" id="${item.productId}">
  <button 
      class="catalog__bucket" 
      name="add"
      data-id="${item.productId}" 
      data-price="${item.productPrice}" 
      data-name="${item.productName}" 
      data-image="${item.productImg}"
  >
      <img class="catalog__hidden_img" 
      src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
      <p class="catalog__hidden_text">Add to Cart</p>
  </button>
  <div class="catalog__photo">
      <img class="catalog__img" src="${item.productImg}" alt="#">
  </div>
  <div class="catalog__content">
      <a class="catalog__name" href="#">${item.productName}</a>
      <div class="catalog__price">$${item.productPrice}.00</div>
  </div>
</div>`
}



/* С помощью JSON получаем базу */

let catalog = {
  container: null,
  items: [],
  url: 'https://raw.githubusercontent.com/Eliseev88/geekbrains/master/pr_omega/src/layout/catalog_for_product_page.json',
  init () {
      this.container = document.querySelector('#catalog');
      this.getData(this.url)
          .then(items => {this.items = items})
        
          .finally(() => {
              this._render();
              
          })
  },
  
  getData(url) {
      return fetch(url) //JSON
          .then(data => data.json()) // JSON >>> Obj/Array
  },
  
  _render() {
      let htmlStr = '';
      this.items.forEach(item => {
          htmlStr += createItemTemplate(item);
      });
      this.container.innerHTML = htmlStr;
  }
}
catalog.init();