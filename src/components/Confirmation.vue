<template>
  <v-main class="confirmation">
    <v-container grow d-flex flex-column flex-nowrap>
      <v-row justify="center" class="grow">
        
        <v-col xs="12" sm="12" md="10" lg="9" xl="7" class="main-row">
          <v-card fill-height>
            <div class="card-content">

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
                    tienes que escribir tu
                    numero de
                    teléfono y darle click en
                    <strong>buscar</strong>,
                    aparecerá tu nombre y solo tienes que decir si vienes o no a la boda. (lo de dejar mensaje es opcional
                    pero
                    nos hace ilusión) :)
                  </p>
                </v-col>
              </v-row>

              <v-row class="mb-5">
                <v-col cols="12" xl="8" offset-xl="2">
                  <div class="d-flex">
                    <!--<v-text-field class="flex-grow-1" dense outlined v-model="telephone" label="Teléfono"></v-text-field>-->
                    <VuePhoneNumberInput v-model="telephone" :translations='translations' :only-countries='countries'/>
                    <v-btn elevation="2" class="ml-2" color="primary" @click="searchPhone()">Buscar</v-btn>
                  </div>
                </v-col>
              </v-row>


              <div class="d-flex" v-if="resultDone">
                <div class="result-done text-justify">Hemos recopilado tu información, si lo deseas lo puedes
                  volver a hacer si necesitas rectificar o cambiar algo lo podras hacer hasta el
                  <strong>{{ deadline }}</strong> en ese punto sera todo definitivo.<br> <br> Gracias !</div>
              </div>

              <div v-if="searchDone" class="search-field">
                <div class="d-flex flex-column" v-if="phoneFound">
                  <div class="flex-grow-1">
                    <v-alert type="success">
                      Hola! <strong>{{ user.fullname }}</strong>
                    </v-alert>
                  </div>
                  <div class="assitance-group">
                    <v-radio-group v-model="user.assistance" label="Primero que todo indicanos si vas a asistir?"
                      :value="null" @change="onOptionSelected">
                      <v-radio label="Sí" :value="true"></v-radio>
                      <v-radio label="No" :value="false"></v-radio>
                    </v-radio-group>
                  </div>

                  <div v-if="choiceSelected">
                    <div v-if="willAssist">                      
                      
                      <v-row align-content="stretch" class="bordered" v-for="(c,index) in user.guests" :key="c.id">                        
                        <v-col cols="6">
                          <div><strong>Acompañante {{index+1}}</strong></div>                          
                        </v-col>
                        <v-col cols="6" class="text-right">
                          <v-btn color="error" class="button ml-2 mt-0 right" fab small @click="removeGuest(c.id)"><v-icon dark>
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
                      <v-col xs="12" class="d-flex mb-5">
                       <v-btn left color="primary" @click="addGuest()" full-width>Añadir acompañante o hijos</v-btn>
                      </v-col>

                      <v-label for="textarea1">¿Alguna alergia o algo que debamos tener en cuenta?</v-label>
                      <v-textarea outlined id="textarea1" v-model="user.allergies"></v-textarea>

                      <v-label for="textarea2">Deja un comentario adicional si lo deseas</v-label>
                      <v-textarea outlined id="textarea2" v-model="user.comments"></v-textarea>

                      <v-checkbox v-model="user.autocar" label="Te gustaria un servicio de autocar/autobus?"></v-checkbox>


                      <v-row>                   
                        <v-col xs="12" sm="12" md="6" lg="6" xl="6" class="d-flex justify-center align-center">
                          <v-btn right color="success" @click="save()" full-width>Guardar Información</v-btn>
                        </v-col>
                      </v-row>
                    </div>

                    <div v-else>
                      <v-row align="center" justify="center">
                        <v-col cols="12">
                          <p class="text-center">Muchas gracias por confirmarnos.!</p>
                        </v-col>
                        <v-btn class="center" color="success" @click="save()" full-width>Guardar Información</v-btn>
                      </v-row>
                    </div>
                  </div>

                </div>
                <div class="d-flex" v-else>
                  <v-alert class="flex-grow-1" type="warning">
                    Hola! parece que no hemos encontrado tu numero de teléfono.
                  </v-alert>
                </div>
              </div>

            </div>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
  
<script>
import HeaderCouple from "@/components/HeaderCouple.vue";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import api from "../services/backend";
export default {
  name: 'ConfirmationPage',
  components: {
    HeaderCouple,
    VuePhoneNumberInput
  },
  data() {
    return {
      resultDone: false,
      counter: 0,
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
      translations:{
        countrySelectorLabel: 'Pais',
        countrySelectorError: 'Elige un Pais',
        phoneNumberLabel: 'Teléfono',
        example: 'Ejemplo :'
      },
      countries:["ES","DE","CO","VE"],
      defaultCountry:"ES"
    };
  },
  mounted() {
    fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => { this.ipAddress = data.ip; })
      .catch(error => {
        console.error('Error fetching IP address', error);
      });
  },
  computed: {
  },
  methods: {
    async searchPhone() {
      try {
        this.resultDone = false;        
        let response = await api.searchConfirmation(this.telephone.replaceAll(" ",""));
        this.searchDone = true
        this.phoneFound = false
        if (response.status == 200) {
          this.phoneFound = true
          this.user = response.data
          this.user.ipAddress = this.ipAddress
          this.user.assistance = null
          this.user.autocar = null
        } else if (response.status == 204) {
          this.phoneFound = false
        }
      } catch (error) {
        this.$fire({
          title: "Error",
          text: "Ha ocurrido un error, Intentalo de nuevo mas tarde",
          type: "error",
          timer: 5000
        });
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
        this.user.guests.splice(id, 1)
      }
    },
    onOptionSelected() {
      this.choiceSelected = true
      this.willAssist = this.user.assistance
    },
    reset() {
      this.counter = 0
      this.telephone = ''
      this.searchDone = false
      this.phoneFound = false
      this.choiceSelected = false
      this.willAssist = false
      this.user = {
        assistance: null
      }
    },
    async save() {
      try {
        if (this.user.assistance == true) {
          this.user.guests = this.user.guests.filter(e => e.name != '')
        } else {
          this.user.guests = []
        }        
        await api.saveConfirmation(this.user);
        this.reset();
        this.resultDone = true
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
      }

    }
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";
.confirmation {
  background: rgb(244,244,244);
  background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(227,236,227,1) 50%, rgba(219,226,221,1) 100%);

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
  .result-done{
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
  