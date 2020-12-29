<template>
  <div>
    <div class="card mb-2">
      <div class="card-header">
        <h3>Frachtbriefe</h3>
      </div>
      <div class="card-body">
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
      </div>
    </div>



    <div class="card mb-2">
      <div class="card-header">
        <h3>Ladelisten</h3>
      </div>
      <div class="card-body">
        <em v-if="users.loading">Loading...</em>
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <ul v-if="ladeliste.items">
          <li v-for="fbrief in ladeliste.items" :key="fbrief.id">
            {{fbrief.ladelistedata.refnr}}
            <span v-if="fbrief.deleting"><em> - Deleting...</em></span>
            <span v-else-if="fbrief.deleteError" class="text-danger"> - ERROR: {{fbrief.deleteError}}</span>
            <span v-else> - <a class="text-danger"><router-link v-bind:to="'/ladeliste/' + fbrief.id">Anzeigen</router-link></a></span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'


export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all,
            frachtbrief: state => state.frachtbrief.all,
            ladeliste: state => state.ladeliste.all
        })
    },
    created () {
        this.getAllUsers();
        this.getAllFrachtbrief();
        this.getAllLadeliste();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        }),
        
        
       ...mapActions( 'frachtbrief', {
            getAllFrachtbrief: 'getAll',
            deleteFrachtbrief: 'delete'
        }),

        ...mapActions( 'ladeliste', {
            getAllLadeliste: 'getAll'
            
        })
    }
};
</script>