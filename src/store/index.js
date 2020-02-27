import Vue from 'vue';
import Vuex from 'vuex';
import productListing from './productsModule';

Vue.use(Vuex)

export default new  Vuex.Store({
    state:{
    },
    getters:{

    },
    actions:{},
    mutations:{},
    modules:{productListing,
    },
})