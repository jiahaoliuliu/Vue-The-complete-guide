const app = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: []
        };
    },
    methods: {
        addGoal() {
            // Adding the entered text into the goals list
            this.goals.push(this.enteredGoalValue);
        },
        removeGoal(index) {
            // This will remove one goal based on that index
            this.goals.splice(index, 1);
        }
    }
});

app.mount('#user-goals');