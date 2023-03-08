<template>
  <v-app>  
    <v-app-bar app>                    
      <template >
        <v-tabs centered style="background-color: #222222;">              
          <v-tab style="color:white;" @click="changeTab('home')" id="home-tab">¡Bienvenidos!</v-tab>
          <v-tab style="color:white;" @click="changeTab('confirmation')" id="confirmation-tab">Confirma tu Asistencia</v-tab>          
          <v-tab style="color:white;" @click="changeTab('information')" id="information-tab">Información</v-tab>          
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
