<template>
    <div>








 <button class="btn btn-primary" v-on:click="bahnhofview = !bahnhofview">Bahnhöfe</button>
 <em v-if="bahnhofview">
            <Bahnhof />
</em>
 







        
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import "vue-select/dist/vue-select.css";


export default {

    data () {
        return {
            bahnhofview: false,
            frachtbrief: {
                adresse: '',
                adresseview: false,
                wagenummer: '',
                bahnhof: '',
                laendercode: '',
                land: ''
               
            },
            adressen: [
              {
                id: "1",
                name: "neu anlegen"
            },
                
             {
                id: "2",
                name: "Teststr. 7, 12345 Dorf"
            },
            {
                id: "3",
                name: "Weg. 5, 12345 Stadt"
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