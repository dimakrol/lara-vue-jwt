<template>
    <div>
        <h1>Laravel 5 – Our Cool Dashboard</h1>
        <p>Hello {{user.name}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user: {}
            }
        },
        methods: {
        },
        mounted() {
            console.log(this.$auth.user());
            this.user = this.$auth.user();
            this.$http.get('/notes');
        }
    }
</script>