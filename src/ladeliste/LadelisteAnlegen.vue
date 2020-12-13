<template>
    <div>






<label for="adresse">Referenz Nummer</label>
<div class="form-group">
               
                <input type="text" v-model="ladelistedata.refnr" class="form-control" />
                
            </div>

<br>
<br>

<div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Ladegut 1</label>



<select class="form-control" v-model="ladelistedata.ladegut1.ladegut">
      
        <option v-for="ladegut in ladegueter" v-bind:value="ladegut" v-bind:key="ladegut.id">{{ ladegut.bezeichnung }}</option>
    </select>





<div id=app>
  <div class="form-group" v-for="(input,k) in ladelistedata.ladegut1.wagen" :key="k">

    <div class="row">
        <div class="col-8">Wagennummer</div>
        <div class="col-4">Liter</div>
        <div class="col-8"><select class="form-control" v-model="input.wagendaten">
        
        <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
    </select></div>
        <div class="col-4"><input type="text" class="form-control" v-model="input.liter"></div>
    </div>


    
    <span>
      <i @click="remove1(k)" v-show="k || ( !k && ladelistedata.ladegut1.wagen.length > 1)">Remove</i>
      <i @click="add1(k)" v-show="k == ladelistedata.ladegut1.wagen.length-1">Add fields</i>
    </span>
  </div>

</div>

</div>
<br>
<br>

<div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Ladegut 2</label>



<select class="form-control" v-model="ladelistedata.ladegut2.ladegut">
      
        <option v-for="ladegut in ladegueter" v-bind:value="ladegut" v-bind:key="ladegut.id">{{ ladegut.bezeichnung }}</option>
    </select>





<div id=app>
  <div class="form-group" v-for="(input,k) in ladelistedata.ladegut2.wagen" :key="k">

    <div class="row">
        <div class="col-8">Wagennummer</div>
        <div class="col-4">Liter</div>
        <div class="col-8"><select class="form-control" v-model="input.wagendaten">
        
        <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
    </select></div>
        <div class="col-4"><input type="text" class="form-control" v-model="input.liter"></div>
    </div>


    
    <span>
      <i @click="remove2(k)" v-show="k || ( !k && ladelistedata.ladegut1.wagen.length > 1)">Remove</i>
      <i @click="add2(k)" v-show="k == ladelistedata.ladegut1.wagen.length-1">Add fields</i>
    </span>
  </div>

</div>

</div>
<br>
<br>








<div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Ladegut 3</label>



<select class="form-control" v-model="ladelistedata.ladegut3.ladegut">
      
        <option v-for="ladegut in ladegueter" v-bind:value="ladegut" v-bind:key="ladegut.id">{{ ladegut.bezeichnung }}</option>
    </select>





<div id=app>
  <div class="form-group" v-for="(input,k) in ladelistedata.ladegut3.wagen" :key="k">

    <div class="row">
        <div class="col-8">Wagennummer</div>
        <div class="col-4">Liter</div>
        <div class="col-8"><select class="form-control" v-model="input.wagendaten">
        
        <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
    </select></div>
        <div class="col-4"><input type="text" class="form-control" v-model="input.liter"></div>
    </div>


    
    <span>
      <i @click="remove3(k)" v-show="k || ( !k && ladelistedata.ladegut1.wagen.length > 1)">Remove</i>
      <i @click="add3(k)" v-show="k == ladelistedata.ladegut1.wagen.length-1">Add fields</i>
    </span>
  </div>

</div>

</div>
<br>
<br>








             <div class="form-group">
                <button class="btn btn-primary" v-on:click="saveLadeliste()" >Speichern</button>
                
              
            </div>









        
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import "vue-select/dist/vue-select.css";

import { Datetime } from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'




