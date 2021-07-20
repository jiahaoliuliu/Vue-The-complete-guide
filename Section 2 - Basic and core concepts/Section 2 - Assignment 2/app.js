const app = Vue.createApp({
    data() {
        return {
            content: "output",
            tmpValue: '',
            finalValue: ''
        };
    },
    methods: {
        showAlert() {
            alert("How are you doing?");
        },
        saveContent(event) {
            this.content = event.target.value;
        },
        saveTmpValue(event) {
            this.tmpValue = event.target.value;
        },
        showFinalValue() {
            this.finalValue = this.tmpValue;
        }
    },
});

app.mount('#assignment');