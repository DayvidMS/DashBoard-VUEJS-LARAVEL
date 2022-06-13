<template>
  <DashboardView>
    <template #slot-home>
      <div class="content-home">
        <header class="title_pages">
          <p>Inicio</p>
        </header>
        
        <CardsComponent />

      </div>
    </template>
  </DashboardView>
</template>
<script>
import DashboardView from '../Dashboard/DashboardView.vue'
import CardsComponent from '@/components/CardsComponent.vue'

export default {
  name: "HomeComponent",
  components: {
    DashboardView,
    CardsComponent
}
}
</script>

<style lang="scss">
@import '@/assets/scss/_main';
</style>