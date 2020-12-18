<template>
    <div>








 <form @submit.prevent="handleSubmit">

<label for="adresse">Adresse</label>



<select v-on:click="clearNachricht()" class="form-control" v-model="adresse">
        <option v-bind:value="adresse_def">neu anlegen</option>
        <option v-for="adresse in adressen" v-bind:value="adresse" v-bind:key="adresse.id">{{ adresse.name }}</option>
    </select>



   



            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="adresse.name" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Straße und Hausnummer</label>
                <input type="text" v-model="adresse.strasse" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ort und PLZ</label>
                <input type="text" v-model="adresse.ort" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">E-Mailadresse</label>
                <input type="text" v-model="adresse.mail" class="form-control"/>
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Telefonnummer</label>
                <input type="text" v-model="adresse.telefon" class="form-control"/>
                
            </div>

           

            <div class="form-group">
                <em v-if="adresse.id == null"><button class="btn btn-primary" v-on:click="anlegen">Anlegen</button></em>
                
              
            </div>
            <em v-if="adresse.id != null"><button class="btn btn-primary" v-on:click="updaten">Update</button></em>
            <em v-if="adresse.id != null"><button class="btn btn-danger" v-on:click="loeschen">Löschen</button></em>



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

            adresse_def: {
                name: '',
                strasse: '',
                ort: '',
                mail: '',
                telefon: ''
               
               
            },
            
            adresse: {
                name: '',
                strasse: '',
                ort: '',
                mail: '',
                telefon: ''
               
               
            },
            
            
        }
    },
computed: {
        ...mapState('adresse', ['status']),
    
     ...mapState({
           
            adressen: state => state.adresse.all.items,
           message: state => state.adresse.message,
           nachricht: state => state.adresse.nachricht
            
        }),
    
  
     
    
    },
      mounted () {
        this.getAll();
        console.log('mount')
    },
    beforeUpdate () {
        if(this.message){this.getAll(); }

        
    },
    methods: {
        ...mapActions('adresse', ['create']),
        ...mapActions('adresse', ['getAll']),
         ...mapActions('adresse', ['delete']),
         ...mapActions('adresse', ['update']),

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
this.create(this.adresse)
        },
        updaten(){
this.update(this.adresse)
        },

        loeschen(){
this.delete(this.adresse.id).then(() => {this.adresse = this.adresse_def})
        },

        clearNachricht(){
            this.$store.state.adresse.nachricht = {};
            console.log('clear')
        }

       
        
    }
};
</script>