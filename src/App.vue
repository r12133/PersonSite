<template>
  <div id="app">
    <aside>
        <a href="javascript:void(0)" class='personImg bg'>
            周博超的个人网站
        </a>
        <div class="nav">
            <span class="router" v-for='router in routerArr' @click='go(router)'>
                {{router.textName}}
                <span class="line"></span>
                <p><br></p>
            </span>
        </div>
        <span class="menu">&nbsp;</span>
    </aside>
    <transition name='zhou' mode='out-in'>
        <router-view class='right' />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
        routerArr: [
            {textName: 'Home', routerName: '/'},
            {textName: 'Parrelex', routerName: 'parrelex'}, 
            {textName: 'ruyi-ai', routerName: '', href: 'ruyi.ai'}, 
            {textName: 'cnschema', routerName: '', href: 'cnschema.org'},
            {textName: 'Aboutme', routerName: 'aboutme'}, 
        ]
    }
  },
  methods: {
    go(router) {
        if(router.routerName !== '') {
            // this.$router.push({name: router.routerName});
            window.location.href = router.routerName;
            var aside = document.querySelector('aside');
            aside.classList.remove('on');
        }else {
            window.open('http://' + router.href,'_blank');
        }
    }
  },
  mounted(){
    var vue = this;
    document.querySelector('.menu').addEventListener('click',function(){
        var aside = document.querySelector('aside');
        if(aside.classList.contains('on')) {
            aside.classList.remove('on');
        }else {
            aside.classList.add('on');
        }
    });
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
        z-index: 5;
        will-change: margin-left;
        background: #010001;
        margin-left: -230px;
        transition: all .5s linear;
        border-right: 3px solid #97d1d1;
        .menu {
            position: absolute;
            right: -28px;
            color: #fff;
            top: 50%;
            cursor: pointer;
            transform: translateY(-50%);
            background: url('/static/img/menu.svg');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 20px;
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
        .nav {
            color: #97d1d1;
            position: absolute;
            top: 50%; left: 0; right: 0;
            transform: translateY(-50%);
            font-family: monospace;
            p {
                margin: 0;
            }
        }
        .router {
            position: relative;
            cursor: pointer;
        }
        .line {
            position: absolute;
            left: 0; right: 100%; bottom: 0; height: 1px; background: #97d1d1;
            will-change: right;
            transition: all .3s linear;
        }
        .router:hover .line{
            right: 0;
        }
    }
    aside.on {
        margin-left: 0;
    }
    .zhou-enter-active, .zhou-leave-active {
      transition: opacity .5s;
    }
    .zhou-enter, .zhou-leave-to /* .fade-leave-active in below version 2.1.8 */ {
      opacity: 0;
      left: 100%;
    }
}
</style>
