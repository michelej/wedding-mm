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
            <div class="d-flex mt-10">
              <v-text-field class="flex-grow-1" dense outlined v-model="telephone" label="Teléfono"></v-text-field>
              <v-btn elevation="2" class="ml-10 mt-0" color="primary" @click="searchPhone()">Buscar</v-btn>
            </div>
            <div v-if="searchDone">
              <div class="d-flex flex-column" v-if="phoneFound">
                <div class="flex-grow-1">
                  <v-alert type="success">
                    Hola! <strong>{{ user.fullname }}</strong>
                  </v-alert>
                </div>
                <div class="assitance-group">
                  <v-radio-group v-model="assistance" label="Primero que todo indicanos si vas a asistir?" :value="null">
                    <v-radio label="Sí" value="true"></v-radio>
                    <v-radio label="No" value="false"></v-radio>
                  </v-radio-group>
                </div>

                <div v-if="assistance == 'true'">
                  <div class="flex-grow-1 mt-2 mb-4">
                    Que buenas noticias!, a continuacion puedes agregar a las personas que te acompañaran.
                  </div>

                  <div v-for="c in guests" :key="c.id">
                    <div class="d-flex">
                      <v-row>
                        <v-col cols="7" class="d-flex justify-center align-center">
                          <v-text-field class="flex-grow-1" dense outlined v-model="c.name" label="Nombre del invitado"
                            required></v-text-field>
                        </v-col>
                        <v-col cols="5" class="d-flex">
                          <v-select class="flex-grow-1" dense :items="personType" v-model="c.type" label="Adulto o Niño"
                            outlined></v-select>
                          <v-btn color="error" class="button ml-5 mt-0" fab small @click="removeGuest(c.id)"><v-icon dark>
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
                      <v-btn right color="secondary" @click="save()" full-width>Guardar Información</v-btn>
                    </v-col>
                  </v-row>
                </div>

                <div v-if="assistance == 'false'">
                  <div class="flex-grow-1 mt-2 mb-2">
                    Muchas gracias por confirmarnos.!
                  </div>
                  <v-btn right color="secondary" @click="save()" full-width>Guardar Información</v-btn>
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
      assistance: null,
      searchDone: false,
      phoneFound: false,
      guests: [],
      personType: ["Adulto", "Niño"],
      user: {}
    };
  },
  async mounted() {
  },
  computed: {
  },
  methods: {
    async searchPhone() {
      this.searchDone = true
      this.phoneFound = false
      let response = await api.searchConfirmation(this.telephone);
      console.log(response)
      if (response.length > 0) {
        this.phoneFound = true
        this.user = {
          fullname: response[0].get('fullname'),
          telephone: response[0].get('telephone')
        }
      }
    },
    addGuest() {
      this.guests.push({ id: this.counter, name: '', type: '' })
      this.counter = this.counter + 1;
    },
    removeGuest(id) {
      if (this.guests.length == 1) {
        this.guests = []
      } else {
        this.guests.splice(id, 1)
      }
    },
    save() {
      let confirmation = {}
      if (this.assistance == 'true') {
        for (let index = 0; index < this.guests.length; index++) {
          const guest = this.guests[index];
          if (guest.name == '') {
            this.removeGuest(index)
          }
        }
        confirmation = {
          telephone: this.telephone,
          assistance: true,
          guests: this.guests
        }
      } else if (this.assistance == 'false') {
        confirmation = {
          telephone: this.telephone,
          assistance: false,
          guests: []
        }
      }

      console.log(confirmation);
      this.$fire({
        title: "Se han actualizado tu información!",
        type: "success",
        timer: 3000
      });
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
</style>
  