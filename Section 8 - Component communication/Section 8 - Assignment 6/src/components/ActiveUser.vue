// ActiveUser should output a username (h2) and age (h3)

<template>
    <div>
        <h2>User name: {{name}}</h2>
        <h3>Age: {{age}}</h3>
    </div>
</template>

<script>
export default {
    props: ['name', 'age']
}
</script>
