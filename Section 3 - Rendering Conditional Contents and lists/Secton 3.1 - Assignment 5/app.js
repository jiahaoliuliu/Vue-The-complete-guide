const app = Vue.createApp({
    data() {
        return {
            inputTask: '',
            myTasksList: [],
            showList: true
        }
    },
    methods: {
        addTask() {
            this.myTasksList.push(this.inputTask);
        },
        toggleListVisibility() {
            this.showList = !this.showList;
        }
    },
    computed: {
        showListButton() {
            if (this.showList) {
                return "Hide list";
            } else {
                return "Show list";
            }
        }
    }

});

app.mount('#assignment');