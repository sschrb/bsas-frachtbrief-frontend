<template>
    <div>








 <form @submit.prevent="handleSubmit">


<label for="adresse">Absender</label>



<select class="form-control" v-model="adresse1">
        <option v-bind:value="adresse_def"></option>
        <option v-for="adresse in adressen" v-bind:value="adresse" v-bind:key="adresse.id">{{ adresse.name }}</option>
    </select>



   <button class="btn btn-primary" v-on:click="viewAdresse1=!viewAdresse1">Details anzeigen</button>
 <em v-if="viewAdresse1">



            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="adresse1.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Straße und Hausnummer</label>
                <input type="text" v-model="adresse1.strasse" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ort und PLZ</label>
                <input type="text" v-model="adresse1.ort" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">E-Mailadresse</label>
                <input type="text" v-model="adresse1.mail" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Telefonnummer</label>
                <input type="text" v-model="adresse1.telefon" class="form-control" :disabled=true />
                
            </div>
 </em>


<br>
<br>
<br>




<label for="adresse">Empfänger</label>



<select class="form-control" v-model="adresse2">
        <option v-bind:value="adresse_def"></option>
        <option v-for="adresse in adressen" v-bind:value="adresse" v-bind:key="adresse.id">{{ adresse.name }}</option>
    </select>



   <button class="btn btn-primary" v-on:click="viewAdresse2=!viewAdresse2">Details anzeigen</button>
 <em v-if="viewAdresse2">



            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="adresse2.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Straße und Hausnummer</label>
                <input type="text" v-model="adresse2.strasse" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ort und PLZ</label>
                <input type="text" v-model="adresse2.ort" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">E-Mailadresse</label>
                <input type="text" v-model="adresse2.mail" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Telefonnummer</label>
                <input type="text" v-model="adresse2.telefon" class="form-control" :disabled=true />
                
            </div>
 </em>


<br>
<br>
<br>






































<div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Abgangsbahnhof</label>



<select class="form-control" v-model="bahnhof1">
       <option v-bind:value="bahnhof_def"></option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewBahnhof1=!viewBahnhof1">Details anzeigen</button>
 <em v-if="viewBahnhof1">
<div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="bahnhof1.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bahnhofscode</label>
                <input type="text" v-model="bahnhof1.bahnhofscode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ländercode</label>
                <input type="text" v-model="bahnhof1.laendercode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Land</label>
                <input type="text" v-model="bahnhof1.land" class="form-control" :disabled=true />
                
            </div>



 </em>
<br>
<br>


<label for="adresse">Beförderer</label>



<select class="form-control" v-model="evu1">
        <option v-bind:value="evu_def"></option>
        <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewEvu1=!viewEvu1">Details anzeigen</button>
 <em v-if="viewEvu1">
            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="evu1.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Kurzbezeichnung</label>
                <input type="text" v-model="evu1.short" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">EVU Code</label>
                <input type="text" v-model="evu1.code" class="form-control" :disabled=true />
                
            </div>
 </em>
 <br>
<br>
 <button class="btn btn-primary" v-on:click="zwBahnhof1=!zwBahnhof1">weiteren Zwischenbahnhof hinzufügen</button>
 </div>
 <em v-if="zwBahnhof1">
     
     






















<div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Bahnhof</label>

<select class="form-control" v-model="bahnhof2">
       <option v-bind:value="bahnhof_def"></option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewBahnhof2=!viewBahnhof2">Details anzeigen</button>
 <em v-if="viewBahnhof2">
<div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="bahnhof2.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bahnhofscode</label>
                <input type="text" v-model="bahnhof2.bahnhofscode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ländercode</label>
                <input type="text" v-model="bahnhof2.laendercode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Land</label>
                <input type="text" v-model="bahnhof2.land" class="form-control" :disabled=true />
                
            </div>



 </em>
<br>
<br>


<label for="adresse">Beförderer</label>



<select class="form-control" v-model="evu2">
        <option v-bind:value="evu_def"></option>
        <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewEvu2=!viewEvu2">Details anzeigen</button>
 <em v-if="viewEvu2">
            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="evu2.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Kurzbezeichnung</label>
                <input type="text" v-model="evu2.short" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">EVU Code</label>
                <input type="text" v-model="evu2.code" class="form-control" :disabled=true />
                
            </div>
 </em>
 <br>
<br>
 <button class="btn btn-primary" v-on:click="zwBahnhof2=!zwBahnhof2">weiteren Zwischenbahnhof hinzufügen</button>
