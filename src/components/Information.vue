<template>
    <v-main style="background-color: aliceblue;" class="information">
        <v-container grow d-flex flex-column flex-nowrap>
            <v-row justify="center" class="grow">

                <v-col xs="12" sm="12" md="10" lg="9" xl="7" class="main-row">
                    <v-card fill-height>
                        <div class="card-content">

                            <header-couple></header-couple>
                            <v-row justify="center">

                                <v-col cols="12" lg="6" xl="6" class="mt-10">
                                    <h1 class="text-center">Cronograma</h1>
                                    <v-timeline align-top dense>
                                        <v-timeline-item color="teal lighten-3" small>
                                            <v-row class="pt-1">
                                                <v-col cols="4">
                                                    <strong>17:30</strong>
                                                </v-col>
                                                <v-col>
                                                    <strong>Ceremonia</strong>
                                                    <div class="text-caption">
                                                        Iglesia San Sebastián Mártir
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-timeline-item>

                                        <v-timeline-item color="teal lighten-3" small>
                                            <v-row class="pt-1">
                                                <v-col cols="4">
                                                    <strong>20:00</strong>
                                                </v-col>
                                                <v-col>
                                                    <strong>Coctel de Bienvenida</strong>
                                                    <div class="text-caption mb-2">
                                                        La Quinta de Jarama
                                                    </div>                                                   
                                                </v-col>
                                            </v-row>
                                        </v-timeline-item>

                                        <v-timeline-item color="teal lighten-3" small>
                                            <v-row class="pt-1">
                                                <v-col cols="4">
                                                    <strong>21:30</strong>
                                                </v-col>
                                                <v-col>
                                                    <strong>Cena</strong>
                                                    <div class="text-caption mb-2">
                                                        La Quinta de Jarama
                                                    </div>                         
                                                </v-col>
                                            </v-row>
                                        </v-timeline-item>

                                        <v-timeline-item color="teal lighten-3" small>
                                            <v-row class="pt-1">
                                                <v-col cols="4">
                                                    <strong>23:00</strong>
                                                </v-col>
                                                <v-col>
                                                    <strong>Fiesta</strong>
                                                    <div class="text-caption mb-2">
                                                        La Quinta de Jarama
                                                    </div>                         
                                                </v-col>
                                            </v-row>
                                        </v-timeline-item>
                                        <v-timeline-item color="teal lighten-3" small>
                                            <v-row class="pt-1">
                                                <v-col cols="4">
                                                    <strong>05:00</strong>
                                                </v-col>
                                                <v-col>
                                                    <strong>Fin de la fiesta</strong>
                                                    <div class="text-caption mb-2">
                                                        La Quinta de Jarama
                                                    </div>                         
                                                </v-col>
                                            </v-row>
                                        </v-timeline-item>
                                    </v-timeline>
                                </v-col>
                            </v-row>
                            <!--<v-row justify="center" class="mt-10">
                                <v-col cols="12" lg="8" xl="8">
                                    <div class="info-text texts">
                                        <p><strong>Recordad</strong> lo más importante es que vengáis con ilusión, alegría y
                                            ganas de
                                            pasarla bien. Pero si queréis hacernos un regalo, aqui tenéis nuestro número de
                                            cuenta:</p>
                                        <br>
                                        <p>ES07 1465 0100 95 2043889715<br>Michel Escobar</p>
                                    </div>
                                </v-col>
                            </v-row>-->
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
    name: 'InformationPage'
}
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";

.information {
    background: rgb(244, 244, 244);
    background: linear-gradient(90deg, rgba(244, 244, 244, 1) 0%, rgba(227, 236, 227, 1) 50%, rgba(219, 226, 221, 1) 100%);

    .card-content {
        padding: 20px;
        min-height: 85vh;
    }

    .info-text {
        padding: 50px 0px 50px 0px;
        font-size: 20px;
        text-align: justify;
    }
}
</style>   