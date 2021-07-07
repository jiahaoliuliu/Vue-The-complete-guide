const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: ''
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
        resetInput() {
            this.name = '';
        },
        outputFullname() {
            if (this.name === '') {
                return '';
            }
            return this.name + " liu";
        }
    },
});

app.mount('#events');