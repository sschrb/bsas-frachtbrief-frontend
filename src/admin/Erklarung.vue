<template>
    <div>








 <form @submit.prevent="handleSubmit">

<label for="erklarung">Erklärungen</label>



<select class="form-control" v-model="erklarung">
        <option v-bind:value="erklarung_def">neu anlegen</option>
        <option v-for="erklarung in erklarungen" v-bind:value="erklarung" v-bind:key="erklarung.id">{{ erklarung.code }}</option>
    </select>



   



            <div class="form-group">
                <label for="wagenummer">Code mit Erläuterung</label>
                <textarea type="text" v-model="erklarung.code" class="form-control"/>
                
            </div>

            
           

            <div class="form-group">
                <em v-if="erklarung.id == null"><button class="btn btn-primary" v-on:click="anlegen">Anlegen</button></em>
                
              
            </div>
            <em v-if="erklarung.id != null"><button class="btn btn-primary" v-on:click="updaten">Update</button></em>
            <em v-if="erklarung.id != null"><button class="btn btn-primary" v-on:click="loeschen">Löschen</button></em>



</form>








        
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import "vue-select/dist/vue-select.css";


export default {

    data () {
        return {

            erklarung_def: {
                code: ''
               
               
            },
            
            erklarung: {
                code: ''
               
               
            },
            
            
        }
    },
computed: {
        ...mapState('erklarung', ['status']),
    
     ...mapState({
           
            erklarungen: state => state.erklarung.all.items,
           message: state => state.erklarung.message
            
        }),
    
  
     
    
    },
      mounted () {
        this.getAll();
        console.log('mount')
    },
    beforeUpdate () {
        if(this.message){this.getAll();
        console.log('update true')
        }

        console.log('update false')
    },
    methods: {
        ...mapActions('erklarung', ['create']),
        ...mapActions('erklarung', ['getAll']),
         ...mapActions('erklarung', ['delete']),
         ...mapActions('erklarung', ['update']),

        handleSubmit(e) {
            //this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    
                   
                    
                   // this.getAll();
    }
                    
                }
            )
        },
        anlegen(){
this.create(this.erklarung)
        },
        updaten(){
this.update(this.erklarung)
        },

        loeschen(){
this.delete(this.erklarung.id).then(() => {this.erklarung = this.erklarung_def})
        },

       
        
    }
};
</script>