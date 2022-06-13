<template>
   <div class="main">
       <div class="sidebar">
           <SidebarComponent />
       </div>

       <div class="content-right">
           <div class="navbar">
               <NavbarComponent />
           </div>
           <div class="home">
               <slot name="slot-home"></slot>
           </div>
       </div>
   </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
export default {
    name: "DashboardView",
    components: { SidebarComponent, NavbarComponent }
}
</script>

<style lang="scss" src="./style.scss" scoped ></style>