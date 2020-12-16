var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        selectedVariant: 0,
        inStock: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        brand: 'Socks',
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "",
                variantQuantity: 0
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})