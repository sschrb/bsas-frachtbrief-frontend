<template>
    <div>








 <form @submit.prevent="handleSubmit">

<label for="adresse">EVU</label>



<select v-on:click="clearNachricht()" class="form-control" v-model="evu">
        <option v-bind:value="evu_def">neu anlegen</option>
        <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
    </select>







            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="evu.name" class="form-control"/>

            </div>

            <div class="form-group">
                <label for="wagenummer">Kurzbezeichnung</label>
                <input type="text" v-model="evu.short" class="form-control"/>

            </div>

            <div class="form-group">
                <label for="wagenummer">EVU Code</label>
                <input type="text" v-model="evu.code" class="form-control"/>

            </div>





            <div class="form-group">
                <em v-if="evu.id == null"><button class="btn btn-primary" v-on:click="anlegen">Anlegen</button></em>


            </div>
            <em v-if="evu.id != null"><button class="btn btn-success" v-on:click="updaten">Änderungen speichern</button></em>
            <em v-if="evu.id != null"><button class="btn btn-danger" v-on:click="loeschen">Löschen</button></em>




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

            evu_def: {
                name: "",
                short: '',
                code: '',



            },

            evu: {
                name: "",
                short: '',
                code: '',



            },


        }
    },
computed: {
        ...mapState('evu', ['status']),

     ...mapState({

            evus: state => state.evu.all.items,
           message: state => state.evu.message,
           nachricht: state => state.evu.nachricht

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
        ...mapActions('evu', ['create']),
        ...mapActions('evu', ['getAll']),
         ...mapActions('evu', ['delete']),
         ...mapActions('evu', ['update']),

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
this.create(this.evu)
        },
        updaten(){
this.update(this.evu)
        },

        loeschen(){
this.delete(this.evu.id).then(() => {this.evu = this.evu_def})
        },
        clearNachricht(){
            this.$store.state.evu.nachricht = {};
            console.log('clear')
        }



    }
};
</script>
