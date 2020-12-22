<template>
    <div>



<label for="adresse">Referenz Nummer</label>
<div class="form-group">
               
                <input type="text" v-model="refnr" class="form-control" />
                
            </div>




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






















<div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Übernahmeort</label>



<select class="form-control" v-model="ubernahmeort">
       <option v-bind:value="bahnhof_def"></option>
        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
    </select>
<button class="btn btn-primary" v-on:click="viewUbernahmeort=!viewUbernahmeort">Details anzeigen</button>
 <em v-if="viewUbernahmeort">
<div class="form-group">
                <label for="wagenummer">Name</label>
                <input type="text" v-model="ubernahmeort.name" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Bahnhofscode</label>
                <input type="text" v-model="ubernahmeort.bahnhofscode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Ländercode</label>
                <input type="text" v-model="ubernahmeort.laendercode" class="form-control" :disabled=true />
                
            </div>

            <div class="form-group">
                <label for="wagenummer">Land</label>
                <input type="text" v-model="ubernahmeort.land" class="form-control" :disabled=true />
                
            </div>



 </em>
 <br>
 <br>
 <label for="adresse">Übernahmedatum und Uhrzeit</label><datetime type="datetime" v-model="ubernahmeort.datum" value-zone="Europe/Berlin" ></datetime>
</div>
<br>
<br>









<div class="border border-primary p-2" style="border-width: medium !important">

<p>Frachtbrief Typ:</p>
  <div>
    <input id="CIM" type="radio" name="type" value="CIM" v-model="type"/>
    <label for="CIM">CIM</label>
  </div>
  
  <div>
    <input id="CUV" type="radio" name="type" value="CUV" v-model="type"/>
    <label for="CUV">CUV</label>
  </div>



</div>
















<br>
<br>
<div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Ausstellungsort</label>
<div class="form-group">
               
                <input type="text" v-model="ausstellung.ort" class="form-control" />
                
            </div>
<label for="adresse">Ausstellungsdatum</label><datetime v-model="ausstellung.datum" value-zone="Europe/Berlin" ></datetime>

</div>













<br>
<br>
<div class="border border-primary p-2" style="border-width: medium !important">
<label for="adresse">Andere Beförderer</label>
<br>
<button class="btn btn-primary" v-on:click="aBefordererVorschlag()">Vorschlag generieren</button>
<div class="row">
    <div class="col-4">Name</div>
    <div class="col-8">Strecke</div>

    <div class="col-4"><input type="text" v-model="aBeforderer1.name" class="form-control" /></div>
    <div class="col-8"><input type="text" v-model="aBeforderer1.strecke" class="form-control" /></div>

    <div class="col-4"><input type="text" v-model="aBeforderer2.name" class="form-control" /></div>
    <div class="col-8"><input type="text" v-model="aBeforderer2.strecke" class="form-control" /></div>

    <div class="col-4"><input type="text" v-model="aBeforderer3.name" class="form-control" /></div>
    <div class="col-8"><input type="text" v-model="aBeforderer3.strecke" class="form-control" /></div>

    <div class="col-4"><input type="text" v-model="aBeforderer4.name" class="form-control" /></div>
    <div class="col-8"><input type="text" v-model="aBeforderer4.strecke" class="form-control" /></div>

    <div class="col-4"><input type="text" v-model="aBeforderer5.name" class="form-control" /></div>
    <div class="col-8"><input type="text" v-model="aBeforderer5.strecke" class="form-control" /></div>

    <div class="col-4"><input type="text" v-model="aBeforderer6.name" class="form-control" /></div>
    <div class="col-8"><input type="text" v-model="aBeforderer6.strecke" class="form-control" /></div>
  </div>
</div>












<br>
<br>
<div class="border border-primary p-2" style="border-width: medium !important">
<label for="erklarung">Erklärungen</label>



<select class="form-control" v-model="erklarung">
        <option v-bind:value="erklarung_def">neu anlegen</option>
        <option v-for="erklarung in erklarungen" v-bind:value="erklarung" v-bind:key="erklarung.id">{{ erklarung.code }}</option>
    </select>



   



            <div class="form-group">
                <label for="wagenummer">Code mit Erläuterung</label>
                <textarea type="text" v-model="erklarung.code" class="form-control"/>
                
            </div>
