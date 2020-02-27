export default {
    state:{
        products:[
            {id:1, name: "iPhone 11", price: 2700000, quantity:12},
            {id:2, name: "Samsung Galaxy Note 10+", price: 1900000, quantity:45},
            {id:3, name: "Google pixel 4 XL", price: 3100000,quantity: 34},
            {id:4, name: "Anker 18W fast charger", price: 78000, quantity:123},
            {id:5, name: "Rhinoshield Crashguard case", price:120000, quantity: 345},
            {id:6, name: "Macbook Pro 16'", price: 6000000, quantity:238}
        ]
    },
    actions:{},
    mutations:{},
    getters:{
        GET_PRODUCTS (state) {
            console.log('products', state)
            return state.products
        }
    }
}