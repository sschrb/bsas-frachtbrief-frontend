<template>
    <div>








 <form @submit.prevent="handleSubmit">

<label for="adresse">Ladegut</label>



<select v-on:click="clearNachricht()" class="form-control" v-model="ladegut">
        <option v-bind:value="ladegut_def">neu anlegen</option>
        <option v-for="ladegut in ladegueter" v-bind:value="ladegut" v-bind:key="ladegut.id">{{ ladegut.bezeichnung }}</option>
    </select>



   



            <div class="form-group">
                <label for="wagenummer">Bezeichnung</label>
                <input type="text" v-model="ladegut.bezeichnung" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bemerkung</label>
                <input type="text" v-model="ladegut.bemerkung" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Dichte</label>
                <input type="text" v-model="ladegut.dichte" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">RID</label>
                <input type="text" v-model="ladegut.rid" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">NHM Code</label>
                <input type="text" v-model="ladegut.nhm" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Wagentyp</label>
                <input type="text" v-model="ladegut.wagentyp" class="form-control"/>
                
            </div>

            

           

            <div class="form-group">
                <em v-if="ladegut.id == null"><button class="btn btn-primary" v-on:click="anlegen">Anlegen</button></em>
                
              
            </div>
            <em v-if="ladegut.id != null"><button class="btn btn-primary" v-on:click="updaten">Update</button></em>
            <em v-if="ladegut.id != null"><button class="btn btn-danger" v-on:click="loeschen">Löschen</button></em>
            



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

            ladegut_def: {
                bezeichnung: "",
                bemerkung: "",
                dichte: "",
                rid: "",
                nhm: "",
                wagentyp: ""
                
               
               
            },
            
            ladegut: {
                bezeichnung: "",
                bemerkung: "",
                dichte: "",
                rid: "",
                nhm: "",
                wagentyp: ""
               
               
               
            },
            
            
        }
    },
computed: {
        ...mapState('ladegut', ['status']),
    
     ...mapState({
           
            ladegueter: state => state.ladegut.all.items,
           message: state => state.ladegut.message,
           nachricht: state => state.ladegut.nachricht
            
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
        ...mapActions('ladegut', ['create']),
        ...mapActions('ladegut', ['getAll']),
         ...mapActions('ladegut', ['delete']),
         ...mapActions('ladegut', ['update']),

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
this.create(this.ladegut)
        },
        updaten(){
this.update(this.ladegut)
        },

        loeschen(){
this.delete(this.ladegut.id).then(() => {this.ladegut = this.ladegut_def})
        },
         clearNachricht(){
            this.$store.state.ladegut.nachricht = {};
            console.log('clear')
        }


       
        
    }
};
</script>