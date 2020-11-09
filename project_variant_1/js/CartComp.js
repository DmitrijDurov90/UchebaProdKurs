Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `<div class="cart-block" v-show="visibility">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item" v-for="item of cartItems"
                    :key="item.id_product"
                    :cart-item="item"
                    :img="item.productImg">
                </cart-item>
            </div>`
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
                <div class="cart-item">
                    <div class="product-bio">
                        <img :src="cartItem.productImg" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">{{cartItem.product_name}}</p>
                            <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
                            <p class="product-single-price">{{cartItem.price}}₽ за единицу</p>
                            <p class="product-price">{{cartItem.quantity*cartItem.price}}₽</p>
                        </div>
                    </div>
                    <div class="right-block">

                        <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `
});
