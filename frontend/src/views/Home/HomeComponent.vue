<template>
  <DashboardView>
    <template #slot-home>
      <div class="content-home">
        Inicio
      </div>
    </template>
  </DashboardView>
</template>
<script>
import DashboardView from '../Dashboard/DashboardView.vue'


export default {
  name: "HomeComponent",
  components: {
    DashboardView
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_main';
</style>