export default {

    data () {
        return { ladelistedata: {

                                    refnr: '',


                                    ladegut1: {
                                        ladegut: {},
                                        wagen:[{
                                            liter: '',
                                            wagendaten: [{
                                                wagennummer: '',
                                                halter: '',
                                                achsanzahl: '',
                                                eigengewicht: ''


                                            }

                                            ]
                                        }]

                                    },
                                    ladegut2: {
                                        
                                        ladegut: {},
                                        wagen:[{
                                            liter: '',
                                            wagendaten: [{
                                                wagennummer: '',
                                                halter: '',
                                                achsanzahl: '',
                                                eigengewicht: ''


                                            }

                                            ]
                                        }]


                                    },
                                    ladegut3: {

                                        ladegut: {},
                                        wagen:[{
                                            liter: '',
                                            wagendaten: [{
                                                wagennummer: '',
                                                halter: '',
                                                achsanzahl: '',
                                                eigengewicht: ''


                                            }

                                            ]
                                        }]


                                    },



        }
            
        }
    },
computed: {
        ...mapState('frachtbrief', ['status']),
        ...mapState('bahnhof', ['status']),
    
     ...mapState({
           
            bahnhoefe: state => state.bahnhof.all.items,
            evus: state => state.evu.all.items,
            adressen: state => state.adresse.all.items,
            erklarungen: state => state.erklarung.all.items,
            ladegueter: state => state.ladegut.all.items,
            wagendatens: state => state.wagendaten.all.items,
            message: state => state.bahnhof.message
            
        }),
    },
    mounted () {
       
this.getAllWagendaten(),
this.getAllLadegut(),
        console.log('mount')
    },
    methods: {
        
        ...mapActions('ladegut', {getAllLadegut: 'getAll'}),
        ...mapActions('wagendaten', {getAllWagendaten: 'getAll'}),

        ...mapActions('bahnhof', ['create']),
        ...mapActions('bahnhof', {getAllBahnhof: 'getAll'}),
        ...mapActions('evu', {getAllEvu: 'getAll'}),
        ...mapActions('adresse', {getAllAdresse: 'getAll'}),
        ...mapActions('erklarung', {createErklarung: 'create'}),
        ...mapActions('erklarung', {getAllErklarung: 'getAll'}),

         ...mapActions('bahnhof', ['delete']),
         ...mapActions('bahnhof', ['update']),
        ...mapActions('frachtbrief', {createFrachtbrief: 'create'}),
        ...mapActions('ladeliste', {createLadeliste: 'create'}),
        handleSubmit(e) {
            //this.submitted = true;
           
        },

        add1 () {
      this.ladelistedata.ladegut1.wagen.push({
                                                liter: '',
                                                wagendaten: {}
      })
      console.log(this.inputs)
    },

    remove1 (index) {
      this.ladelistedata.ladegut1.wagen.splice(index, 1)
    },

    add2 () {
      this.ladelistedata.ladegut2.wagen.push({
                                                liter: '',
                                                wagendaten: {}
      })
      console.log(this.inputs)
    },

    remove2 (index) {
      this.ladelistedata.ladegut2.wagen.splice(index, 1)
    },

    add3 () {
      this.ladelistedata.ladegut3.wagen.push({
                                                liter: '',
                                                wagendaten: {}
      })
      console.log(this.inputs)
    },

    remove3 (index) {
      this.ladelistedata.ladegut3.wagen.splice(index, 1)
    },

saveLadeliste(){





this.createLadeliste(this.$data);


setTimeout(() => this.$router.push('/history') , 3000);

},

        aBefordererVorschlag() {





if(this.evu2.name==''){
    this.aBeforderer1.name=this.evu1.name;
    this.aBeforderer1.strecke=this.bahnhof1.name + ' - ' + this.bahnhof7.name;
} 

if(this.evu2.name!='' && this.evu3.name==''){
    this.aBeforderer1.name=this.evu1.name;
    this.aBeforderer1.strecke=this.bahnhof1.name + ' - ' + this.bahnhof2.name;

    this.aBeforderer2.name=this.evu2.name;
    this.aBeforderer2.strecke=this.bahnhof2.name + ' - ' + this.bahnhof7.name;

}

if(this.evu2.name!='' && this.evu3.name!='' && this.evu4.name==''){
    this.aBeforderer1.name=this.evu1.name;
    this.aBeforderer1.strecke=this.bahnhof1.name + ' - ' + this.bahnhof2.name;

    this.aBeforderer2.name=this.evu2.name;
    this.aBeforderer2.strecke=this.bahnhof2.name + ' - ' + this.bahnhof3.name;

    this.aBeforderer3.name=this.evu3.name;
    this.aBeforderer3.strecke=this.bahnhof3.name + ' - ' + this.bahnhof7.name;

}

if(this.evu2.name!='' && this.evu3.name!='' && this.evu4.name!='' && this.evu5.name==''){
    this.aBeforderer1.name=this.evu1.name;
    this.aBeforderer1.strecke=this.bahnhof1.name + ' - ' + this.bahnhof2.name;

    this.aBeforderer2.name=this.evu2.name;
    this.aBeforderer2.strecke=this.bahnhof2.name + ' - ' + this.bahnhof3.name;

    this.aBeforderer3.name=this.evu3.name;
    this.aBeforderer3.strecke=this.bahnhof3.name + ' - ' + this.bahnhof4.name;

    this.aBeforderer4.name=this.evu4.name;
    this.aBeforderer4.strecke=this.bahnhof4.name + ' - ' + this.bahnhof7.name;

}

if(this.evu2.name!='' && this.evu3.name!='' && this.evu4.name!='' && this.evu5.name!='' && this.evu6.name==''){
    this.aBeforderer1.name=this.evu1.name;
    this.aBeforderer1.strecke=this.bahnhof1.name + ' - ' + this.bahnhof2.name;

    this.aBeforderer2.name=this.evu2.name;
    this.aBeforderer2.strecke=this.bahnhof2.name + ' - ' + this.bahnhof3.name;

    this.aBeforderer3.name=this.evu3.name;
    this.aBeforderer3.strecke=this.bahnhof3.name + ' - ' + this.bahnhof4.name;

    this.aBeforderer4.name=this.evu4.name;
    this.aBeforderer4.strecke=this.bahnhof4.name + ' - ' + this.bahnhof5.name;

    this.aBeforderer5.name=this.evu5.name;
    this.aBeforderer5.strecke=this.bahnhof5.name + ' - ' + this.bahnhof7.name;

}

if(this.evu2.name!='' && this.evu3.name!='' && this.evu4.name!='' && this.evu5.name!='' && this.evu6.name!=''){
    this.aBeforderer1.name=this.evu1.name;
    this.aBeforderer1.strecke=this.bahnhof1.name + ' - ' + this.bahnhof2.name;

    this.aBeforderer2.name=this.evu2.name;
    this.aBeforderer2.strecke=this.bahnhof2.name + ' - ' + this.bahnhof3.name;

    this.aBeforderer3.name=this.evu3.name;
    this.aBeforderer3.strecke=this.bahnhof3.name + ' - ' + this.bahnhof4.name;

    this.aBeforderer4.name=this.evu4.name;
    this.aBeforderer4.strecke=this.bahnhof4.name + ' - ' + this.bahnhof5.name;

    this.aBeforderer5.name=this.evu5.name;
    this.aBeforderer5.strecke=this.bahnhof5.name + ' - ' + this.bahnhof6.name;

    this.aBeforderer6.name=this.evu6.name;
    this.aBeforderer6.strecke=this.bahnhof6.name + ' - ' + this.bahnhof7.name;

}


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

<style>
@import '/node_modules/vue-datetime/dist/vue-datetime.css';

</style>