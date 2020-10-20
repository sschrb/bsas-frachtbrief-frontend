<template>
    <div>
       



<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="navbar-brand" href="#"><router-link to="/">Frachtbrief anlegen</router-link></a>
            </li>
            <li class="nav-item">
                <a class="navbar-brand" href="#"><router-link to="/history">Historie</router-link></a>
            </li>            
        </ul>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link to="/login">Logout</router-link>
            </li>
        </ul>
    </div>
</nav>

{{ this.frachtbrief }}


 
        
<em v-if="brief.loading">Loading users...</em>
<em v-if="frachtbrief">
<form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="adresse">Zieladresse</label>
                <input type="text" v-model="frachtbrief.adresse" value="default value" class="form-control" :disabled="frachtbrief.pdf_id != null"/>
                
            </div>
            <div class="form-group">
                <label for="wagenummer">Wagennummer</label>
                <input type="text" v-model="frachtbrief.wagenummer" class="form-control" :disabled="frachtbrief.pdf_id != null"/>
                
            </div>

            <div class="form-group">
                <button class="btn btn-primary" :disabled="frachtbrief.pdf_id != null" >Update</button>
              
            </div>
            <em v-if="frachtbrief.pdf_id == null"><button class="btn btn-primary" v-on:click="generatePdfButton">PDF generieren</button></em>
            <em v-if="frachtbrief.pdf_id != null"><button class="btn btn-primary" v-on:click="viewPdfButton">PDF anzeigen</button></em>



</form>
</em>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            test1: {
            loading: null
            },
            
        }

    },
    computed: {
        ...mapState({
            
            frachtbrief: state => state.frachtbrief.all.items,
            brief: state => state.frachtbrief.all,
            pdf: state => state.frachtbrief.pdf.items
        })
    },
    created () {
        
        this.getById(this.$route.params.id)
        
        
    },
    mounted() {

       
  
},
    methods: {
        
        
        
       ...mapActions( 'frachtbrief', ['getById']
        ),
        ...mapActions( 'frachtbrief', ['update']
        ),
        ...mapActions( 'frachtbrief', ['createPDF']
        ),
        ...mapActions( 'frachtbrief', ['getPdfById']
        ),
        handleSubmit(e) {
            
                    this.update(this.frachtbrief);
              
        },
    generatePdfButton() {
            
                   
                  this.createPDF(this.frachtbrief).then(this.getById(this.$route.params.id));
                   //.then((reslut) => {this.getById(this.$route.params.id);console.log('test')});
                   
                   
                  
              
        },
    viewPdfButton() {
            
                   
                  this.getPdfById(this.frachtbrief.pdf_id).then(() => {
                      console.log(this.pdf.pdf)

                      const file = new Blob(
    [Uint8Array.from(this.pdf.pdf.data)], 
    {type: 'application/pdf'});
                      
                      const fileURL = URL.createObjectURL(file);
    //Open the URL on new Window
    window.open(fileURL);})
                  
                  
                   //.then((reslut) => {this.getById(this.$route.params.id);console.log('test')});
                   
                   
                  
              
        }

        
    }
};
</script>