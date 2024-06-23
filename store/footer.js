import {defineStore} from 'pinia'
export const useFooterStore = defineStore('usefooter', {
    state: () => {
        return {
            footer:"",
            footerNavbar:""
        }
    },
    getters: {
        getFooterData(state) {
            return state.footer
        },
        getFooterNavbar(state) {
            return state.footerNavbar
        },
    },
    actions: {
        async fetchFooterData() {
            const {
                data,
                error,
                status
            } = await useAsyncData('footer', () => $fetch(`https://minimal.foodavaran.com/api/settings`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.footer = data.value.data.settings;
            }
        },
        async fetchFooterNavbar() {
            const {
                data,
                error,
                status
            } = await useAsyncData('footerNavbar', () => $fetch(`https://minimal.foodavaran.com/api/products`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.footerNavbar = data.value.data.categories;
            }
        },
    },
})