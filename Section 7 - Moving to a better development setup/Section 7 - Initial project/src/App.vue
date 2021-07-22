<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <li></li>
        </ul>
    </section>
</template>

<script>
// The default element to be exported
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 45678 900',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '9876 5432 12',
                    email: 'julie@localhost.com'
                }
            ]
        }
    }
};
</script>