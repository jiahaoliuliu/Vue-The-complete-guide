<template>
<form @submit.prevent="submitData">
    <div>
        <label>Name: </label>
        <input type="text" v-model='enteredName'>
    </div>
    <div>
        <label>Age: </label>
        <input type="text" v-model='enteredAge'>
    </div>
    <button>Submit</button>
    </form>
</template>

<script>
// UserData should output two input fields => for name and age
export default {
    emit: ['entered-user-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        submitData() {
            this.$emit('entered-user-data', this.enteredName, this.enteredAge);
        }
    }
}
</script>