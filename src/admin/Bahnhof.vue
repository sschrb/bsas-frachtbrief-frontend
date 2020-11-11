<template>
    <div>








 <form @submit.prevent="handleSubmit">

<label for="adresse">Bahnhof</label>



<select class="form-control" v-model="bahnhof">
        <option >neu anlegen</option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.name">{{ bahnhof.name }}</option>
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
                <button class="btn btn-primary" >Speichern</button>
                
              
            </div>



</form>








        
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import "vue-select/dist/vue-select.css";


export default {

    data () {
        return {
            bahnhof: {
               
               
               
            },
            bahnhoefe: [
              {
                id: "1",
                name: "neuHof",
                bahnhofscode: '111',
                laendercode: '',
                land: ''
            },
                
             {
                id: "2",
                name: "Testbahnhof",
                bahnhofscode: '222',
                laendercode: '',
                land: ''
            },
            {
                id: "3",
                name: "Bahnsteig",
                bahnhofscode: '333',
                laendercode: '',
                land: ''
            }
            ]
            
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
        },
        changeAdress() {
            if(this.frachtbrief.adresseform==this.adressen[0].name){
                this.frachtbrief.adresseview=true;
            } else {
                this.frachtbrief.adresseview=false;
            }
            this.frachtbrief.adresse=this.frachtbrief.adresseform;

        },
        bahnhofscodeChange() {
        if(this.frachtbrief.bahnhofscode.charAt(0).toUpperCase()=='O'){
            this.frachtbrief.laendercode = '81';
            this.frachtbrief.land = "Österreich";


        } else {
            this.frachtbrief.laendercode = '80';
            this.frachtbrief.land = "Deutschland";
        }
    }
    }
};
</script>