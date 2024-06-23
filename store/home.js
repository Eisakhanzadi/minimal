import {defineStore} from 'pinia'
export const useHomeStore = defineStore('useHome', {
    state: () => {
        return {
            home:"",
        }
    },
    getters: {
        getHomeData(state) {
            return state.home
        },
    },
    actions: {
        async fetchHomeData() {
            const {
                data,
                error,
                status
            } = await useAsyncData('home-index.js', () => $fetch(`https://minimal.foodavaran.com/api/home`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                console.log(data.value.slider)
                this.home = data.value.data;
                console.log(this.home)
            }
        },
    },
})