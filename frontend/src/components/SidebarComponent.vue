<template>
    <div class="sidebar">
       <div class="top">
           <div class="avatar">
                <span><i class="fa fa-user icon"></i></span>
           </div>
           <div class="info">
               <p class="name">nome</p>
               <p class="status">online</p>
           </div>
       </div>
       <div class="menu">
           <ul>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
           </ul>
        
       </div>
    </div>
</template>

<script>
export default {
    name: "SidebarComponent"
}
</script>

<style lang="scss" scoped>

    .sidebar{
        .top{
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 25px 5px;
            align-items: center;
            margin-top: 60px;

            .avatar{
                margin-right: 10px ;

                span{
                    display: block;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #CCC;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 25px ;
                    color: #666666;
                }
            }

            .info{

                p{
                    margin: 0px;
                    color: #FFF;
                }
                .name{
                    
                }   
                .status{
                    font-size: 10px;
                }   
            }
        }
    }

</style>