</div>
 <em v-if="zwBahnhof2">


























     <div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Bahnhof</label>

<select class="form-control" v-model="bahnhof3">
       <option v-bind:value="bahnhof_def"></option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewBahnhof3=!viewBahnhof3">Details anzeigen</button>
 <em v-if="viewBahnhof3">
<div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="bahnhof3.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bahnhofscode</label>
                <input type="text" v-model="bahnhof3.bahnhofscode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ländercode</label>
                <input type="text" v-model="bahnhof3.laendercode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Land</label>
                <input type="text" v-model="bahnhof3.land" class="form-control" :disabled=true />
                
            </div>



 </em>
<br>
<br>


<label for="adresse">Beförderer</label>



<select class="form-control" v-model="evu3">
        <option v-bind:value="evu_def"></option>
        <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewEvu3=!viewEvu3">Details anzeigen</button>
 <em v-if="viewEvu3">
            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="evu3.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Kurzbezeichnung</label>
                <input type="text" v-model="evu3.short" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">EVU Code</label>
                <input type="text" v-model="evu3.code" class="form-control" :disabled=true />
                
            </div>
 </em>
 <br>
<br>
 <button class="btn btn-primary" v-on:click="zwBahnhof3=!zwBahnhof3">weiteren Zwischenbahnhof hinzufügen</button>
</div>
 <em v-if="zwBahnhof3">
     



     



























<div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Bahnhof</label>

<select class="form-control" v-model="bahnhof4">
       <option v-bind:value="bahnhof_def"></option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewBahnhof4=!viewBahnhof4">Details anzeigen</button>
 <em v-if="viewBahnhof4">
<div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="bahnhof4.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bahnhofscode</label>
                <input type="text" v-model="bahnhof4.bahnhofscode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ländercode</label>
                <input type="text" v-model="bahnhof4.laendercode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Land</label>
                <input type="text" v-model="bahnhof4.land" class="form-control" :disabled=true />
                
            </div>



 </em>
<br>
<br>


<label for="adresse">Beförderer</label>



<select class="form-control" v-model="evu4">
        <option v-bind:value="evu_def"></option>
        <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewEvu4=!viewEvu4">Details anzeigen</button>
 <em v-if="viewEvu4">
            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="evu4.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Kurzbezeichnung</label>
                <input type="text" v-model="evu4.short" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">EVU Code</label>
                <input type="text" v-model="evu4.code" class="form-control" :disabled=true />
                
            </div>
 </em>
 <br>
<br>
 <button class="btn btn-primary" v-on:click="zwBahnhof4=!zwBahnhof4">weiteren Zwischenbahnhof hinzufügen</button>
</div>
 <em v-if="zwBahnhof4">
 
 







































 <div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Bahnhof</label>

<select class="form-control" v-model="bahnhof5">
       <option v-bind:value="bahnhof_def"></option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewBahnhof5=!viewBahnhof5">Details anzeigen</button>
 <em v-if="viewBahnhof5">
<div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="bahnhof5.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bahnhofscode</label>
                <input type="text" v-model="bahnhof5.bahnhofscode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ländercode</label>
                <input type="text" v-model="bahnhof5.laendercode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Land</label>
                <input type="text" v-model="bahnhof5.land" class="form-control" :disabled=true />
                
            </div>



 </em>
<br>
<br>


<label for="adresse">Beförderer</label>



<select class="form-control" v-model="evu5">
        <option v-bind:value="evu_def"></option>
        <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewEvu5=!viewEvu5">Details anzeigen</button>
 <em v-if="viewEvu5">
            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="evu5.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Kurzbezeichnung</label>
                <input type="text" v-model="evu5.short" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">EVU Code</label>
                <input type="text" v-model="evu5.code" class="form-control" :disabled=true />
                
            </div>
 </em>
 <br>
<br>
 <button class="btn btn-primary" v-on:click="zwBahnhof5=!zwBahnhof5">weiteren Zwischenbahnhof hinzufügen</button>
</div>
 <em v-if="zwBahnhof5">
     




































     <div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Bahnhof</label>

<select class="form-control" v-model="bahnhof6">
       <option v-bind:value="bahnhof_def"></option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewBahnhof6=!viewBahnhof6">Details anzeigen</button>
 <em v-if="viewBahnhof6">
