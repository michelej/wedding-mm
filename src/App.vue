<template>
  <v-app>  
    <v-app-bar app>                    
      <template >
        <v-tabs centered style="background-color: #222222;">              
          <v-tab class="d-none d-md-flex d-lg-flex" style="color:white;" @click="changeTab('home')" id="home-tab">
            <div v-if="$vuetify.breakpoint.smAndDown">Inicio</div>
            <div v-else>¡Bienvenidos!</div>
          </v-tab>
          <v-tab class="d-none d-md-flex d-lg-flex" style="color:white;" @click="changeTab('confirmation')" id="confirmation-tab">
            <div v-if="$vuetify.breakpoint.smAndDown">Confirmar</div>
            <div v-else>Confirma tu Asistencia</div>
          </v-tab>          
          <v-tab class="d-none d-md-flex d-lg-flex" style="color:white;" @click="changeTab('information')" id="information-tab">
            <div v-if="$vuetify.breakpoint.smAndDown">Info</div>
            <div v-else>Información</div>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
      <router-view></router-view>    
    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  methods: {
    changeTab(tabId) {
      if (tabId === 'home') {
        this.$router.push('/')
      } else if (tabId === 'confirmation') {
        this.$router.push('/confirmation')
      } else if (tabId === 'information') {
        this.$router.push('/information')
      }
    }
  }
};
</script>
