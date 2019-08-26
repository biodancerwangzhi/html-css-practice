<template>
    <div>
        <h2>一列布局</h2>
        <p>
            1 自动居中，设个宽度，然后设定margin auto。  
            2 width和max-width的区别，当页面宽度小于width时，
            前者出现滚动条，后者只显示页面宽度内的内容，超出的不显示。
        </p>
        <header class='header col1header'>margin: auto;</header>
        <div class='content col1content'></div>
        <footer class='footer col1footer'>margin: auto;</footer>

        <h2>两列布局(一列设宽，另一列把剩下撑满)</h2>
        <p>
            设置方法1 左边设float，设宽。 2 右边设overflow，不设宽。
        </p>
        <p>    
            设置overfloat:hidden触发BFC，为了兼容es6还要同时设置zoom:1。
            overflow有两个功能，一让内部float元素不要乱动，二和其他浮动元素产生边界。  
        </p>
        <header class='header col2header'></header>
        <div class="col2content content">
            <div class="col2contentleft">float:left;width:200px;</div>
            <div class="col2contentright">overflow:hidden;</div>
        </div>
        <footer class='footer col2footer'></footer>

        <h3>flex 布局</h3>
        <h3>grid 布局</h3>


        <h2>最后：各种居中对齐</h2>

        <div style='background:yellow; width: 500px; height: 500px;margin:auto;position:relative;'>
            <div style='background:blue; width: 200px; height: 200px;position:absolute;top:50%;margin-top:-100px;'></div>
        </div>
    </div>
</template>

<style scoped>
    .col2content {

    }
    .col2contentleft {
        float:left;
        width: 200px;
        border: 1px black solid;
    }
    .col2contentright {
        border: 1px black solid;
        background: wheat;
        overflow:hidden;
    }
    h2 {
        text-align: center;
    }
    p{
        text-align: left;
        text-indent:2em;
    }
    .header{
        height: 2em;
        background: red;
    }
    .content {
        height: 5em;
        background: yellow;
    }
    .footer {
        height: 2em;
        background: green;
    }
    .col1header {  
        margin: 0 auto;
        max-width: 1000px;
    }
    .col1content {       
        width: 100%;
        margin: 0 auto;
    }
    .col1footer {   
        margin: 0 auto;
        max-width: 1000px;
    }
</style>