<div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="bahnhof6.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bahnhofscode</label>
                <input type="text" v-model="bahnhof6.bahnhofscode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ländercode</label>
                <input type="text" v-model="bahnhof6.laendercode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Land</label>
                <input type="text" v-model="bahnhof6.land" class="form-control" :disabled=true />
                
            </div>



 </em>
<br>
<br>


<label for="adresse">Beförderer</label>



<select class="form-control" v-model="evu6">
        <option v-bind:value="evu_def"></option>
        <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewEvu6=!viewEvu6">Details anzeigen</button>
 <em v-if="viewEvu6">
            <div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="evu6.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Kurzbezeichnung</label>
                <input type="text" v-model="evu6.short" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">EVU Code</label>
                <input type="text" v-model="evu6.code" class="form-control" :disabled=true />
                
            </div>
 </em>
 <br>
<br>
 
</div>


 </em>

 </em>


 </em>

 </em>




 </em>














<br>
<br>
<br>


 <label for="adresse">Zielbahnhof</label>

<select class="form-control" v-model="bahnhof7">
       <option v-bind:value="bahnhof_def"></option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewBahnhof7=!viewBahnhof7">Details anzeigen</button>
 <em v-if="viewBahnhof7">
<div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="bahnhof7.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bahnhofscode</label>
                <input type="text" v-model="bahnhof7.bahnhofscode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ländercode</label>
                <input type="text" v-model="bahnhof7.laendercode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Land</label>
                <input type="text" v-model="bahnhof7.land" class="form-control" :disabled=true />
                
            </div>



 </em>
<br>
<br>














<br>
<br>
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
            zwBahnhof1: false,
            zwBahnhof2: false,
            zwBahnhof3: false,
            zwBahnhof4: false,
            zwBahnhof5: false,
            bahnhof_def: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            viewBahnhof1: false,
            bahnhof1: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            viewBahnhof2: false,
            bahnhof2: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            viewBahnhof3: false,
            bahnhof3: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            viewBahnhof4: false,
            bahnhof4: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            viewBahnhof5: false,
            bahnhof5: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            viewBahnhof6: false,
            bahnhof6: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            viewBahnhof7: false,
            bahnhof7: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
               
               
            },
            




            evu_def: {
                name: "",
                short: '',
                code: '',
                
               
               
            },
            viewEvu1: false,
            evu1: {
                name: "",
                short: '',
                code: '',
               
               
               
            },
            viewEvu2: false,
            evu2: {
                name: "",
                short: '',
                code: '',
               
               
               
            },
            viewEvu3: false,
            evu3: {
                name: "",
                short: '',
                code: '',
               
               
               
            },
            viewEvu4: false,
            evu4: {
                name: "",
                short: '',
                code: '',
               
               
               
            },
            viewEvu5: false,
            evu5: {
                name: "",
                short: '',
                code: '',
               
               
               
            },
            viewEvu6: false,
            evu6: {
                name: "",
                short: '',
                code: '',
               
               
               
            },

            adresse_def: {
                name: '',
                strasse: '',
                ort: '',
                mail: '',
                telefon: ''
               
               
            },
            viewAdresse1: false,
            adresse1: {
                name: '',
                strasse: '',
                ort: '',
                mail: '',
                telefon: ''
               
               
            },
            viewAdresse2: false,
            adresse2: {
                name: '',
                strasse: '',
                ort: '',
                mail: '',
                telefon: ''
               
               
            },



            frachtbrief: {
                adresse: '',
                adresseview: false,
                wagenummer: '',
                bahnhof: '',
                laendercode: '',
                land: ''
               
            },
            
            
        }
    },
computed: {
        ...mapState('frachtbrief', ['status']),
        ...mapState('bahnhof', ['status']),
    
     ...mapState({
           
            bahnhoefe: state => state.bahnhof.all.items,
            evus: state => state.evu.all.items,
            adressen: state => state.adresse.all.items,
            message: state => state.bahnhof.message
            
        }),
    },
    mounted () {
        this.getAllBahnhof();
        this.getAllEvu();
        this.getAllAdresse();
        console.log('mount')
    },
    methods: {
        
        ...mapActions('bahnhof', ['create']),
        ...mapActions('bahnhof', {getAllBahnhof: 'getAll'}),
        ...mapActions('evu', {getAllEvu: 'getAll'}),
        ...mapActions('adresse', {getAllAdresse: 'getAll'}),
         ...mapActions('bahnhof', ['delete']),
         ...mapActions('bahnhof', ['update']),
        ...mapActions('frachtbrief', ['create']),
        handleSubmit(e) {
            //this.submitted = true;
           
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