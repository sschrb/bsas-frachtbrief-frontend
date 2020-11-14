<template>
    <div>








 <form @submit.prevent="handleSubmit">

<label for="adresse">Bahnhof</label>



<select class="form-control" v-model="bahnhof">
        <option v-bind:value="bahnhof_def">neu anlegen</option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
    </select>



   



            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="bahnhof.name" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bahnhofscode</label>
                <input type="text" v-model="bahnhof.bahnhofscode" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ländercode</label>
                <input type="text" v-model="bahnhof.laendercode" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Land</label>
                <input type="text" v-model="bahnhof.land" class="form-control"/>
                
            </div>

           

            <div class="form-group">
                <em v-if="bahnhof.id == null"><button class="btn btn-primary" v-on:click="anlegen">Anlegen</button></em>
                
              
            </div>
            <em v-if="bahnhof.id != null"><button class="btn btn-primary" v-on:click="updaten">Update</button></em>
            <em v-if="bahnhof.id != null"><button class="btn btn-primary" v-on:click="loeschen">Löschen</button></em>



</form>








        
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import "vue-select/dist/vue-select.css";


export default {

    data () {
        return {

            bahnhof_def: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            
            bahnhof: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            
            
        }
    },
computed: {
        ...mapState('bahnhof', ['status']),
    
     ...mapState({
           
            bahnhoefe: state => state.bahnhof.all.items,
           message: state => state.bahnhof.message
            
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
        ...mapActions('bahnhof', ['create']),
        ...mapActions('bahnhof', ['getAll']),
         ...mapActions('bahnhof', ['delete']),
         ...mapActions('bahnhof', ['update']),

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
this.create(this.bahnhof)
        },
        updaten(){
this.update(this.bahnhof)
        },

        loeschen(){
this.delete(this.bahnhof.id).then(() => {this.bahnhof = this.bahnhof_def})
        },

       
        
    }
};
</script>