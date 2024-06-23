import {defineStore} from 'pinia'
export const useWeblogStore = defineStore('useWeblog', {
    state: () => {
        return {
            weblog:"",
        }
    },
    getters: {
        getWeblogData(state) {
            return state.weblog
        },
    },
    actions: {
        async fetchWeblogData() {
            const {
                data,
                error,
                status
            } = await useAsyncData('weblog', () => $fetch(`https://minimal.foodavaran.com/api/posts`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.weblog = data.value.data;
                console.log(this.weblog)
            }
        },
    },
})