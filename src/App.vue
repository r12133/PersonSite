<template>
  <div id="app">
    <aside>
        <a href="javascript:void(0)" class='personImg bg'>
            周博超的个人网站
        </a>
        <span class="menu">11</span>
    </aside>
    <router-view class='right' />
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
    document.querySelector('.menu').addEventListener('click',function(){
        var aside = document.querySelector('aside');
        if(aside.classList.contains('on')) {
            aside.classList.remove('on');
        }else {
            aside.classList.add('on');
        }
        
    })
  }
}
</script>

<style>
    html,body,#app {
        height: 100%;
    }
</style>

<style lang='scss' scoped>
#app {
    aside {
        text-align: center;
        width: 230px;
        height: 100%;
        background: #fff;
        position: fixed;
        z-index: 1;
        will-change: margin-left;
        background: #010001;
        margin-left: -230px;
        transition: all .5s linear;
        border-right: 3px solid #97d1d1;
        .menu {
            position: absolute;
            right: -20px;
            color: #fff;
            top: 50%;
            cursor: pointer;
            transform: translateY(-50%);
        }
        .personImg {
            display: inline-block;
            height: 60px;
            width: 60px;
            border-radius: 50%;
            margin-top: 100px;
            text-indent: -9999px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            background-image: url('/static/img/head.jpeg');
        }
    }
    aside.on {
        margin-left: 0;
    }
}
</style>
