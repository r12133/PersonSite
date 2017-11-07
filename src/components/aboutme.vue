<template>
    <div id="aboutme">
        <div class="content">
            <img src="/static/img/paper.jpg" alt="paper" class="paper">
            <article>
                <span class="title"></span> 
            </article>
        </div>
    </div>
</template>

<script>
    import Typed from 'typed.js';
    export default {
        name: 'aboutme',
        mounted(){
             var typed = new Typed('#aboutme .title',{
                strings: ['Hi Guys<br>my'],
                typeSpeed: 60,
                backSpeed: 60,
                backDelay: 500,
                startDelay: 1000,
             });
        }
    }
</script>

<style lang='scss'>
#aboutme {
    height: 100%;
    background: #ebebeb;
    text-align: center;
    .content {
        display: inline-block;
        position: relative;
        margin-top: 70px;
    }
    article {
        text-align: left;
        position: absolute;
        left: 30px;
        right: 30px;
        top: 30px;
        bottom: 30px;
        span {
            line-height: 2;
        }
    }
    .paper {
        width: 450px;
        box-shadow: 0px 0px 25px 5px #ebebeb;
    }
    .title {
        color: #bb1f1f;
        text-decoration: underline;
    }
}
</style>