<template>
    <div>








 <form @submit.prevent="handleSubmit">

<label for="adresse">Wagendaten</label>



<select v-on:click="clearNachricht()" class="form-control" v-model="wagendaten">
        <option v-bind:value="wagendaten_def">neu anlegen</option>
        <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
    </select>



   



            <div class="form-group">
                <label for="wagenummer">Wagennummer</label>
                <input type="text" v-model="wagendaten.wagennummer" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Halter</label>
                <input type="text" v-model="wagendaten.halter" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Achsanzahl</label>
                <input type="text" v-model="wagendaten.achsanzahl" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Eigengewicht</label>
                <input type="text" v-model="wagendaten.eigengewicht" class="form-control"/>
                
            </div>

           

            <div class="form-group">
                <em v-if="wagendaten.id == null"><button class="btn btn-primary" v-on:click="anlegen">Anlegen</button></em>
                
              
            </div>
            <em v-if="wagendaten.id != null"><button class="btn btn-primary" v-on:click="updaten">Update</button></em>
            <em v-if="wagendaten.id != null"><button class="btn btn-danger" v-on:click="loeschen">Löschen</button></em>
            



</form>
<em v-if="nachricht.text">
                    {{nachricht.text}}
                </em>







        
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import "vue-select/dist/vue-select.css";


export default {

    data () {
        return {

            wagendaten_def: {
                wagennummer: '',
                halter: '',
                achsanzahl: '',
                eigengewicht: ''
               
               
            },
            
            wagendaten: {
                wagennummer: '',
                halter: '',
                achsanzahl: '',
                eigengewicht: ''
               
               
            },
            
            
        }
    },
computed: {
        ...mapState('wagendaten', ['status']),
    
     ...mapState({
           
            wagendatens: state => state.wagendaten.all.items,
           message: state => state.wagendaten.message,
           nachricht: state => state.wagendaten.nachricht
            
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
        ...mapActions('wagendaten', ['create']),
        ...mapActions('wagendaten', ['getAll']),
         ...mapActions('wagendaten', ['delete']),
         ...mapActions('wagendaten', ['update']),

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
this.create(this.wagendaten)
        },
        updaten(){
this.update(this.wagendaten)
        },

        loeschen(){
this.delete(this.wagendaten.id).then(() => {this.wagendaten = this.wagendaten_def})
        },
         clearNachricht(){
            this.$store.state.wagendaten.nachricht = {};
            console.log('clear')
        }

       
        
    }
};
</script>