<template>
    <div>
        <user-data @entered-user-data="updateUserData"></user-data>
        <active-user :name="userName" :age="userAge"></active-user>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: 'defaultName',
            userAge: 'defaultAge'
        }
    },
    methods: {
        updateUserData(enteredUserName, enteredUserAge) {
            this.userName = enteredUserName;
            this.userAge = enteredUserAge;
        }
    }
}
</script>