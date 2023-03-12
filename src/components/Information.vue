<template>
    <v-main style="background-color: aliceblue;" class="information">
        <v-container grow d-flex flex-column flex-nowrap>
            <v-row justify="center" class="grow">

                <v-col xs="12" sm="12" md="10" lg="9" xl="7" class="main-row">
                    <v-card fill-height>
                        <div class="card-content">

                            <header-couple></header-couple>
                            <v-row justify="center">
                                <v-col cols="12" xl="7">
                                    <div class="info-text">
                                        <p><strong>Recordad</strong> lo más importante es que vengáis con ilusión, alegría y
                                            ganas de
                                            pasarla bien. Pero si queréis hacernos un regalo, aqui tenéis nuestro número de
                                            cuenta:</p>
                                        <br>
                                        <p>ES07 1465 0100 95 2043889715<br>Michel Escobar</p>
                                    </div>
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
    name: 'InformationPage'
}
</script>
<style lang="scss">
.information {
    background: url('../assets/flower-background-floral-border.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

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