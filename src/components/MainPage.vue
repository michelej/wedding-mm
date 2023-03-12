<template>
  <v-main style="background-color: aliceblue;" class="main-page">
    <v-container grow d-flex flex-column flex-nowrap>
      <v-row justify="center" class="grow">

        <v-col xs="12" sm="12" md="10" lg="9" xl="7" class="main-row">
          <v-card fill-height>
            <div class="card-content">

              <header-couple></header-couple>

              <v-row class="pt-5">
                <v-col cols="6" sm="4" md="4" lg="4" xl="6">
                  <v-img :src="require('@/assets/photos/pic1.png')" aspect-ratio="1" cover></v-img>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4" xl="6">
                  <v-img :src="require('@/assets/photos/pic2.jpeg')" aspect-ratio="1" cover></v-img>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4" xl="6">
                  <v-img :src="require('@/assets/photos/pic3.jpeg')" aspect-ratio="1" cover></v-img>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4" xl="6">
                  <v-img :src="require('@/assets/Couple-Pose-scaled.jpg')" aspect-ratio="1" cover></v-img>
                </v-col>

              </v-row>


              <v-row>
                <v-col cols="12" class="d-flex align-center justify-center">
                  <div class="text-header">Michel y Marlis</div>
                </v-col>
                <v-col cols="12" class="d-flex align-center justify-center">
                  <div class="v-center text-top">¡Nos casamos!</div>
                </v-col>
                <v-col cols="auto" class="d-flex align-center justify-center">
                  <p> Movidos por el amor, con la alegría de nuestros familiares y la bendición Dios, nos haría mucha
                    ilusión
                    que nos acompañeis a compartir el momento más importante de nuestras vidas, el dia de nuestra boda.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center justify-center">
                  <div class="v-center text-date">Será el SÁBADO 22 de ABRIL 2023</div>
                </v-col>
                <v-col cols="5" class="d-flex align-center justify-center">
                  <v-img contain :src="require('@/assets/church_outline_2.png')"
                    style="height: 200px; width: 50px;"></v-img>
                </v-col>
                <v-col cols="7" class="d-flex align-center justify-center">
                  <p>La ceremonia tendrá lugar a las 17:30h en la Iglesia San Sebastián Mártir <br> (San Sebastián de
                    los
                    Reyes) - Madrid</p>
                </v-col>
                <v-col cols="7" class="d-flex align-center justify-center">
                  <p>Seguidamente lo celebraremos en <br> La Quinta de Jarama - <br> A1 Carretera de Burgos, KM 26,
                    28702
                    Madrid</p>
                </v-col>
                <v-col cols="5" class="d-flex align-center justify-center">
                  <v-img contain :src="require('@/assets/logo_quinta_jarama.png')"
                    style="height: 200px; width: 50px;"></v-img>
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
import HeaderCouple from "@/components/HeaderCouple.vue";
export default {
  components: {
    HeaderCouple,
  },
  name: 'MainPage'
}
</script>
  
<style lang="scss">
.main-page {
  background: url('../assets/flower-background-floral-border.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .card-content {
    padding: 20px;
    min-height: 85vh;
  }

  .text-header {
    padding: 10px 0px 5px 0px;
    font-size: 40px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }

  .text-top {
    font-size: 30px;
  }

  .text-date {
    font-size: 25px;
    padding: 10px 0px 10px 0px;
    font-weight: bold;
  }

  .text-place {
    font-size: 30px;
    padding: 20px 0px 20px 0px;
  }
}

@media (max-width: 480px) {
  .main-page {
    .text-header {
      font-size: 30px;
      padding: 0px;
    }

    .text-top {
      font-size: 25px;
    }

    .text-date {
      font-size: 20px;
      font-weight: bold;
      padding: 10px 0px 10px 0px;
    }
  }
}
</style>