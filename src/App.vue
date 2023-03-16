<template>
  <v-app>

    <template v-if="isSmallScreen">
      <v-app-bar class="flex-grow-0 header-app" app dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <div class="pl-5">Menu</div>
        </v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer class="side-menu" app v-model="drawer">
        <v-list-item class="pb-2">
          <v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>

          <v-list-item class="side-menu-link" :class="isActive('')" link @click="changeTab('home')">
            <v-list-item-content>
              <v-list-item-title class="text-link">Bienvenidos!</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="side-menu-link" :class="isActive('confirmation')" link @click="changeTab('confirmation')">
            <v-list-item-content>
              <v-list-item-title class="text-link">Confirma tu Asistencia</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="side-menu-link" :class="isActive('information')" link @click="changeTab('information')">
            <v-list-item-content>
              <v-list-item-title class="text-link">Cronograma</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
    </template>
    <template v-else>
      <v-app-bar app>
        <v-tabs centered style="background-color: #88a185;">
          <v-tab class="d-none d-md-flex d-lg-flex" style="color:white;" @click="changeTab('home')" id="home-tab">
            <div v-if="$vuetify.breakpoint.smAndDown">Inicio</div>
            <div v-else>¡Bienvenidos!</div>
          </v-tab>
          <v-tab class="d-none d-md-flex d-lg-flex" style="color:white;" @click="changeTab('confirmation')"
            id="confirmation-tab">
            <div v-if="$vuetify.breakpoint.smAndDown">Confirmar</div>
            <div v-else>Confirma tu Asistencia</div>
          </v-tab>
          <v-tab class="d-none d-md-flex d-lg-flex" style="color:white;" @click="changeTab('information')"
            id="information-tab">
            <div v-if="$vuetify.breakpoint.smAndDown">Info</div>
            <div v-else>Cronograma</div>
          </v-tab>
        </v-tabs>
      </v-app-bar>
    </template>





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
    drawer: false
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
    },
    isActive(router) {
      return {
        'active': this.$route.path === '/' + router
      }
    }
  },
  computed: {
    isSmallScreen() {
      return this.$vuetify.breakpoint.width < 600; // ajuste el ancho según sea necesario
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";
.v-application {
  .texts{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.5;
    font-size: 18px;
  }  
}

.header-app {
  background-color: $theme-main-color !important;
}

.side-menu {
  .v-list {
    padding: 0px;
  }

  background-color: $theme-main-color-darker !important;

  .text-link {
    color: white;
    font-size: 18px;
    padding: 12px;
  }

  .side-menu-link {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 0px !important;
  }

  .active {
    background-color: $theme-main-color-light;
  }
}
</style>