<template>
  <DashboardView>
    <template #slot-home>
      <div class="content-home">
        <header class="title_pages">
          <p>Inicio</p>
        </header>
        
        <div>
          <div class="row">

            <div class="col-12 col-md-3">
              <CardsComponent :type="'Clientes'" :percentage="'7%'" :icon="'fa-users'" :qtd="'7595'"  />
            </div>

            <div class="col-12 col-md-3">
              <CardsComponent :type="'Produtos'" :percentage="'12%'" :icon="'fa-box'" :qtd="'350'"  />
            </div>

            <div class="col-12 col-md-3">
              <CardsComponent :type="'Serviços'" :percentage="'3%'" :icon="'fa-store'" :qtd="'270'"  />
            </div>

            <div class="col-12 col-md-3">
              <CardsComponent :type="'Relatórios'" :percentage="'25%'" :icon="'fa-chart-bar'" :qtd="'30'"  />
            </div>

          </div>
        </div>
        <div class="mt-5">
          <div class="row">
            <!-- Lista de Clientes -->
            <div class="col-12 col-md-6">
              <ListsComponent :data="users" description="Clientes" :columns="['Nome','Email']" />
            </div>
            <!-- Lista de Produtos -->
            <div class="col-12 col-md-6">
              <ListsComponent :data="users" description="Produtos" :columns="['Nome','Valor']" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </DashboardView>
</template>
<script>
import DashboardView from '../Dashboard/DashboardView.vue'
import CardsComponent from '@/components/CardsComponent.vue'
import ListsComponent from '@/components/ListsComponent.vue'
import axios from 'axios'
export default {
  name: "HomeComponent",
  data() {
    return {
      users: []
    }
  },
  methods: {
    async getUsers(){
      /**
       * caso haja erro na requisição do cors, o problema é no backend, basta adicionar no caminho config\cors.php
       * do laravel no parametro paths a opção api fica da seguinte form
       * 'paths' => ['api/*', 'sanctum/csrf-cookie','api']
       */
      let res = await axios.get('http://127.0.0.1:8000/api');

      console.log(res);
       
    }
  },
  mounted(){
    this.getUsers();
  },
  components: {
    DashboardView,
    CardsComponent,
    ListsComponent
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_main';
</style>