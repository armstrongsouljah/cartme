<template>
    <div class="row">
        <div class="card col s12 m6 l6" v-for="product in products" :key="product.id">
            <div class="card-image">
                <h3 class="card-title">{{product.name}}</h3>
                <img src="../assets/placeholder.jpg" alt="Image missing"/>
                <div class="card-content">
                    <p>In store {{product.quantity}}</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, 
                        cupiditate qui voluptates accusantium optio nihil dolorem iure perspiciatis voluptas quos!
                    </p>
                </div>
                <div class="card-action">
                    <button class="btn btn-waves blue-grey">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProductListPage',
    props: {
        products: Array
    },
    computed: {
       
    }
}
</script>