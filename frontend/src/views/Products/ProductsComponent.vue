<template>
  <DashboardView>
    <template #slot-home>
      <div class="content-home">
        <header class="title_pages">
            <p>Produtos</p>
        </header>
      </div>
    </template>
  </DashboardView>
</template>
<script>
import DashboardView from '../Dashboard/DashboardView.vue'


export default {
  name: "ProductsComponent",
  components: {
    DashboardView
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_main';
</style>