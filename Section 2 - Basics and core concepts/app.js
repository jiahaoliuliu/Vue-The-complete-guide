const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org'
        };
    }
});

// Se the unique id of the part we want to control
app.mount('#user-goal');