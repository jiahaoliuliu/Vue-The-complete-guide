const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            lastname: ''
                // fullname: ''
        };
    },
    watch: {
        // // Whenever the data 'name' changes, this method will be executed
        // name(value) {
        //     if (value === '') {
        //         this.fullname = ''
        //     } else {
        //         this.fullname = value + ' ' + this.lastname;
        //     }
        // },
        // lastname(value) {
        //     if (value === '') {
        //         this.fullname = ''
        //     } else {
        //         this.fullname = this.name + ' ' + value;
        //     }
        // }
        counter(value) {
            // Start a timer of 2 seconds that resets counter if the value execeds 50
            if (value > 50) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0;
                }, 2000)
            }
        }
    },
    computed: {
        fullname() {
            console.log("Running again in computed properties");
            if (this.name === '' || this.lastname === '') {
                return '';
            }
            return this.name + ' ' + this.lastname;
        }
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