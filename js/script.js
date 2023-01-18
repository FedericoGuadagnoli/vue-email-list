const app = Vue.createApp({
    data() {
        return {
            isLoading : false,
            listEmail : [],
            apiUri : 'https://flynn.boolean.careers/exercises/api/random/mail'        
        }
    },

    methods : {
        getRandomEmail() {
            this.isLoading = true;
            axios.get(this.apiUri).then(response => {
                this.listEmail.push(response.data.response);             
            });
        }
},

    mounted() {
        let i = 0
            do {
                i++;
                this.getRandomEmail();
            } while (i < 10)
        }
});

app.mount('#root');