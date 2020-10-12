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


{{ this.frachtbrief }}
 
        
<em v-if="frachtbrief.loading">Loading users...</em>
<form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="adresse">Zieladresse</label>
                <input type="text" v-model="frachtbrief.adresse" value="default value" class="form-control" :disabled="frachtbrief.pdf_id != null"/>
                
            </div>
            <div class="form-group">
                <label for="wagenummer">Wagennummer</label>
                <input type="text" v-model="frachtbrief.wagenummer" class="form-control" :disabled="frachtbrief.pdf_id != null"/>
                
            </div>

            <div class="form-group">
                <button class="btn btn-primary" :disabled="frachtbrief.pdf_id != null" >Update</button>
              
            </div>
            <em v-if="frachtbrief.pdf_id == null"><button class="btn btn-primary" >PDF generieren</button></em>
            <em v-if="frachtbrief.pdf_id != null"><button class="btn btn-primary" >PDF anzeigen</button></em>



</form>


    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            test: {
            loading: null
            },
            
        }

    },
    computed: {
        ...mapState({
            
            frachtbrief: state => state.frachtbrief.all.items
        })
    },
    created () {
        
        this.getById(this.$route.params.id)
        
        
    },
    mounted() {

       
  
},
    methods: {
        
        
        
       ...mapActions( 'frachtbrief', ['getById']
        ),
        ...mapActions( 'frachtbrief', ['update']
        ),
        handleSubmit(e) {
            
                    this.update(this.frachtbrief);
              
        }

        
    }
};
</script>