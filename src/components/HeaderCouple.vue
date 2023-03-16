<template>
  <div class="header-theme">
    <v-row>
      <v-col cols="12" sm="5" md="4" lg="4" xl="4"  class="background d-flex align-center couples-text">
        <div class="header-text">{{ groom }} / {{ bride }}</div>
      </v-col>
      <v-col cols="3" sm="2" md="4" lg="4" xl="4" class="d-none d-sm-flex d-lg-flex"></v-col>
      <v-col cols="12" sm="5" md="4" lg="4" xl="4">
        <v-row>          
          <v-col><div class="background white-text">{{days}}</div><div class="black-text">Dias</div></v-col>
          <v-col><div class="background white-text">{{hours}}</div><div class="black-text">Horas</div></v-col>
          <v-col><div class="background white-text">{{minutes}}</div><div class="black-text">Minutos</div></v-col>
        </v-row>                
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HeaderCouple",
  data() {
    return {
      endDate: new Date("2023-04-22T00:00:00"),      
      groom: "Michel",
      bride: "Marlis",
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const diff = Math.floor((this.endDate - now) / 1000);

      if (diff < 0) {
        // si ya se alcanzó la fecha de finalización, detener la cuenta regresiva
        clearInterval(this.interval);
        return;
      }

      // calcular los días, horas, minutos y segundos restantes
      this.days = Math.floor(diff / 86400);
      this.hours = Math.floor((diff % 86400) / 3600);
      this.minutes = Math.floor((diff % 3600) / 60);
      this.seconds = diff % 60;
    },
  },
  mounted() {
    // actualizar la cuenta regresiva cada segundo
    this.interval = setInterval(this.updateCountdown, 1000);
  },
  beforeDestroy() {
    // limpiar el intervalo de actualización antes de destruir el componente
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
  .header-theme{    
    .header-text{
      font-size: 30px;
      color:#3e4c3c;
      font-weight: 500;
      //font-family: "Bree Serif", serif;
      font-family: "Montez", cursive, "Times New Roman", serif;
    }
    .couples-text{
      text-align: center;
      align-items: center;
      justify-content: center; 
    }
    .background{
      background-color: $theme-main-color;
    }
    .white-text{
      color:white;
      font-size: bold;
      text-align: center;
      font-size: 30px;
    }
    .black-text{
      font-size: 14px;
      font-weight: 400;
      text-align: center;
    }
  }
</style>