</div>
<br>
<br>







<br>
<br>
             <div class="form-group">
                <button class="btn btn-primary" v-on:click="saveFrachtbrief()" >Speichern</button>
                <em v-if="message.error">
                    {{message.error.message}}
                </em>
              
            </div>
</form>


<br>
<br>
<br>
<br>
<br>
<br>
<p>Als Vorlage verwenden:</p>
  <div>
    <input id="vorlagefalse" type="radio" name="vorlage" value="false" v-model="vorlage"/>
    <label for="vorlagefalse">Nein</label>
  </div>
  
  <div>
    <input id="vorlagetrue" type="radio" name="vorlage" value="true" v-model="vorlage"/>
    <label for="vorlagetrue">Ja</label>
  </div>







<div class="border border-primary p-2" style="border-width: medium !important">
<label for="erklarung">Vorlage auswählen</label>



<select class="form-control" v-model="vorlagedata">
        <option v-bind:value="vorlagedata_def">keine</option>
        <option v-for="frachtbrief in frachtbriefs" v-bind:value="frachtbrief" v-bind:key="frachtbrief.id">{{ frachtbrief.frachtbriefdata.refnr }}</option>
    </select>

 <button class="btn btn-primary" v-on:click="vorlageLaden()" >Vorlage laden</button>


</div>

{{vorlagedata}}
        
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
        return {
            vorlagedata: {},
            vorlagedata_def: {},
            vorlage: false,
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

            viewUbernahmeort: false,
            ubernahmeort: {
               name: "",
                bahnhofscode: '',
                laendercode: '',
                land: '',
                datum: ''
               
               
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

            ausstellung: {
                ort: 'Mühlsen',
                datum: ''
            },



            aBeforderer1: {
                name: '',
                strecke: ''

            },
            aBeforderer2: {
                name: '',
                strecke: ''

            },
            aBeforderer3: {
                name: '',
                strecke: ''

            },
            aBeforderer4: {
                name: '',
                strecke: ''

            },
            aBeforderer5: {
                name: '',
                strecke: ''

            },
            aBeforderer6: {
                name: '',
                strecke: ''

            },

            refnr: '',
            type: 'CIM',

            erklarung_def: {
                code: ''
               
               
            },
            
            erklarung: {
                code: ''
               
               
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
            erklarungen: state => state.erklarung.all.items,
            message: state => state.frachtbrief.all,
            frachtbriefs: state => state.frachtbrief.all.items,
            
        }),
    },
    mounted () {
        this.getAllBahnhof();
        this.getAllEvu();
        this.getAllAdresse();
        this.getAllErklarung();

         this.getAllFrachtbrief();
        console.log('mount')
    },
    methods: {
         ...mapActions( 'frachtbrief', {
            getAllFrachtbrief: 'getAll',
            deleteFrachtbrief: 'delete'
        }),
        ...mapActions('bahnhof', ['create']),
        ...mapActions('bahnhof', {getAllBahnhof: 'getAll'}),
        ...mapActions('evu', {getAllEvu: 'getAll'}),
        ...mapActions('adresse', {getAllAdresse: 'getAll'}),
        ...mapActions('erklarung', {createErklarung: 'create'}),
        ...mapActions('erklarung', {getAllErklarung: 'getAll'}),

         ...mapActions('bahnhof', ['delete']),
         ...mapActions('bahnhof', ['update']),
        ...mapActions('frachtbrief', {createFrachtbrief: 'create'}),
        handleSubmit(e) {
            //this.submitted = true;
           
        },
saveFrachtbrief(){

if(this.erklarung.id == null && this.erklarung.code != null){
    this.createErklarung(this.erklarung);
}

var frachtbriefdata = JSON.parse('{"frachtbriefdata":' + JSON.stringify(this.$data) + '}')
console.log(frachtbriefdata)

this.createFrachtbrief(frachtbriefdata);


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
    },
    vorlageLaden(){
        

        var merged = {};
Object.assign(this.$data, this.$data, this.vorlagedata.frachtbriefdata);
this.vorlagedata = {};
this.vorlage = false;
    }

    }
};
</script>

<style>
@import '/node_modules/vue-datetime/dist/vue-datetime.css';

</style>