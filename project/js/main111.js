const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    showCart: false,
    products: [],
    goods: [],
    counter: 0 ,
    filtered: [],
    quantity: 0 ,
    imgCatalog: 'https://placehold.it/200x150',
    

  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      this.getJson(`${API}/addToBasket.json`)
          .then(data => {
            
              if(data.result === 1){
                  let find = this.goods.find(el => el.id_product === product.id_product);
                  if(find){
                    this.goods.push(find);

                    find.quantity++;
                    
                      console.log(this.goods);
                      
                  } else {
                      let prod = Object.assign({quantity: 1}, product);
                      this.goods.push(prod)
                  }
              } else {
                  alert('Error');
              }
          })
    },
    remove(item) {
        this.getJson(`${API}/deleteFromBasket.json`)
            .then(data => {
                if(data.result === 1) {
                    if(item.quantity>1){
                        item.quantity--;
                        console.log(this.goods);
                    } else {
                        
                        this.goods.splice(this.goods.indexOf(item), 1)
                        console.log(this.goods);
                    }
                }
            })
    },
      
  },
  
mounted() {
    
      this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for(let el of data){
            this.products.push(el);
            find.counter = 0 ;
            find.quantity = 0;
          }
        });
    
},  



});
