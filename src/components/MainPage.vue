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
                  <v-img :src="require('@/assets/photos/pic6.jpg')" aspect-ratio="1" cover></v-img>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4" xl="6">
                  <v-img :src="require('@/assets/photos/pic2.jpeg')" aspect-ratio="1" cover></v-img>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4" xl="6">
                  <v-img :src="require('@/assets/photos/pic1.png')" aspect-ratio="1" cover></v-img>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4" xl="6">
                  <v-img :src="require('@/assets/photos/pic5.jpg')" aspect-ratio="1" cover></v-img>
                </v-col>

              </v-row>


              <v-row>
                <v-col cols="12" xl="8" offset-xl="2" class="d-flex align-center justify-center">
                  <div class="text-header texts">Michel y Marlis</div>
                </v-col>
                <v-col cols="12" xl="8" offset-xl="2" class="d-flex align-center justify-center">
                  <div class="v-center text-top texts">¡Nos casamos!</div>
                </v-col>
                <v-col cols="auto" xl="8" offset-xl="2" class="d-flex align-center justify-center texts">
                  <p> Movidos por el amor, con la alegría de nuestros familiares y la bendición Dios, nos haría mucha
                    ilusión
                    que nos acompañeis a compartir el momento más importante de nuestras vidas, el dia de nuestra boda.
                  </p>
                </v-col>
                <v-col cols="12" xl="8" offset-xl="2" class="d-flex align-center justify-center texts">
                  <div class="v-center text-date">Será el SÁBADO 22 de ABRIL 2023</div>
                </v-col>
                
                <v-col cols="12" xl="4" offset-xl="2" class="d-flex align-center justify-center">
                  <v-img contain :src="require('@/assets/church_outline_2.png')"
                    style="height: 200px; width: 50px;"></v-img>
                </v-col>
                <v-col cols="12" xl="4"  class="d-flex align-center justify-center texts">
                  <p>La ceremonia tendrá lugar a las 17:30h en la Iglesia San Sebastián Mártir <br> (San Sebastián de
                    los
                    Reyes) - Madrid</p>                    
                </v-col>           
                <v-col cols="12" xl="4" class="align-center justify-center d-flex d-sm-flex d-md-none d-lg-none d-xl-none">
                  <v-img contain :src="require('@/assets/logo_quinta_jarama.png')"
                    style="height: 150px; width: 50px;"></v-img>
                </v-col>
                <v-col cols="12" xl="4" offset-xl="2"  class="d-flex align-center justify-center texts">
                  <p>Seguidamente lo celebraremos en <br> La Quinta de Jarama - <br> A1 Carretera de Burgos, KM 26,
                    28702
                    Madrid</p>
                </v-col>
                <v-col cols="12" xl="4" class="align-center justify-center d-none d-md-flex d-lg-flex d-xl-flex">
                  <v-img contain :src="require('@/assets/logo_quinta_jarama.png')"
                    style="height: 200px; width: 50px;"></v-img>
                </v-col>
                
              </v-row>
              
              <v-row>
                <v-col cols="12" lg="10" xl="10" offset-xl="1" offset-lg="1">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1515.8792043060669!2d-3.626743542949329!3d40.54692635630241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422cfcca8ca953%3A0xe93403609b0f18c2!2sParroquia%20San%20Sebasti%C3%A1n%20M%C3%A1rtir!5e0!3m2!1ses!2ses!4v1678734476322!5m2!1ses!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </v-col>                    
              </v-row>
              <v-row>
                <v-col cols="12" lg="10" xl="10" offset-xl="1" offset-lg="1">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.031889572885!2d-3.5810626843617905!3d40.60712005196174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43cd63b4b10479%3A0x2904104e484f4b98!2sLa%20Quinta%20de%20Jarama!5e0!3m2!1ses!2ses!4v1678734781154!5m2!1ses!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  name: 'MainPage',
  data() {
    return {
     
    }
  },
  mounted() {
   
  },
  methods: {
   
  }
}
</script>
  
<style lang="scss">
@import "@/assets/scss/variables.scss";
.main-page {
  background: rgb(244,244,244);
  background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(227,236,227,1) 50%, rgba(219,226,221,1) 100%);
  

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