<template>
  <div>

    <div class="card mb-2">
      <div class="card-body">
        <div class="form-group">
          <label for="adresse">Referenz Nummer (Name der Ladeliste)</label>
          <input type="text" v-model="ladeliste.ladelistedata.refnr" class="form-control" />
        </div>
      </div>
    </div>


    <!-- ############################################################ 1. LADEGUT ############################################################ -->
    <div class="card mb-5">
      <div class="card-header">
        <label for="adresse">Ladegut 1</label>

        <select class="form-control" v-model="ladeliste.ladelistedata.ladegut1.ladegut">

          <option v-for="ladegut in ladegueter" v-bind:value="ladegut" v-bind:key="ladegut.id">{{ ladegut.bezeichnung }}</option>
        </select>

      </div>
      <div class="card-body">


        <div class="row mb-2">
          <div class="col-6">Wagennummer</div>
          <div class="col-4">Liter</div>
        </div>

        <div id=app>
          <div class="form-group" v-for="(input,k) in ladeliste.ladelistedata.ladegut1.wagen" :key="k">

            <div class="row">
              <div class="col-6"><select class="form-control" v-model="input.wagendaten">
                <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
              </select></div>
              <div class="col-4"><input type="text" class="form-control" v-model="input.liter"></div>

              <div class="col-1"><button type="button" class="btn btn-success" @click="add1(k)" v-show="k == ladeliste.ladelistedata.ladegut1.wagen.length-1">+</button></div>
              <div class="col-1"><button type="button" class="btn btn-danger" @click="remove1(k)" v-show="k || ( !k && ladeliste.ladelistedata.ladegut1.wagen.length > 1)">-</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- ############################################################ 2. LADEGUT ############################################################ -->

    <div class="card mb-5">
      <div class="card-header">
        <label for="adresse">Ladegut 2</label>
        <select class="form-control" v-model="ladeliste.ladelistedata.ladegut2.ladegut">
          <option v-for="ladegut in ladegueter" v-bind:value="ladegut" v-bind:key="ladegut.id">{{ ladegut.bezeichnung }}</option>
        </select>
      </div>
      <div class="card-body">

        <div class="row mb-2">
          <div class="col-6">Wagennummer</div>
          <div class="col-4">Liter</div>
        </div>

        <div id=app>
          <div class="form-group" v-for="(input,k) in ladeliste.ladelistedata.ladegut2.wagen" :key="k">

            <div class="row">

              <div class="col-6"><select class="form-control" v-model="input.wagendaten">

                <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
              </select></div>
              <div class="col-4"><input type="text" class="form-control" v-model="input.liter"></div>

              <div class="col-1"><button type="button" class="btn btn-success" @click="add2(k)" v-show="k == ladeliste.ladelistedata.ladegut2.wagen.length-1">+</button></div>
              <div class="col-1"><button type="button" class="btn btn-danger" @click="remove2(k)" v-show="k || ( !k && ladeliste.ladelistedata.ladegut2.wagen.length > 1)">-</button></div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- ############################################################ 3. LADEGUT ############################################################ -->


    <div class="card mb-5">
      <div class="card-header">
        <label for="adresse">Ladegut 3</label>



        <select class="form-control" v-model="ladeliste.ladelistedata.ladegut3.ladegut">

          <option v-for="ladegut in ladegueter" v-bind:value="ladegut" v-bind:key="ladegut.id">{{ ladegut.bezeichnung }}</option>
        </select>
      </div>

      <div class="card-body">

        <div class="row mb-2">
          <div class="col-6">Wagennummer</div>
          <div class="col-4">Liter</div>
        </div>

        <div id=app>
          <div class="form-group" v-for="(input,k) in ladeliste.ladelistedata.ladegut3.wagen" :key="k">

            <div class="row">

              <div class="col-6"><select class="form-control" v-model="input.wagendaten">

                <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
              </select></div>
              <div class="col-4"><input type="text" class="form-control" v-model="input.liter"></div>

              <div class="col-1"><button type="button" class="btn btn-success" @click="add3(k)" v-show="k == ladeliste.ladelistedata.ladegut3.wagen.length-1">+</button></div>
              <div class="col-1"><button type="button" class="btn btn-danger" @click="remove3(k)" v-show="k || ( !k && ladeliste.ladelistedata.ladegut3.wagen.length > 1)">-</button></div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="form-group">
      <button class="btn btn-success float-right mb-5" v-on:click="speichern()" >Speichern</button>
      <em v-if="nachricht">
        {{nachricht.text}}
      </em>

    </div>


