<template>
  <div>
    <h3>Ladeliste bearbeiten</h3>
    <div class="card mb-2">
      <div class="card-body">
        <div class="form-group">
          <label for="adresse">Referenz Nummer (Name der Ladeliste)</label>
          <input type="text" v-model="ladeliste.ladelistedata.refnr" class="form-control" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'"/>
        </div>
      </div>
    </div>

    <div class="card mb-2">
      <div class="card-body">
        <div class="form-group">
          <label for="adresse">Datum</label>

          <datetime type="date" v-model="ladeliste.ladelistedata.datum" value-zone="Europe/Berlin" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'"></datetime>
        </div>
      </div>
    </div>


    <!-- ############################################################ 1. LADEGUT ############################################################ -->
    <div class="card mb-5">
      <div class="card-header">
        <label for="adresse">Ladegut 1</label>

        <select class="form-control" v-model="ladeliste.ladelistedata.ladegut1.ladegut" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">
           <option v-bind:value="ladegut_def"></option>

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
              <div class="col-6"><select class="form-control" v-model="input.wagendaten" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">
                <option v-bind:value="wagendaten_def"></option>
                <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
              </select></div>
              <div class="col-4"><input type="text" class="form-control" v-model="input.liter" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'"></div>

              <div class="col-1"><button type="button" class="btn btn-success" @click="add1(k)" v-show="k == ladeliste.ladelistedata.ladegut1.wagen.length-1" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">+</button></div>
              <div class="col-1"><button type="button" class="btn btn-danger" @click="remove1(k)" v-show="k || ( !k && ladeliste.ladelistedata.ladegut1.wagen.length > 1)" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">-</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- ############################################################ 2. LADEGUT ############################################################ -->

    <div class="card mb-5">
      <div class="card-header">
        <label for="adresse">Ladegut 2</label>
        <select class="form-control" v-model="ladeliste.ladelistedata.ladegut2.ladegut" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">
           <option v-bind:value="ladegut_def"></option>
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

              <div class="col-6"><select class="form-control" v-model="input.wagendaten" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">

                <option v-bind:value="wagendaten_def"></option>

                <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
              </select></div>
              <div class="col-4"><input type="text" class="form-control" v-model="input.liter" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'"></div>

              <div class="col-1"><button type="button" class="btn btn-success" @click="add2(k)" v-show="k == ladeliste.ladelistedata.ladegut2.wagen.length-1" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">+</button></div>
              <div class="col-1"><button type="button" class="btn btn-danger" @click="remove2(k)" v-show="k || ( !k && ladeliste.ladelistedata.ladegut2.wagen.length > 1)" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">-</button></div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- ############################################################ 3. LADEGUT ############################################################ -->


    <div class="card mb-1">
      <div class="card-header">
        <label for="adresse">Ladegut 3</label>



        <select :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'" class="form-control" v-model="ladeliste.ladelistedata.ladegut3.ladegut">
          <option v-bind:value="ladegut_def"></option>

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

              <div class="col-6"><select class="form-control" v-model="input.wagendaten" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">
                <option v-bind:value="wagendaten_def"></option>

                <option v-for="wagendaten in wagendatens" v-bind:value="wagendaten" v-bind:key="wagendaten.id">{{ wagendaten.wagennummer }}</option>
              </select></div>
              <div class="col-4"><input type="text" class="form-control" v-model="input.liter" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'"></div>

              <div class="col-1"><button type="button" class="btn btn-success" @click="add3(k)" v-show="k == ladeliste.ladelistedata.ladegut3.wagen.length-1" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">+</button></div>
              <div class="col-1"><button type="button" class="btn btn-danger" @click="remove3(k)" v-show="k || ( !k && ladeliste.ladelistedata.ladegut3.wagen.length > 1)" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'freigegeben' || ladeliste.status == 'storniert'">-</button></div>

            </div>
          </div>
        </div>
      </div>
    </div>




    <div class="form-group">
      <div class="row">
        <div class="container">
      <em v-if="nachricht">
        {{nachricht.text}}
      </em>
      <button class="btn btn-success col-auto float-right" v-on:click="speichern()" >Zwischenspeichern</button>
      </div>
    </div>
    </div>



    <div class="card mb-2">
      <div class="card-header">
        PDF-Dokumente
      </div>
      <div class="card-body">

        <label>PDF-Vorschau</label>
        <div class="form-group">
          <button class="btn btn-secondary mx-1" v-on:click="generatePdfButton">PDF-Vorschau generieren</button>
          <button class="btn btn-link mx-1" v-on:click="viewPdfButton" :disabled="ladeliste.pdf_id == null">PDF-Vorschau anzeigen</button>
        </div>
      </div>
    </div>

    <div class="card mb-2">
      <div class="card-header">
        <label>Aktueller Status der Ladeliste: {{ladeliste.status}}</label>
        <!--<select v-model="ladeliste.status">
        <option disabled value="Abgeschlossen">Abgeschlossen</option>
        <option disabled value="in Bearbeitung">in Bearbeitung</option>
        <option disabled value="freigegeben">freigegeben</option>
        <option disabled value="storniert">storniert</option>
      </select>-->
    </div>
    <div class="card-body">
      <label>Status der Ladeliste ändern und Speichern:</label>
      <div class="form-group">
        <button class="btn btn-info mx-1" v-on:click="setStatus('in Bearbeitung')" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'storniert'" >in Bearbeitung</button>
        <button class="btn btn-info mx-1" v-on:click="setStatus('freigegeben')" :disabled="ladeliste.status == 'Abgeschlossen' || ladeliste.status == 'storniert'">freigegeben</button>
        <button class="btn btn-info mx-1" v-on:click="setStatus('storniert')" :disabled="ladeliste.status == 'Abgeschlossen'">storniert</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            wagendaten_def: '',
            ladegut_def: '',


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
this.clearErrorMessages(),
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
        clearErrorMessages(){
this.nachricht.text = ''
        },

        setStatus(s){
          this.ladeliste.status = s;





          this.speichern()

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
