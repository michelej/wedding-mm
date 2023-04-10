<template>
  <v-main class="confirmation">
    <v-container grow d-flex flex-column flex-nowrap>
      <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage"></loading>
      <v-row justify="center" class="grow">

        <v-col xs="12" sm="12" md="10" lg="9" xl="7" class="main-row">
          <v-card fill-height>
            <div class="card-content" v-if="available()">

              <header-couple></header-couple>

              <v-row class="pt-5 pb-0">
                <v-col cols="12">
                  <div class="text-top text-center">¿Nos acompañas o te lo pierdes?</div>
                </v-col>
                <v-col cols="12" xl="6">
                  <v-img :src="require('@/assets/rsvp-card.jpg')" height="180px"></v-img>
                </v-col>
                <v-col cols="12" xl="6">
                  <p class="text-content-top text-content text-justify texts"> Para confirmar tu asistencia a la boda solo
                    tienes que escribir tu nombre completo y tu numero de teléfono para poder identificarte, recuerda si
                    vienes con tu pareja o hijo
                    de incluirlos.
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" xl="6">
                  <strong>Rellene sus datos</strong>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" xl="4">
                  <div class="d-flex">
                    <v-text-field class="flex-grow-1" dense outlined v-model="fullname"
                      label="Nombre completo"></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" xl="4">
                  <div class="d-flex">
                    <VuePhoneNumberInput v-model="telephone" :translations='translations' :only-countries='countries' />
                  </div>
                </v-col>
                <v-col cols="12" xl="4" class="mt-2 mb-2">
                  <div class="d-flex">
                    <v-btn elevation="2" class="ml-2" color="success" @click="searchPhone()">Continuar</v-btn>
                    <v-btn elevation="2" class="ml-2" color="primary" @click="resetData()">Reiniciar</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" v-if="missingData">
                  <v-alert type="error"> Por favor , rellenar los datos antes de continuar.</v-alert>
                </v-col>
              </v-row>


              <div class="d-flex" v-if="resultDone">
                <div class="result-done text-justify mt-5">Hemos recopilado tu información, si lo deseas lo puedes
                  volver a hacer si necesitas rectificar o cambiar algo lo podras hacer hasta el
                  <strong>{{ deadline }}</strong> en ese punto sera todo definitivo.<br> <br> Gracias !
                </div>
              </div>

              <div v-if="searchDone" class="search-field mt-4">
                <div class="d-flex flex-column">
                  <div class="assitance-group">
                    <v-radio-group v-model="user.assistance" label="Primero que todo indicanos si vas a asistir?"
                      :value="null" @change="onOptionSelected">
                      <v-radio label="Sí" :value="true"></v-radio>
                      <v-radio label="No" :value="false"></v-radio>
                    </v-radio-group>
                  </div>

                  <div v-if="choiceSelected">
                    <div v-if="willAssist">

                      <template v-if="counter > 0">
                        <v-row align-content="stretch" class="bordered" v-for="(c, index) in user.guests" :key="c.id">
                          <v-col cols="6">
                            <div><strong>Acompañante {{ index + 1 }}</strong></div>
                          </v-col>
                          <v-col cols="6" class="text-right">
                            <v-btn color="error" class="button ml-2 mt-0 right" fab small
                              @click="removeGuest(c.id)"><v-icon dark>
                                mdi-minus
                              </v-icon></v-btn>
                          </v-col>
                          <v-col cols="12" xs="12" sm="12" md="12" lg="7" xl="7" class="pt-0 pb-0">
                            <v-text-field class="flex-grow-1 small" dense outlined v-model="c.name"
                              label="Nombre completo" required></v-text-field>
                          </v-col>
                          <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5" class="pt-0 pb-0">
                            <v-select class="flex-grow-1 small" dense :items="personType" v-model="c.type"
                              label="Adulto o Niño" outlined></v-select>
                          </v-col>
                        </v-row>
                      </template>

                      <v-col xs="12" class="d-flex mb-5">
                        <v-btn left color="primary" @click="addGuest()" full-width>Añadir acompañante o hijos</v-btn>
                      </v-col>

                      <v-label for="textarea1">¿Alguna alergia o algo que debamos tener en cuenta?</v-label>
                      <v-textarea outlined id="textarea1" v-model="user.allergies"></v-textarea>

                      <v-label for="textarea2">Deja un comentario adicional si lo deseas</v-label>
                      <v-textarea outlined id="textarea2" v-model="user.comments"></v-textarea>




                      <v-row>
                        <v-col xs="12" sm="12" md="6" lg="6" xl="6" class="d-flex justify-center align-center">
                          <VueReCaptcha v-if="!realUser" ref="recaptcha" @verify="onVerify" :sitekey=siteKey>
                          </VueReCaptcha>
                          <v-btn right color="success" @click="save()" v-if="realUser" full-width>Guardar
                            Información</v-btn>
                        </v-col>
                      </v-row>
                    </div>

                    <div v-else>
                      <v-row align="center" justify="center">
                        <v-col cols="12">
                          <p class="text-center">Muchas gracias por confirmarnos.!</p>
                        </v-col>
                        <VueReCaptcha v-if="!realUser" ref="recaptcha" @verify="onVerify" :sitekey=siteKey></VueReCaptcha>
                        <v-btn class="center" color="success" @click="save()" v-if="realUser" full-width>Guardar
                          Información</v-btn>
                      </v-row>
                    </div>
                  </div>

                </div>

              </div>

            </div>
            <div class="card-content" v-else>
              <header-couple></header-couple>

              <v-row class="pt-5 pb-0">
                <v-col cols="12">
                  <div class="text-top text-center">¿Nos acompañas o te lo pierdes?</div>
                </v-col>
                <v-col cols="12" xl="6">
                  <v-img :src="require('@/assets/rsvp-card.jpg')" height="180px"></v-img>
                </v-col>
                <v-col cols="12" xl="6">
                  <p class="text-content-top text-content text-justify texts"> Para confirmar tu asistencia a la boda solo
                    tienes que escribir tu nombre completo y tu numero de teléfono para poder identificarte, recuerda si
                    vienes con tu pareja o hijo
                    de incluirlos.
                  </p>                                    
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                <v-alert type="info"> El plazo se ha cumplido, ya queda muy poco para el gran dia</v-alert>
                </v-col>
              </v-row>
            </div>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
  
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueReCaptcha from 'vue-recaptcha';
import HeaderCouple from "@/components/HeaderCouple.vue";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import api from "../services/backend";
export default {
  name: 'ConfirmationPage',
  components: {
    HeaderCouple,
    VuePhoneNumberInput,
    VueReCaptcha,
    Loading
  },
  data() {
    return {
      fullPage: true,
      isLoading: false,
      siteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
      realUser: false,
      missingData: false,
      resultDone: false,
      counter: 0,
      fullname: '',
      telephone: '',
      searchDone: false,
      phoneFound: false,
      choiceSelected: false,
      willAssist: false,
      personType: ["Adulto", "Niño"],
      user: {
        assistance: null
      },
      ipAddress: '',
      deadline: '10 de Abril',
      deatlineTime: new Date("2023-04-11"),
      translations: {
        countrySelectorLabel: 'Pais',
        countrySelectorError: 'Elige un Pais',
        phoneNumberLabel: 'Teléfono',
        example: 'Ejemplo :'
      },
      countries: ["ES", "DE", "CO", "VE"],
      defaultCountry: "ES"
    };
  },
  mounted() {
    fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => { this.ipAddress = data.ip; })
      .catch(error => {
        console.error('Error fetching IP address', error);
      });
  },
  watch: {
    fullname() {
      if (this.missingData) {
        this.resetData();
      }
      this.missingData = false;
    },
    telephone() {
      if (this.missingData) {
        this.resetData();
      }
      this.missingData = false;
    }
  },
  methods: {
    available() {      
      return new Date() < this.deatlineTime;
    },
    resetData() {
      this.realUser = false
      this.fullname = ''
      this.telephone = ''
      this.counter = 0
      this.searchDone = false
      this.phoneFound = false
      this.choiceSelected = false
      this.willAssist = false
      this.user = {
        assistance: null
      }
    },
    async searchPhone() {
      this.missingData = false;
      this.realUser = false;
      if (this.fullname != '' && this.telephone != '') {
        this.isLoading = true
        try {
          this.resultDone = false
          this.telephone = this.telephone.replaceAll(" ", "")
          let response = await api.searchConfirmation(this.telephone);
          this.searchDone = true
          this.phoneFound = false
          if (response.status == 200) {
            this.phoneFound = true
            this.user = response.data
          } else if (response.status == 204) {
            this.phoneFound = false
            this.user.fullname = this.fullname
            this.user.telephone = this.telephone
          }
          this.user.guests = []
          this.user.ipAddress = this.ipAddress
          this.user.assistance = null
          this.user.autocar = null
          this.user.objectId = null
          this.isLoading = false
        } catch (error) {
          this.$fire({
            title: "Error",
            text: "Ha ocurrido un error, Intentalo de nuevo mas tarde",
            type: "error",
            timer: 5000
          });
          this.isLoading = false
        }
      } else {
        this.missingData = true;
      }
    },
    addGuest() {
      this.user.guests.push({ id: this.counter, name: '', type: this.personType[0] })
      this.counter = this.counter + 1;
    },
    removeGuest(id) {
      if (this.user.guests.length == 1) {
        this.user.guests = []
      } else {
        this.user.guests = this.user.guests.filter(guest => guest.id != id);
      }
    },
    onOptionSelected() {
      this.choiceSelected = true
      this.willAssist = this.user.assistance
    },
    async save() {
      try {
        this.isLoading = true
        if (this.user.assistance == true) {
          this.user.guests = this.user.guests.filter(e => e.name != '')
        } else {
          this.user.guests = []
        }
        if (this.user.objectId) {
          await api.saveConfirmation(this.user);
        } else {
          await api.createConfirmation(this.user);
        }

        await api.saveConfirmationVersion(this.user);
        this.resetData();
        this.resultDone = true
        this.isLoading = false
        this.$fire({
          title: "Exito",
          text: "El formulario se ha enviado con exito, ya tenemos tu información.",
          type: "success",
          timer: 3000
        });
      } catch (error) {
        this.$fire({
          title: "Error",
          text: "Ha ocurrido un error, Intentalo de nuevo mas tarde",
          type: "error",
          timer: 5000
        });
        this.isLoading = false
      }
    },
    async onVerify(response) {
      try {
        await api.checkRecaptcha(response);
        this.realUser = true;
      } catch (error) {
        this.$fire({
          title: "Error",
          text: "Ha ocurrido un error, Intentalo de nuevo mas tarde",
          type: "error",
          timer: 5000
        });
      }

    }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";

.confirmation {
  background: rgb(244, 244, 244);
  background: linear-gradient(90deg, rgba(244, 244, 244, 1) 0%, rgba(227, 236, 227, 1) 50%, rgba(219, 226, 221, 1) 100%);

  .text-top {
    padding: 0px;
    font-size: 30px;
    font-weight: bold;
  }

  .card-content {
    padding: 20px;
    min-height: 85vh;
  }

  .v-input--radio-group legend.v-label {
    font-size: 18px !important;
  }

  .v-input--radio-group legend.v-label {
    font-size: 18px !important;
  }

  .search-field {
    padding-bottom: 100px;
  }

  .bordered {
    border: 1px dotted rgb(109, 109, 109);
    padding: 10px;
    margin-bottom: 5px;
    background-color: #efefef;
  }

  .small .v-input__control input {
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    padding: 0 4px;
  }

  .result-done {
    border: #88a185 solid 1px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .confirmation {
    .text-top {
      font-size: 20px;
    }

    .text-content {
      font-size: 15px;
    }

    .v-label {
      font-size: 14px;
    }

    .v-input--radio-group legend.v-label {
      font-size: 14px !important;
    }

    .v-input--radio-group legend.v-label {
      font-size: 14px !important;
    }
  }
}
</style>
  