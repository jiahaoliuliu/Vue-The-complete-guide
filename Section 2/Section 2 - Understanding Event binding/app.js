const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            fullname: ''
        };
    },
    watch: {
        // Whenever the data 'name' changes, this method will be executed
        name(value) {
            if (value === '') {
                this.fullname = ''
            } else {
                this.fullname = value + ' ' + 'Liu';
            }
        }
    },
    computed: {
        // fullname() {
        //     console.log("Running again in computed properties");
        //     if (this.name === '') {
        //         return '';
        //     }
        //     return this.name + " liu";
        // }
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
            console.log("Running again...");
            if (this.name === '') {
                return '';
            }
            return this.name + " liu";
        },
    },
});

app.mount('#events');