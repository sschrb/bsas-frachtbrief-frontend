<template>
  <div class="container-fluid">
    <div class="row">


      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand">M.A.D Tools</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <!-- klappt Navbar auf Smartphones ein -->
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarAnlegen" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Anlegen
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarAnlegen">
                <a class="nav-link" href="#"><router-link to="/ladeliste">Ladeliste anlegen</router-link></a>
                <a class="nav-link" href="#"><router-link to="/">Frachtbrief anlegen</router-link></a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/history">Bearbeiten u. Historie</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/verwaltung">Administration</router-link></a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://tim-langhoff.de/projekte/cim-frachtbrief/index.html" target="_blank">Anleitung</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/login">Abmelden</router-link></a>
            </li>
          </ul>
        </div>
      </nav>


      <div class="container col-sm-6 offset-sm-3 bg-light pt-3"> <!-- Content würde sonst hinter Navbar liegen -->
      </div>
      <div class="container col-sm-6 offset-sm-3 bg-light pt-5">
              <div v-if="alert.message" :class="`alert ${alert.type}`"> <!-- Fehlermeldung werden unterhalb der Navbar dargestellt -->
        {{alert.message}}
      </div>

        <router-view></router-view> <!-- Inhalt der einzelnen Seiten -->

      </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'app',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear'
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    }
};
</script>
