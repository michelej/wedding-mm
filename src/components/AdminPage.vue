<template>
    <v-main style="background-color: aliceblue;" class="admin">
        <v-container grow d-flex flex-column flex-nowrap>
            <v-row justify="center" class="grow">

                <v-col col="12" class="main-row">
                    <v-card fill-height>
                        <div class="card-content">
                            <h2>Listado de invitados</h2>



                            <v-data-table dense v-if="loaded" :items="users" item-key="telephone" :headers="headers"
                                show-expand class="elevation-1">
                                <template v-slot:expanded-item="{ headers, item }">
                                    <td :colspan="headers.length">
                                        <v-data-table class="sub-table elevation-0" :headers="subHeaders" :items="item.guests"
                                            item-key="id" hide-default-footer></v-data-table>
                                    </td>
                                </template>
                            </v-data-table>

                        </div>
                    </v-card>
                </v-col>
            </v-row>


        </v-container>
    </v-main>
</template>
   
<script>
import api from "../services/backend";
export default {
    components: {
    },
    name: 'InformationPage',
    data() {
        return {
            loaded: false,
            users: [],
            headers: [
                { text: 'Nombre', value: 'fullname' },
                { text: 'Telefono', value: 'telephone' },
                { text: 'Asistencia', value: 'assistance' },
                { text: 'Comentario', value: 'comments' },
                { text: 'Alergias', value: 'allergies' },
                { text: 'IpAddress', value: 'ipAddress' }
            ],
            subHeaders:[
                { text : 'Nombre', value: 'name'},
                { text : 'Adulto o Niño', value: 'type'}
            ]
        }
    },
    async mounted() {
        let response = await api.findAllConfirmations();
        this.users = response.data
        this.loaded = true
        console.log(this.users);
    },
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
    .sub-table.theme--light.v-data-table { background: transparent; }
    .sub-table .v-data-table-header { display: none; }
}
</style>   