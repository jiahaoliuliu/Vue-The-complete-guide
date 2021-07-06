const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        addCounter(num) {
            this.counter = this.counter + num;
        },
        removeCounter(num) {
            this.counter = this.counter - num;
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName
        },
        submitForm(event) {
            alert('Submitted!');
        },
        confirmInput() {
            this.confirmedName = this.name
        }
    },
});

app.mount('#events');