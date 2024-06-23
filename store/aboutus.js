import {defineStore} from 'pinia'
// const {baseurl} =useRuntimeConfig().public
export const useAboutUsStore = defineStore('useAboutUS', {
    state: () => {
        return {
            aboutUs:"",
            teams:'',
            faq:'',
            jobOffers:''
        }
    },
    getters: {
        getAboutUSData(state) {
            return state.aboutUs
        },
        getTeamData(state) {
            return state.teams
        },
        getFaqData(state) {
            return state.faq
        },
        getJobOffersData(state) {
            return state.jobOffers
        },
    },
    actions:{
        async fetchAboutUsData() {
            const {
                data,
                error,
                status
            } = await useAsyncData('aboutUs', () => $fetch(`https://minimal.foodavaran.com/api/settings`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.aboutUs = data.value.data.settings
            }
        },
        async fetchTeamsData() {
            const {
                data,
                error,
                status
            } = await useAsyncData('teams', () => $fetch(`https://minimal.foodavaran.com/api/teams`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.teams = data.value.data.teams
            }
        },
        async fetchFaqData() {
            const {
                data,
                error,
                status
            } = await useAsyncData('faq', () => $fetch(`https://minimal.foodavaran.com/api/faq`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.faq = data.value.data.asks
            }
        },
        async fetchJobOffersData() {
            const {
                data,
                error,
                status
            } = await useAsyncData('jobOffers', () => $fetch(`https://minimal.foodavaran.com/api/joboffers`))
            if (error.value) {
                console.log(error.value)
            }
            if (status.value === 'success') {
                this.jobOffers = data.value.data.jobOffers
            }
        },
    },
})