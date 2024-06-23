import {defineStore} from 'pinia'
export const useProductsStore = defineStore('useProducts', {
    state: () => {
        return {
            products:"",
            productsNavbar:""
        }
    },
    getters: {
        getProductsData(state) {
            return state.products
        },
        getProductsNavbar(state) {
            return state.productsNavbar
        },
    },
    actions: {
        async fetchProductsData() {
            const {
                data,
                error,
                status
            } = await useAsyncData('products', () => $fetch(`https://minimal.foodavaran.com/api/products`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.products = data.value.data;
                console.log(this.products)
            }
        },
        async fetchWeblogNavbar() {
            const {
                data,
                error,
                status
            } = await useAsyncData('productsNavbar', () => $fetch(`https://minimal.foodavaran.com/api/products`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.productsNavbar = data.value.data.categories;
                console.log(this.productsNavbar)
            }
        },
    },
})