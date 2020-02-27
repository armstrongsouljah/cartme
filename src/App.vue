<template>
  <div id="app" class="container">
    <NavigationMenu/>
    <ProductListPage :products="products"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ProductListPage from './components/ProductListComponent';
import  NavigationMenu  from './components/NavBar';

export default {
  name: 'App',
  components: {
    ProductListPage,
    NavigationMenu,
  },
  computed:{
    ...mapGetters(['GET_PRODUCTS']),
    products(){
      return this.GET_PRODUCTS
    }
  }
}
</script>
