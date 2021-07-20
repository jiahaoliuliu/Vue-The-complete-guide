const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            paragraphVisible: true,
            inputBackgroundColor: ''
        };
    },
    computed: {
        paragraphClass() {
            if (this.userInput === 'user1') {
                return 'user1';
            } else if (this.userInput === 'user2') {
                return 'user2';
            }
        },
        paragraphVisibility() {
            if (this.paragraphVisible) {
                return 'visible';
            } else {
                return 'hidden';
            }
        }
    },
    methods: {
        checkUserInput(event) {
            this.userInput = event.target.value;
        },
        toggleVisibility() {
            this.paragraphVisible = !this.paragraphVisible;
        }
    }
});

app.mount('#assignment');