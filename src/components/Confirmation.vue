<template>
  <v-main style="background-color: aliceblue;" class="confirmation">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="5">
          <p class="text-top text-center">¿Nos acompañas o te lo pierdes?</p>
          <p> Para confirmar tu asistencia a la boda solo tienes que escribir tu numero de teléfono y darle click en
            <strong>buscar</strong>,
            aparecerá tu nombre y solo tienes que decir si vienes o no a la boda. (lo de dejar mensaje es opcional pero
            nos hace ilusión) :)
          </p>
          <form>
            <div class="d-flex">
              <v-text-field class="flex-grow-1" dense outlined v-model="telephone" label="Teléfono"></v-text-field>
              <v-btn elevation="2" class="ml-10 mt-0" color="primary" @click="searchPhone()">Buscar</v-btn>
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

                    <v-label for="textarea1">¿Alguna alergia o algo que debamos tener en cuenta?</v-label>
                    <v-textarea outlined id="textarea1" v-model="user.allergies"></v-textarea>

                    <v-label for="textarea2">Deja un comentario adicional si lo deseas</v-label>
                    <v-textarea outlined id="textarea2" v-model="user.comments"></v-textarea>

                    <v-checkbox v-model="checkbox" label="Te gustaria un servicio de autocar/autobus?"></v-checkbox>


                    <div class="flex-grow-1 mt-4 mb-4">
                      A continuacion puedes agregar a las personas que te acompañaran.
                    </div>

                    <div v-for="c in user.guests" :key="c.id">
                      <div class="d-flex">
                        <v-row>
                          <v-col cols="7" class="d-flex justify-center align-center">
                            <v-text-field class="flex-grow-1" dense outlined v-model="c.name" label="Nombre del invitado"
                              required></v-text-field>
                          </v-col>
                          <v-col cols="5" class="d-flex">
                            <v-select class="flex-grow-1" dense :items="personType" v-model="c.type" label="Adulto o Niño"
                              outlined></v-select>
                            <v-btn color="error" class="button ml-5 mt-0" fab small @click="removeGuest(c.id)"><v-icon
                                dark>
                                mdi-minus
                              </v-icon></v-btn>
                          </v-col>
                        </v-row>
                      </div>
                    </div>

                    <v-row>
                      <v-col cols="6" class="d-flex justify-center align-center">
                        <v-btn left color="primary" @click="addGuest()" full-width>Agregar invitado</v-btn>
                      </v-col>
                      <v-col cols="6" class="d-flex justify-center align-center">
                        <v-btn right color="success" @click="save()" full-width>Guardar Información</v-btn>
                      </v-col>
                    </v-row>
                  </div>

                  <div v-else>
                    <div class="flex-grow-1 mt-2 mb-2">
                      Muchas gracias por confirmarnos.!
                    </div>
                    <v-btn right color="secondary" @click="save()" full-width>Guardar Información</v-btn>
                  </div>
                </div>



              </div>
              <div class="d-flex" v-else>
                <v-alert class="flex-grow-1" type="warning">
                  Hola! parece que no hemos encontrado tu numero de teléfono.
                </v-alert>
              </div>
            </div>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
  
<script>
import api from "../services/backend";
export default {
  name: 'ConfirmationPage',
  data() {
    return {
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
      ipAddress: ''
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
        let response = await api.searchConfirmation(this.telephone);
        this.searchDone = true
        this.phoneFound = false
        if (response.status == 200) {
          this.phoneFound = true
          this.user = response.data
          this.user.ipAddress = this.ipAddress
          this.user.assistance = null
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
    async save() {
      try {
        if (this.user.assistance == true) {
          this.user.guests = this.user.guests.filter(e => e.name != '')
        } else {
          this.user.guests = []
        }
        console.log(this.user);
        await api.saveConfirmation(this.user);
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
<style>
.confirmation .text-top {
  padding: 20px 0px 0px 0px;
  font-size: 40px;
}

.confirmation .v-input--radio-group legend.v-label {
  font-size: 18px !important;
}

.confirmation .search-field {
  padding-bottom: 100px;
}
</style>
  