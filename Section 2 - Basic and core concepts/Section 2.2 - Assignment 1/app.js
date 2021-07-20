const app = Vue.createApp({
    data() {
        return {
            age: 37,
            name: "Jiahao",
            imageUrl: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
        }
    },
    methods: {
        favouriteNumber() {
            return Math.random();
        }
    },
});

app.mount("#assignment");