const app = Vue.createApp({
    data() {
        return {
            count: 0,
        }
    },
    computed: {
        result() {
            if (this.count < 37) {
                return "Not there yet!"
            } else if (this.count == 37) {
                return this.count;
            } else {
                return "Too much!";
            }
        }
    },
    watch: {
        // This points to the computed property, not to the data
        result() {
            const that = this;
            setTimeout(function() {
                that.count = 0;
            }, 5000);
        }
    },
    methods: {
        add(number) {
            this.count = this.count + number;
        }
    }
});

app.mount('#assignment');