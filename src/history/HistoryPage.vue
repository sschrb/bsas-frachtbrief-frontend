<template>
    <div>
       





      


 
        <h3>Frachtbriefe:</h3>
        <em v-if="users.loading">Loading...</em>
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <ul v-if="frachtbrief.items">
            <li v-for="fbrief in frachtbrief.items" :key="fbrief.id">
                {{fbrief.frachtbriefdata.refnr}}
                <span v-if="fbrief.deleting"><em> - Deleting...</em></span>
                <span v-else-if="fbrief.deleteError" class="text-danger"> - ERROR: {{fbrief.deleteError}}</span>
                <span v-else> - <a class="text-danger"><router-link v-bind:to="'/frachtbrief/' + fbrief.id">Anzeigen</router-link></a></span>
            </li>
        </ul>
        <p>
            <router-link to="/login">Logout</router-link>
        </p>
    

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all,
            frachtbrief: state => state.frachtbrief.all
        })
    },
    created () {
        this.getAllUsers();
        this.getAllFrachtbrief();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        }),
        
        
       ...mapActions( 'frachtbrief', {
            getAllFrachtbrief: 'getAll',
            deleteFrachtbrief: 'delete'
        })
    }
};
</script>