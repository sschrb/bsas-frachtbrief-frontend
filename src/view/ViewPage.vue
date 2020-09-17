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
<p>
            {{fbrief.items}}
        </p>

<p>
            {{frachtbrief.wagenummer=fbrief.items.wagenummer}}
        </p>

        <p>
            {{frachtbrief.adresse=fbrief.items.adresse}}
        </p>
       


 <h1>Hi !</h1>
        

<form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="adresse">Zieladresse</label>
                <input type="text" v-model="frachtbrief.adresse" value="default value" class="form-control"/>
                
            </div>
            <div class="form-group">
                <label for="wagenummer">Wagennummer</label>
                <input type="text" v-model="frachtbrief.wagenummer" class="form-control"/>
                
            </div>

            <div class="form-group">
                <button class="btn btn-primary" >Update</button>
              
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
        ...mapState({
            
            fbrief: state => state.frachtbrief.all
        })
    },
    created () {
        
        this.getById(this.$route.params.id);
        
        
    },
    methods: {
        
        
        
       ...mapActions( 'frachtbrief', ['getById']
        ),
    }
};
</script>