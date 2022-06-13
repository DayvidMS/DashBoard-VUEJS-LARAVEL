<template>
    <div class="my-card">
        <div class="content top">
            <h3>Clientes</h3>
            <p class="percentage"><i class="fa fa-arrow-up"></i> 7%</p>
        </div>
        <div class="content footer">
            <i class="fa fa-users"></i>
            <p class="qtd">9570</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Cards'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';
    .my-card{
        display: flex;
        flex-direction: column;
        width: 300px;
        background-color: $purple;
        padding: 15px;
        border-radius: 7px;
        color: $white;

        .content{
            display: flex;
            justify-content: space-between;
        }
        .top{

        }

        .footer{
            
        }
    }

</style>
