<template>
    <div class="navbar">
        <h3 class="logo"><i class="fa fa-star"></i>Logo Marca</h3>
        <a href="" @click.prevent="logout" class="logout"> Sair   <i class="fa fa-sign-out-alt"></i></a>
    </div>
</template>

<script>
export default {
    name: "NavbarComponent",
    methods: {
        logout(){
            this.$router.push({name: 'login'})
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar{
    .logo {
    color: #fff;
    }
    .logout{
        text-decoration: none;
        color: #fff;
    }

}


</style>