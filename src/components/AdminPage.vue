<template>
    <v-main style="background-color: aliceblue;" class="admin">
        <v-container grow d-flex flex-column flex-nowrap>
            <v-row justify="center" class="grow">

                <v-col xs="12" sm="12" md="10" lg="9" xl="7" class="main-row">
                    <v-card fill-height>
                        <div class="card-content">

                           
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

.admin {
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