import {defineStore} from 'pinia'
// const {baseurl} =useRuntimeConfig().public
export const useContactUsStore = defineStore('useContactUS', {
    state: () => {
        return {
            contactUs:"",
        }
    },
    getters: {
        getContactUsData(state) {
            return state.contactUs
        }
    },
    actions:{
        async fetchContactUsData() {
            const {
                data,
                error,
                status
            } = await useAsyncData('jobOffers', () => $fetch(`https://minimal.foodavaran.com/api/settings`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.contactUs = data.value.data.settings
            }
        },
    },
})