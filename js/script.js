const app = Vue.createApp({
    data() {
        return {
            listEmail : [],
            apiUri : 'https://flynn.boolean.careers/exercises/api/random/mail'        
        }
    },

    methods : {
        getRandomEmail() {
            axios.get(this.apiUri).then(response => {
                this.listEmail.push(response.data.response);
            });
        }
    },

    mounted() {
        for(let i = 0; i < 15; i++) {
            this.getRandomEmail();
        }

    }
});

app.mount('#root');