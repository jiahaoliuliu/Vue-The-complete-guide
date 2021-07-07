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
        setName(event) {
            this.name = event.target.value
        },
        submitForm(event) {
            alert('Submitted!');
        },
        confirmInput() {
            this.confirmedName = this.name
        },
        resetInput() {
            this.name = '';
            this.confirmedName = '';
        }
    },
});

app.mount('#events');