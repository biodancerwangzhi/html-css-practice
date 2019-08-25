<template>
<div class="container">
    <div class="top-nav container clear-float">
        <div class="fl">
            <a class='item' href="#">首页</a>
        </div>
        <div class="fr">
            <a class='item' href="">我的订单</a>
            <a class='item' href="">收藏夹</a>
            <a class='item' href="">登录</a>
            <a class='item' href="">注册</a>
        </div>
    </div>
    <div class="header clear-float">
        <div class="container">
            <div class="col col2">
                Logo
            </div>
            <div class="col col5">
                <input type="text">
                <button>搜索</button>
            </div>
            <div class="col col3">
                我的购物车
            </div>
        </div>
    </div>
    <div class="main-promote clear-float">
        <div class="col col2">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ut iste voluptatem, ex ipsam quaerat, quidem minima incidunt voluptate autem animi recusandae enim saepe suscipit corporis aliquid commodi nesciunt culpa?
        </div>
        <div class="col col6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita eum quod dolorem aperiam consequuntur, sit saepe reiciendis inventore eligendi.
        </div>
        <div class="col col2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus numquam officia aperiam voluptatibus explicabo nemo? Atque error quae, impedit tempore sunt tempora deleniti facere incidunt fugiat, magnam veniam dolor ipsam maiores qui ab quasi architecto doloribus aliquid. Fugit sapiente excepturi rerum officia, nostrum ut soluta dolor similique? Reiciendis, debitis.
        </div>
    </div>
    <div class="cat-promote clear-float">
        <div class="col col2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laudantium in repellat eligendi veniam incidunt, culpa impedit corporis nihil voluptate tempora, quos quisquam temporibus. Similique consequuntur dolorem dicta dolores, enim esse saepe maiores aut nam et cupiditate veritatis, modi repudiandae itaque facere. Asperiores repellendus obcaecati ratione inventore enim mollitia distinctio!

        </div>
        <div class="col col3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laudantium in repellat eligendi veniam incidunt, culpa impedit corporis nihil voluptate tempora, quos quisquam temporibus. Similique consequuntur dolorem dicta dolores, enim esse saepe maiores aut nam et cupiditate veritatis, modi repudiandae itaque facere. Asperiores repellendus obcaecati ratione inventore enim mollitia distinctio!

        </div> 
        <div class="col col5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, laudantium in repellat eligendi veniam incidunt, culpa impedit corporis nihil voluptate tempora, quos quisquam temporibus. Similique consequuntur dolorem dicta dolores, enim esse saepe maiores aut nam et cupiditate veritatis, modi repudiandae itaque facere. Asperiores repellendus obcaecati ratione inventore enim mollitia distinctio!
        </div>               
    </div>
    <div class="footer clear-float">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem recusandae, provident vitae reiciendis quaerat eum obcaecati laboriosam harum totam quos illum similique sapiente numquam praesentium aut quibusdam possimus temporibus quas.
    </div>
</div>
</template>

<style scoped>

    .container {
        max-width: 1080px;
        display: block;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
    }
    .top-nav .item {
        dispaly: inline-block;
        padding: 6px 10px;
        color: #666;
    }
    .top-nav .item:hover {
        color: #333;
    }    
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .clear-float:after,
    .clear-float:before {
        content: "";
        display: block;
        clear:both;
    }
    .col {
        diplay:block;
        position: relative;
        min-height: 1px;
        float: left;
    }
    .col2 {
        width: 20%;
    }
    .col3 {
        width: 30%;
    }    
    .col4 {
        width: 40%;
    }
    .col5 {
        width: 50%;
    } 
    .col6 {
        width: 60%;
    }    
    
    .header .logo {
        font-size: 30px;
    }                 
</style>