<button class="btn btn-secondary mb-5 mx-1" v-on:click="generatePdfButton">PDF generieren</button>
      <button class="btn btn-link mb-5 mx-1" v-on:click="viewPdfButton">PDF anzeigen</button>



<div class="form-group">
      Status: 
    <select v-model="ladeliste.status">
  <option disabled value="">Abgeschlossen</option>
  <option>in Bearbeitung</option>
  <option>freigegeben</option>
  <option>storniert</option>
</select>
</div>
  </div>

  
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            

        }

    },
    computed: {
        ...mapState({
            
            ladeliste: state => state.ladeliste.all.items,
            pdf: state => state.ladeliste.pdf.items,

            ladegueter: state => state.ladegut.all.items,
            wagendatens: state => state.wagendaten.all.items,

            bahnhoefe: state => state.bahnhof.all.items,
            evus: state => state.evu.all.items,
            adressen: state => state.adresse.all.items,
            erklarungen: state => state.erklarung.all.items,
            nachricht: state => state.ladeliste.nachricht
        })
    },
    created () {
        
        this.getById(this.$route.params.id)
        
        
    },
    mounted () {
        this.getAllWagendaten(),
this.getAllLadegut(),
        console.log('mount')
    },
    methods: {
        
        ...mapActions('ladegut', {getAllLadegut: 'getAll'}),
        ...mapActions('wagendaten', {getAllWagendaten: 'getAll'}),
        
       ...mapActions( 'ladeliste', ['getById']
        ),
        ...mapActions( 'ladeliste', ['update']
        ),
        ...mapActions( 'ladeliste', ['createPDF']
        ),
        ...mapActions( 'ladeliste', ['getPdfById']
        ),
         ...mapActions('bahnhof', {getAllBahnhof: 'getAll'}),
        ...mapActions('evu', {getAllEvu: 'getAll'}),
        ...mapActions('adresse', {getAllAdresse: 'getAll'}),
        ...mapActions('erklarung', {createErklarung: 'create'}),
        ...mapActions('erklarung', {getAllErklarung: 'getAll'}),
        speichern() {
            console.log("handlesub")
                   this.update(this.ladeliste);
              
        },
       
    generatePdfButton() {
            
                   let data = this.ladeliste;
                  this.createPDF(data).then(this.getById(this.$route.params.id));
                   //.then((reslut) => {this.getById(this.$route.params.id);console.log('test')});
                   
                   
                  
              
        },
    viewPdfButton() {
            
                   
                  this.getPdfById(this.ladeliste.pdf_id).then(() => {
                    console.log('Test')
                      console.log(this.pdf)

                      const file = new Blob(
    [Uint8Array.from(this.pdf.pdf.data)], 
    {type: 'application/pdf'});
                      
                      const fileURL = URL.createObjectURL(file);
    //Open the URL on new Window
    window.open(fileURL);})
                  
                  
                   //.then((reslut) => {this.getById(this.$route.params.id);console.log('test')});
                   
                   
                  
              
        },

        add1 () {

             this.$store.state.ladeliste.all.items.ladelistedata.ladegut1.wagen.push({
                                                liter: '',
                                                wagendaten: {}
      }),
     
      console.log('add1')
    },

    remove1 (index) {
      this.$store.state.ladeliste.all.items.ladelistedata.ladegut1.wagen.splice(index, 1)
    },

    add2 () {
      this.$store.state.ladeliste.all.items.ladelistedata.ladegut2.wagen.push({
                                                liter: '',
                                                wagendaten: {}
      })
      console.log(this.inputs)
    },

    remove2 (index) {
      this.$store.state.ladeliste.all.items.ladelistedata.ladegut2.wagen.splice(index, 1)
    },

    add3 () {
      this.$store.state.ladeliste.all.items.ladelistedata.ladegut3.wagen.push({
                                                liter: '',
                                                wagendaten: {}
      })
      console.log(this.inputs)
    },

    remove3 (index) {
      this.$store.state.ladeliste.all.items.ladelistedata.ladegut3.wagen.splice(index, 1)
    },

   

        
    }
};
</script>

<style>
@import '/node_modules/vue-datetime/dist/vue-datetime.css';

</style>