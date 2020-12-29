<template>
  <div>
    <div class="card mb-2">
      <div class="card-body">
        <div class="form-group"> <!-- Pflichtfeld für spätere Bezeichnung des Frachtbriefes -->
          <label for="">Referenz Nummer (Name des Frachtbriefes)</label>
          <input type="text" v-model="frachtbrief.frachtbriefdata.refnr" class="form-control" />
        </div>
      </div>
    </div>




    <form @submit.prevent="handleSubmit">

      <!-- ############################################################ ABSENDER ############################################################ -->
      <div class="row">
        <div class="col-sm-6">
          <div class="card mb-2">
            <div class="card-body">
              <div class="form-group">
                <label for="adresse">Absender</label>
                <select class="form-control" v-model="frachtbrief.frachtbriefdata.adresse1">
                  <option v-bind:value="frachtbrief.frachtbriefdata.adresse_def"></option>
                  <option v-for="adresse in adressen" v-bind:value="adresse" v-bind:key="adresse.id">{{ adresse.name }}</option>
                </select>

                <button class="btn btn-link py-0" v-on:click="viewAdresse1=!viewAdresse1">Details anzeigen</button>
              </div>


              <em v-if="viewAdresse1">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse1.name" class="form-control" disabled />

                  <label for="">Straße und Hausnummer</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse1.strasse" class="form-control" disabled />


                  <label for="">PLZ und Ort</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse1.ort" class="form-control" disabled />


                  <label for="">E-Mailadresse</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse1.mail" class="form-control" disabled />

                  <label for="">Telefonnummer</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse1.telefon" class="form-control" disabled />
                </div>
              </em>
            </div>
          </div>
        </div>


        <!-- ############################################################ EMPFÄNGER ############################################################ -->
        <div class="col-sm-6">
          <div class="card mb-2">
            <div class="card-body">
              <div class="form-group">
                <label for="adresse">Empfänger</label>
                <select class="form-control" v-model="frachtbrief.frachtbriefdata.adresse2">
                  <option v-bind:value="frachtbrief.frachtbriefdata.adresse_def"></option>
                  <option v-for="adresse in adressen" v-bind:value="adresse" v-bind:key="adresse.id">{{ adresse.name }}</option>
                </select>

                <button class="btn btn-link py-0" v-on:click="viewAdresse2=!viewAdresse2">Details anzeigen</button>
              </div>


              <em v-if="viewAdresse2">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse2.name" class="form-control" disabled />

                  <label for="">Straße und Hausnummer</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse2.strasse" class="form-control" disabled />

                  <label for="">PLZ und Ort</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse2.ort" class="form-control" disabled />

                  <label for="">E-Mailadresse</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse2.mail" class="form-control" disabled />

                  <label for="">Telefonnummer</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.adresse2.telefon" class="form-control" disabled />
                </div>
              </em>
            </div>
          </div>
        </div>
      </div>

      <!-- ############################################################ ABGANGSBAHNHOF ############################################################ -->
      <div class="row">
        <div class="col-sm-6">

          <div class="card mb-2">
            <div class="card-body">

              <div class="form-group">
                <label for="">Abgangsbahnhof</label>

                <select class="form-control" v-model="frachtbrief.frachtbriefdata.bahnhof1">
                  <option v-bind:value="frachtbrief.frachtbriefdata.bahnhof_def"></option>
                  <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
                </select>

                <button class="btn btn-link py-0" v-on:click="viewBahnhof1=!viewBahnhof1">Details anzeigen</button>
              </div>


              <em v-if="viewBahnhof1">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof1.name" class="form-control" disabled />

                  <label for="">Bahnhofscode</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof1.bahnhofscode" class="form-control" disabled />

                  <label for="">Ländercode</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof1.laendercode" class="form-control" disabled />

                  <label for="">Land</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof1.land" class="form-control" disabled />
                </div>
              </em>

              <div class="form-group">

                <label for="adresse">Beförderer</label>

                <select class="form-control" v-model="frachtbrief.frachtbriefdata.evu1">
                  <option v-bind:value="frachtbrief.frachtbriefdata.evu_def"></option>
                  <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
                </select>

                <button class="btn btn-link py-0" v-on:click="viewEvu1=!viewEvu1">Details anzeigen</button>
              </div>


              <em v-if="viewEvu1">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.evu1.name" class="form-control" disabled />

                  <label for="">Kurzbezeichnung</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.evu1.short" class="form-control" disabled />

                  <label for="">EVU Code</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.evu1.code" class="form-control" disabled />
                </div>
              </em>

            </div>
          </div>
        </div>

        <!-- ############################################################ ZIELBAHNHOF ############################################################ -->
        <div class="col-sm-6">
          <div class="card mb-2">
            <div class="card-body">
              <div class="form-group">
                <label for="adresse">Zielbahnhof</label>
                <select class="form-control" v-model="frachtbrief.frachtbriefdata.bahnhof7">
                  <option v-bind:value="frachtbrief.frachtbriefdata.bahnhof_def"></option>
                  <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
                </select>
                <button class="btn btn-link py-0" v-on:click="viewBahnhof7=!viewBahnhof7">Details anzeigen</button>
              </div>
              <em v-if="viewBahnhof7">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof7.name" class="form-control" disabled />

                  <label for="">Bahnhofscode</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof7.bahnhofscode" class="form-control" disabled />

                  <label for="">Ländercode</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof7.laendercode" class="form-control" disabled />

                  <label for="">Land</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof7.land" class="form-control" disabled />
                </div>
              </em>

            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-primary mb-2" v-on:click="zwBahnhof1=!zwBahnhof1">1. Zwischenbahnhof hinzufügen</button>

      <!-- ############################################################ 1. Zwischenbahnhof ############################################################ -->
      <em v-if="zwBahnhof1">
        <div class="card mb-2">
          <div class="card-body">

            <div class="form-group">
              <label for="adresse">1. Zwischenbahnhof</label>
              <select class="form-control" v-model="frachtbrief.frachtbriefdata.bahnhof2">
                <option v-bind:value="frachtbrief.frachtbriefdata.bahnhof_def"></option>
                <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
              </select>

              <button class="btn btn-link py-0" v-on:click="viewBahnhof2=!viewBahnhof2">Details anzeigen</button>
            </div>



            <em v-if="viewBahnhof2">
              <div class="form-group">
                <label for="">Name</label>
                <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof2.name" class="form-control" disabled />

                <label for="">Bahnhofscode</label>
                <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof2.bahnhofscode" class="form-control" disabled />

                <label for="">Ländercode</label>
                <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof2.laendercode" class="form-control" disabled />

                <label for="">Land</label>
                <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof2.land" class="form-control" disabled />
              </div>
            </em>

            <div class="form-group">
              <label for="adresse">Beförderer (ab diesem Bahnhof)</label>
              <select class="form-control" v-model="frachtbrief.frachtbriefdata.evu2">
                <option v-bind:value="frachtbrief.frachtbriefdata.evu_def"></option>
                <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
              </select>

              <button class="btn btn-link py-0" v-on:click="viewEvu2=!viewEvu2">Details anzeigen</button>
            </div>
            <em v-if="viewEvu2">
              <div class="form-group">
                <label for="">Name</label>
                <input type="text" v-model="frachtbrief.frachtbriefdata.evu2.name" class="form-control" disabled />

                <label for="">Kurzbezeichnung</label>
                <input type="text" v-model="frachtbrief.frachtbriefdata.evu2.short" class="form-control" disabled />

                <label for="">EVU Code</label>
                <input type="text" v-model="frachtbrief.frachtbriefdata.evu2.code" class="form-control" disabled />
              </div>
            </em>


          </div>
        </div>

        <button class="btn btn-primary mb-2" v-on:click="zwBahnhof2=!zwBahnhof2">2. Zwischenbahnhof hinzufügen</button>


        <!-- ############################################################ 2. Zwischenbahnhof ############################################################ -->
        <em v-if="zwBahnhof2">
          <div class="card mb-2">
            <div class="card-body">
              <div class="form-group">
                <label for="adresse">2. Zwischenbahnhof</label>
                <select class="form-control" v-model="frachtbrief.frachtbriefdata.bahnhof3">
                  <option v-bind:value="frachtbrief.frachtbriefdata.bahnhof_def"></option>
                  <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
                </select>
                <button class="btn btn-link py-0" v-on:click="viewBahnhof3=!viewBahnhof3">Details anzeigen</button>
              </div>
              <em v-if="viewBahnhof3">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof3.name" class="form-control" disabled />

                  <label for="">Bahnhofscode</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof3.bahnhofscode" class="form-control" disabled />

                  <label for="">Ländercode</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof3.laendercode" class="form-control" disabled />

                  <label for="">Land</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof3.land" class="form-control" disabled />
                </div>
              </em>

              <label for="adresse">Beförderer (ab diesem Bahnhof)</label>
              <select class="form-control" v-model="frachtbrief.frachtbriefdata.evu3">
                <option v-bind:value="frachtbrief.frachtbriefdata.evu_def"></option>
                <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
              </select>
              <button class="btn btn-link py-0" v-on:click="viewEvu3=!viewEvu3">Details anzeigen</button>

              <em v-if="viewEvu3">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.evu3.name" class="form-control" disabled />

                  <label for="">Kurzbezeichnung</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.evu3.short" class="form-control" disabled />

                  <label for="">EVU Code</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.evu3.code" class="form-control" disabled />
                </div>
              </em>


            </div>
          </div>

          <button class="btn btn-primary mb-2" v-on:click="zwBahnhof3=!zwBahnhof3">3. Zwischenbahnhof hinzufügen</button>


          <!-- ############################################################ 3. Zwischenbahnhof ############################################################ -->

          <em v-if="zwBahnhof3">
            <div class="card mb-2">
              <div class="card-body">
                <div class="form-group">
                  <label for="adresse">3. Zwischenbahnhof</label>
                  <select class="form-control" v-model="frachtbrief.frachtbriefdata.bahnhof4">
                    <option v-bind:value="frachtbrief.frachtbriefdata.bahnhof_def"></option>
                    <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
                  </select>
                  <button class="btn btn-link py-0" v-on:click="viewBahnhof4=!viewBahnhof4">Details anzeigen</button>
                </div>

                <em v-if="viewBahnhof4">
                  <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof4.name" class="form-control" disabled />

                    <label for="">Bahnhofscode</label>
                    <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof4.bahnhofscode" class="form-control" disabled />

                    <label for="">Ländercode</label>
                    <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof4.laendercode" class="form-control" disabled />

                    <label for="">Land</label>
                    <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof4.land" class="form-control" disabled />
                  </div>
                </em>

                <label for="adresse">Beförderer (ab diesem Bahnhof)</label>

                <select class="form-control" v-model="frachtbrief.frachtbriefdata.evu4">
                  <option v-bind:value="frachtbrief.frachtbriefdata.evu_def"></option>
                  <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
                </select>
                <button class="btn btn-link py-0" v-on:click="viewEvu4=!viewEvu4">Details anzeigen</button>
                <em v-if="viewEvu4">
                  <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" v-model="frachtbrief.frachtbriefdata.evu4.name" class="form-control" disabled />

                    <label for="">Kurzbezeichnung</label>
                    <input type="text" v-model="frachtbrief.frachtbriefdata.evu4.short" class="form-control" disabled />

                    <label for="">EVU Code</label>
                    <input type="text" v-model="frachtbrief.frachtbriefdata.evu4.code" class="form-control" disabled />
                  </div>
                </em>


              </div>
            </div>
            <button class="btn btn-primary mb-2" v-on:click="zwBahnhof4=!zwBahnhof4">4. Zwischenbahnhof hinzufügen</button>



            <!-- ############################################################ 4. Zwischenbahnhof ############################################################ -->
            <em v-if="zwBahnhof4">
              <div class="card mb-2">
                <div class="card-body">
                  <div class="form-group">
                    <label for="adresse">4. Zwischenbahnhof</label>

                    <select class="form-control" v-model="frachtbrief.frachtbriefdata.bahnhof5">
                      <option v-bind:value="frachtbrief.frachtbriefdata.bahnhof_def"></option>
                      <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
                    </select>
                    <button class="btn btn-link py-0" v-on:click="viewBahnhof5=!viewBahnhof5">Details anzeigen</button>
                  </div>
                  <em v-if="viewBahnhof5">
                    <div class="form-group">
                      <label for="">Name</label>
                      <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof5.name" class="form-control" disabled />

                      <label for="">Bahnhofscode</label>
                      <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof5.bahnhofscode" class="form-control" disabled />

                      <label for="">Ländercode</label>
                      <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof5.laendercode" class="form-control" disabled />

                      <label for="">Land</label>
                      <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof5.land" class="form-control" disabled />
                    </div>
                  </em>

                  <label for="adresse">Beförderer (ab diesem Bahnhof)</label>

                  <select class="form-control" v-model="frachtbrief.frachtbriefdata.evu5">
                    <option v-bind:value="frachtbrief.frachtbriefdata.evu_def"></option>
                    <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
                  </select>
                  <button class="btn btn-link py-0" v-on:click="viewEvu5=!viewEvu5">Details anzeigen</button>
                  <em v-if="viewEvu5">
                    <div class="form-group">
                      <label for="">Name</label>
                      <input type="text" v-model="frachtbrief.frachtbriefdata.evu5.name" class="form-control" disabled />

                      <label for="">Kurzbezeichnung</label>
                      <input type="text" v-model="frachtbrief.frachtbriefdata.evu5.short" class="form-control" disabled />

                      <label for="">EVU Code</label>
                      <input type="text" v-model="frachtbrief.frachtbriefdata.evu5.code" class="form-control" disabled />
                    </div>
                  </em>


                </div>
              </div>
              <button class="btn btn-primary mb-2" v-on:click="zwBahnhof5=!zwBahnhof5">5. Zwischenbahnhof hinzufügen</button>


              <!-- ############################################################ 5. Zwischenbahnhof ############################################################ -->
              <em v-if="zwBahnhof5">
                <div class="card mb-2">
                  <div class="card-body">
                    <div class="form-group">
                      <label for="adresse">5. Zwischenbahnhof</label>

                      <select class="form-control" v-model="frachtbrief.frachtbriefdata.bahnhof6">
                        <option v-bind:value="frachtbrief.frachtbriefdata.bahnhof_def"></option>
                        <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
                      </select>
                      <button class="btn btn-link py-0" v-on:click="viewBahnhof6=!viewBahnhof6">Details anzeigen</button>
                    </div>

                    <em v-if="viewBahnhof6">
                      <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof6.name" class="form-control" disabled />

                        <label for="">Bahnhofscode</label>
                        <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof6.bahnhofscode" class="form-control" disabled />

                        <label for="">Ländercode</label>
                        <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof6.laendercode" class="form-control" disabled />

                        <label for="">Land</label>
                        <input type="text" v-model="frachtbrief.frachtbriefdata.bahnhof6.land" class="form-control" disabled />
                      </div>
                    </em>

                    <label for="adresse">Beförderer (ab diesem Bahnhof)</label>

                    <select class="form-control" v-model="frachtbrief.frachtbriefdata.evu6">
                      <option v-bind:value="frachtbrief.frachtbriefdata.evu_def"></option>
                      <option v-for="evu in evus" v-bind:value="evu" v-bind:key="evu.id">{{ evu.name }}</option>
                    </select>
                    <button class="btn btn-link py-0" v-on:click="viewEvu6=!viewEvu6">Details anzeigen</button>
                    <em v-if="viewEvu6">
                      <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" v-model="frachtbrief.frachtbriefdata.evu6.name" class="form-control" disabled />

                        <label for="">Kurzbezeichnung</label>
                        <input type="text" v-model="frachtbrief.frachtbriefdata.evu6.short" class="form-control" disabled />

                        <label for="">EVU Code</label>
                        <input type="text" v-model="frachtbrief.frachtbriefdata.evu6.code" class="form-control" disabled />
                      </div>
                    </em>
                  </div>
                </div>

              </em> <!-- 5. Zwischenbahnhof -->
            </em> <!-- 4. Zwischenbahnhof -->
          </em> <!-- 3. Zwischenbahnhof -->
        </em> <!-- 2. Zwischenbahnhof -->
      </em> <!-- 1. Zwischenbahnhof -->



      <!-- ############################################################ ÜBERNAHMEORT & ZEIT ############################################################ -->


      <div class="card mb-2">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-6">
              <label for="adresse">Übernahmeort</label>

              <select class="form-control" v-model="frachtbrief.frachtbriefdata.ubernahmeort">
                <option v-bind:value="frachtbrief.frachtbriefdata.bahnhof_def"></option>
                <option v-for="bahnhof in bahnhoefe" v-bind:value="bahnhof" v-bind:key="bahnhof.id">{{ bahnhof.name }}</option>
              </select>

              <button class="btn btn-link py-0" v-on:click="viewUbernahmeort=!viewUbernahmeort">Details anzeigen</button>

              <em v-if="viewUbernahmeort">
                <div class="form-group">
                  <label for="">Name</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.ubernahmeort.name" class="form-control" disabled />

                  <label for="">Bahnhofscode</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.ubernahmeort.bahnhofscode" class="form-control" disabled />

                  <label for="">Ländercode</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.ubernahmeort.laendercode" class="form-control" disabled />

                  <label for="">Land</label>
                  <input type="text" v-model="frachtbrief.frachtbriefdata.ubernahmeort.land" class="form-control" disabled />
                </div>
              </em>
            </div>

            <div class="col-sm-6">
              <label for="adresse">Übernahmedatum und Uhrzeit</label>
              <datetime type="datetime" v-model="frachtbrief.frachtbriefdata.ubernahmeort.datum" value-zone="Europe/Berlin" ></datetime>
            </div>
          </div>
        </div>
      </div>


      <!-- ############################################################ Frachtbrief-Typ ############################################################ -->


      <div class="card mb-2">
        <div class="card-body">
          <label>Frachtbrief Typ:</label>
          <div class="form-check form-check-inline">
            <input class="form-check-input" id="CIM" type="radio" name="type" value="CIM" v-model="frachtbrief.frachtbriefdata.type"/>
            <label class="form-check-label" for="CIM">CIM</label>
          </div>

          <div class="form-check form-check-inline">
            <input class="form-check-input" id="CUV" type="radio" name="type" value="CUV" v-model="frachtbrief.frachtbriefdata.type"/>
            <label class="form-check-label" for="CUV">CUV</label>
          </div>
        </div>
      </div>


      <!-- ############################################################ AUSSTELLUNGSORT ############################################################ -->


      <div class="card mb-2">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-6">
              <label for="adresse">Ausstellungsort</label>
              <input type="text" v-model="frachtbrief.frachtbriefdata.ausstellung.ort" class="form-control" />
            </div>
            <div class="col-sm-6">
              <label for="adresse">Ausstellungsdatum</label>
              <datetime v-model="frachtbrief.frachtbriefdata.ausstellung.datum" value-zone="Europe/Berlin" ></datetime>
            </div>
          </div>
        </div>
      </div>


      <!-- ############################################################ ANDERE BEFÖRDERER ############################################################ -->

      <div class="card mb-2">
        <div class="card-body">

          <div class="row">
            <label class="col-sm-7" for="adresse">Andere Beförderer</label>
            <button class="btn btn-primary col-sm-4 mx-2" v-on:click="aBefordererVorschlag()">Vorschlag generieren</button>
          </div>
          <div class="row">
            <div class="col-4 mb-1">EVU</div>
            <div class="col-8 mb-1">Strecke</div>

            <div class="col-4 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer1.name" class="form-control" /></div>
            <div class="col-8 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer1.strecke" class="form-control" /></div>

            <div class="col-4 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer2.name" class="form-control" /></div>
            <div class="col-8 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer2.strecke" class="form-control" /></div>

            <div class="col-4 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer3.name" class="form-control" /></div>
            <div class="col-8 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer3.strecke" class="form-control" /></div>

            <div class="col-4 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer4.name" class="form-control" /></div>
            <div class="col-8 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer4.strecke" class="form-control" /></div>

            <div class="col-4 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer5.name" class="form-control" /></div>
            <div class="col-8 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer5.strecke" class="form-control" /></div>

            <div class="col-4 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer6.name" class="form-control" /></div>
            <div class="col-8 mb-1"><input type="text" v-model="frachtbrief.frachtbriefdata.aBeforderer6.strecke" class="form-control" /></div>
          </div>
        </div>
      </div>


      <!-- ############################################################ ERKLÄRUNGEN ############################################################ -->

      <div class="card mb-2">
        <div class="card-body">
          <div class="form-group">
            <label for="erklarung">Erklärungen</label>

            <select class="form-control" v-model="frachtbrief.frachtbriefdata.erklarung">
              <option v-bind:value="frachtbrief.frachtbriefdata.erklarung_def">neu anlegen</option>
              <option v-for="erklarung in erklarungen" v-bind:value="erklarung" v-bind:key="erklarung.id">{{ erklarung.code }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="wagenummer">Code mit Erläuterung</label>
            <textarea type="text" v-model="frachtbrief.frachtbriefdata.erklarung.code" class="form-control"/>

          </div>
        </div>
      </div>

    </form>

    <label>Als Vorlage verwenden:</label>
    <div class="form-check form-check-inline">
      <input class="form-check-input" id="vorlagefalse" type="radio" name="vorlage" value="false" v-model="frachtbrief.frachtbriefdata.vorlage"/>
      <label class="form-check-label" for="vorlagefalse">Nein</label>
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" id="vorlagetrue" type="radio" name="vorlage" value="true" v-model="frachtbrief.frachtbriefdata.vorlage"/>
      <label class="form-check-label" for="vorlagetrue">Ja</label>
    </div>


    <div class="form-row float-right">
      <em v-if="nachricht">
        {{nachricht.text}}
      </em>

      <em v-if="frachtbrief.pdf_id == null"><button class="btn btn-secondary mb-5 mx-1" v-on:click="generatePdfButton">PDF generieren</button></em>
      <em v-if="frachtbrief.pdf_id != null"><button class="btn btn-link mb-5 mx-1" v-on:click="viewPdfButton">PDF anzeigen</button></em>

      <button class="btn btn-success mb-5" v-on:click="speichern()" :disabled="frachtbrief.pdf_id != null" >Speichern</button>
    </div>

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
            zwBahnhof1: false,
            zwBahnhof2: false,
            zwBahnhof3: false,
            zwBahnhof4: false,
            zwBahnhof5: false,
            viewEvu1: false,
            viewEvu2: false,
            viewEvu3: false,
            viewEvu4: false,
            viewEvu5: false,
            viewEvu6: false,
            viewAdresse1: false,
            viewAdresse2: false,
            viewUbernahmeort: false,
            viewBahnhof1: false,
            viewBahnhof2: false,
            viewBahnhof3: false,
            viewBahnhof4: false,
            viewBahnhof5: false,
            viewBahnhof6: false,
            viewBahnhof7: false,

        }

    },
    computed: {
        ...mapState({
            
            frachtbrief: state => state.frachtbrief.all.items,
            brief: state => state.frachtbrief.all,
            pdf: state => state.frachtbrief.pdf.items,

            bahnhoefe: state => state.bahnhof.all.items,
            evus: state => state.evu.all.items,
            adressen: state => state.adresse.all.items,
            erklarungen: state => state.erklarung.all.items,
            nachricht: state => state.frachtbrief.nachricht
        })
    },
    created () {
        
        this.getById(this.$route.params.id)
        
        
    },
    mounted () {
        this.getAllBahnhof();
        this.getAllEvu();
        this.getAllAdresse();
        this.getAllErklarung();
        console.log('mount')
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
         ...mapActions('bahnhof', {getAllBahnhof: 'getAll'}),
        ...mapActions('evu', {getAllEvu: 'getAll'}),
        ...mapActions('adresse', {getAllAdresse: 'getAll'}),
        ...mapActions('erklarung', {createErklarung: 'create'}),
        ...mapActions('erklarung', {getAllErklarung: 'getAll'}),
        speichern() {
            console.log("handlesub")
            let data = this.frachtbrief;
                   this.update(data);
              
        },
       
    generatePdfButton() {
            
                   let data = this.frachtbrief;
                  this.createPDF(data).then(this.getById(this.$route.params.id));
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
    handleSubmit(){

    },

    aBefordererVorschlag() {





if(this.frachtbrief.frachtbriefdata.evu2.name==''){
    this.frachtbrief.frachtbriefdata.aBeforderer1.name=this.frachtbrief.frachtbriefdata.evu1.name;
    this.frachtbrief.frachtbriefdata.aBeforderer1.strecke=this.frachtbrief.frachtbriefdata.bahnhof1.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof7.name;
} 

if(this.frachtbrief.frachtbriefdata.evu2.name!='' && this.frachtbrief.frachtbriefdata.evu3.name==''){
    this.frachtbrief.frachtbriefdata.aBeforderer1.name=this.frachtbrief.frachtbriefdata.evu1.name;
    this.frachtbrief.frachtbriefdata.aBeforderer1.strecke=this.frachtbrief.frachtbriefdata.bahnhof1.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof2.name;

    this.frachtbrief.frachtbriefdata.aBeforderer2.name=this.frachtbrief.frachtbriefdata.evu2.name;
    this.frachtbrief.frachtbriefdata.aBeforderer2.strecke=this.frachtbrief.frachtbriefdata.bahnhof2.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof7.name;

}

if(this.frachtbrief.frachtbriefdata.evu2.name!='' && this.frachtbrief.frachtbriefdata.evu3.name!='' && this.frachtbrief.frachtbriefdata.evu4.name==''){
    this.frachtbrief.frachtbriefdata.aBeforderer1.name=this.frachtbrief.frachtbriefdata.evu1.name;
    this.frachtbrief.frachtbriefdata.aBeforderer1.strecke=this.frachtbrief.frachtbriefdata.bahnhof1.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof2.name;

    this.frachtbrief.frachtbriefdata.aBeforderer2.name=this.frachtbrief.frachtbriefdata.evu2.name;
    this.frachtbrief.frachtbriefdata.aBeforderer2.strecke=this.frachtbrief.frachtbriefdata.bahnhof2.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof3.name;

    this.frachtbrief.frachtbriefdata.aBeforderer3.name=this.frachtbrief.frachtbriefdata.evu3.name;
    this.frachtbrief.frachtbriefdata.aBeforderer3.strecke=this.frachtbrief.frachtbriefdata.bahnhof3.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof7.name;

}

if(this.frachtbrief.frachtbriefdata.evu2.name!='' && this.frachtbrief.frachtbriefdata.evu3.name!='' && this.frachtbrief.frachtbriefdata.evu4.name!='' && this.frachtbrief.frachtbriefdata.evu5.name==''){
    this.frachtbrief.frachtbriefdata.aBeforderer1.name=this.frachtbrief.frachtbriefdata.evu1.name;
    this.frachtbrief.frachtbriefdata.aBeforderer1.strecke=this.frachtbrief.frachtbriefdata.bahnhof1.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof2.name;

    this.frachtbrief.frachtbriefdata.aBeforderer2.name=this.frachtbrief.frachtbriefdata.evu2.name;
    this.frachtbrief.frachtbriefdata.aBeforderer2.strecke=this.frachtbrief.frachtbriefdata.bahnhof2.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof3.name;

    this.frachtbrief.frachtbriefdata.aBeforderer3.name=this.frachtbrief.frachtbriefdata.evu3.name;
    this.frachtbrief.frachtbriefdata.aBeforderer3.strecke=this.frachtbrief.frachtbriefdata.bahnhof3.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof4.name;

    this.frachtbrief.frachtbriefdata.aBeforderer4.name=this.frachtbrief.frachtbriefdata.evu4.name;
    this.frachtbrief.frachtbriefdata.aBeforderer4.strecke=this.frachtbrief.frachtbriefdata.bahnhof4.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof7.name;

}

if(this.frachtbrief.frachtbriefdata.evu2.name!='' && this.frachtbrief.frachtbriefdata.evu3.name!='' && this.frachtbrief.frachtbriefdata.evu4.name!='' && this.frachtbrief.frachtbriefdata.evu5.name!='' && this.frachtbrief.frachtbriefdata.evu6.name==''){
    this.frachtbrief.frachtbriefdata.aBeforderer1.name=this.frachtbrief.frachtbriefdata.evu1.name;
    this.frachtbrief.frachtbriefdata.aBeforderer1.strecke=this.frachtbrief.frachtbriefdata.bahnhof1.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof2.name;

    this.frachtbrief.frachtbriefdata.aBeforderer2.name=this.frachtbrief.frachtbriefdata.evu2.name;
    this.frachtbrief.frachtbriefdata.aBeforderer2.strecke=this.frachtbrief.frachtbriefdata.bahnhof2.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof3.name;

    this.frachtbrief.frachtbriefdata.aBeforderer3.name=this.frachtbrief.frachtbriefdata.evu3.name;
    this.frachtbrief.frachtbriefdata.aBeforderer3.strecke=this.frachtbrief.frachtbriefdata.bahnhof3.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof4.name;

    this.frachtbrief.frachtbriefdata.aBeforderer4.name=this.frachtbrief.frachtbriefdata.evu4.name;
    this.frachtbrief.frachtbriefdata.aBeforderer4.strecke=this.frachtbrief.frachtbriefdata.bahnhof4.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof5.name;

    this.frachtbrief.frachtbriefdata.aBeforderer5.name=this.frachtbrief.frachtbriefdata.evu5.name;
    this.frachtbrief.frachtbriefdata.aBeforderer5.strecke=this.frachtbrief.frachtbriefdata.bahnhof5.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof7.name;

}

if(this.frachtbrief.frachtbriefdata.evu2.name!='' && this.frachtbrief.frachtbriefdata.evu3.name!='' && this.frachtbrief.frachtbriefdata.evu4.name!='' && this.frachtbrief.frachtbriefdata.evu5.name!='' && this.frachtbrief.frachtbriefdata.evu6.name!=''){
    this.frachtbrief.frachtbriefdata.aBeforderer1.name=this.frachtbrief.frachtbriefdata.evu1.name;
    this.frachtbrief.frachtbriefdata.aBeforderer1.strecke=this.frachtbrief.frachtbriefdata.bahnhof1.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof2.name;

    this.frachtbrief.frachtbriefdata.aBeforderer2.name=this.frachtbrief.frachtbriefdata.evu2.name;
    this.frachtbrief.frachtbriefdata.aBeforderer2.strecke=this.frachtbrief.frachtbriefdata.bahnhof2.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof3.name;

    this.frachtbrief.frachtbriefdata.aBeforderer3.name=this.frachtbrief.frachtbriefdata.evu3.name;
    this.frachtbrief.frachtbriefdata.aBeforderer3.strecke=this.frachtbrief.frachtbriefdata.bahnhof3.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof4.name;

    this.frachtbrief.frachtbriefdata.aBeforderer4.name=this.frachtbrief.frachtbriefdata.evu4.name;
    this.frachtbrief.frachtbriefdata.aBeforderer4.strecke=this.frachtbrief.frachtbriefdata.bahnhof4.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof5.name;

    this.frachtbrief.frachtbriefdata.aBeforderer5.name=this.frachtbrief.frachtbriefdata.evu5.name;
    this.frachtbrief.frachtbriefdata.aBeforderer5.strecke=this.frachtbrief.frachtbriefdata.bahnhof5.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof6.name;

    this.frachtbrief.frachtbriefdata.aBeforderer6.name=this.frachtbrief.frachtbriefdata.evu6.name;
    this.frachtbrief.frachtbriefdata.aBeforderer6.strecke=this.frachtbrief.frachtbriefdata.bahnhof6.name + ' - ' + this.frachtbrief.frachtbriefdata.bahnhof7.name;

}
    }

        
    }
};
</script>

<style>
@import '/node_modules/vue-datetime/dist/vue-datetime.css';

</style>