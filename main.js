var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc4d36005-6f03-4520-bea6-75aa28e06571%2Fvuejs.png?table=block&id=bdf2f16b-e160-47c6-bab2-38b1de82e8b9&width=250&userId=cb44e2f5-39f9-4a83-aa7a-a244f45062f3&cache=v2',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: ""
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: ""
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    }
})