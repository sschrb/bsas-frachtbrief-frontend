<template>
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="navbar-brand" href="#"><router-link to="/">Frachtbrief anlegen</router-link></a>
            </li>
            <li class="nav-item">
                <a class="navbar-brand" href="#"><router-link to="/history">Historie</router-link></a>
            </li>            
        </ul>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link to="/login">Logout</router-link>
            </li>
        </ul>
    </div>
</nav>









 <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="adresse">Zieladresse</label>
                <input type="text" v-model="frachtbrief.adresse" class="form-control"/>
                
            </div>
            <div class="form-group">
                <label for="wagenummer">Wagennummer</label>
                <input type="text" v-model="frachtbrief.wagenummer" class="form-control"/>
                
            </div>

            <div class="form-group">
                <button class="btn btn-primary" >Speichern</button>
                
              
            </div>



</form>








        
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

    data () {
        return {
            frachtbrief: {
                adresse: '',
                wagenummer: ''
               
            },
            
        }
    },
computed: {
        ...mapState('frachtbrief', ['status'])
    },
    methods: {
        ...mapActions('frachtbrief', ['create']),
        handleSubmit(e) {
            //this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.create(this.frachtbrief);
                    this.$router.push('/history');
                }
            });
        }
    }
};
</script>