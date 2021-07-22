const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            // console.dir(this.$refs.userText);
            this.message = this.$refs.userText.value;
        },
    },
});

app.mount('#app');

const app2 = Vue.createApp({
    template: `
      <p>{{ favouriteMeal }}</p>
    `,
    data() {
        return {
            favouriteMeal: 'Pizza'
        }
    }
});

app2.mount('#app2');

// const data = {
//     message: 'Hello!'
// };

// const handler = {
//     // This is called trap
//     set(target, key, value) {
//         if (key === 'message') {
//             target.longMessage = value + ' World';
//         }
//         target.message = value;
//     }
// };

// const proxy = new Proxy(data, handler);

// proxy.message = 'Hello!!!!';

// console.log(proxy.longMessage);