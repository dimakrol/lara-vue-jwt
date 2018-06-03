<template>
    <div>
        <h1>Notes List</h1>
        <ul>
            <li v-for="note in notes">
                {{note.title}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {

        }
    },
    methods: {
    },
    mounted() {
        this.$store.dispatch('fetch');
    },
    computed: {
        ...mapState(['notes']),
    }
}
</script>