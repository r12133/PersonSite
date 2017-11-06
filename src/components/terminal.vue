<template>
    <div id="terminal">
        <div class="con"></div>
        <div><!-- 
             --><span class="start">&nbsp;$</span><!-- 
             --><div class="edit" contenteditable="true">&nbsp;</div><!-- 
         --></div>
    </div>
</template>

<script>
import Typed from 'typed.js'
export default {
    name: 'terminal',
    props: ['options'],
    data(){
        return {
        }
    },
    methods: {
        handleDir(dir,fn){
            var terminal = document.querySelector('#terminal');
            var div = document.createElement('div');
            div.classList.add('con');
            var msg;
            var options = '';
            var tag = true;
            if(dir.indexOf('h') == 0) {
                div.innerHTML = `
                    <dl>
                        <dd>h</dd><dt> 输入h来获得更多帮助 </dt> <br />
                        <dd>ls</dd><dt> 显示所有路由 </dt> <br />
                        <dd>cd</dd><dt> 更改路由 </dt>
                    </dl>
                `;
            }else if(dir.indexOf('ls') == 0) {
                options = dir.split('ls')[1].trim();
                 div.innerHTML = `
                    <span>Index/</span><span>Parrelex/</span>
                `;
            }else if(dir.indexOf('cd') == 0){
                options = dir.split('cd')[1].trim().toLocaleLowerCase();
                var routerArr = ['index','parrelex'];
                if(routerArr.indexOf(options) > -1) {
                    tag = false;
                    this.$router.push({name: options});
                }else {
                    msg = '-bash: ' + 'cd: ' + options + ': No such file or directory';
                    div.innerHTML = msg;
                }
            }else if(dir == 'clear') {
                terminal.innerHTML =  ``;
            }else {
                msg = '-bash: ' + dir + ': command not found';
                div.innerHTML = msg;
            }

            tag && terminal.appendChild(div);
            fn && fn();
        }
    },
    mounted() {
        var vue = this;
        if(this.options){
            var typed = new Typed('#terminal .typing',this.options);
        }
        var terminal = document.querySelector('#terminal');
        terminal.addEventListener('click', function(){
            var edit = document.querySelector('[contenteditable=true]');
            edit.focus();
        })
        terminal.addEventListener('keydown', function(e){
            e = e || window.event;
            if(e.keyCode == 13) {
                e.preventDefault();
                var _this = e.target;
                _this.removeAttribute('contenteditable');
                var dir = _this.innerText;
                vue.handleDir(dir.trim(), function(){
                    var content = document.createElement('div');
                    content.innerHTML = `
                        <span class="start">&nbsp;$&nbsp;</span><div class="edit" contenteditable="true">&nbsp;</div>
                    `;
                    terminal.appendChild(content);
                    terminal.click();
                });
            }
        })
    }
}
</script>

<style lang='scss'>

#terminal {
    overflow: scroll;
    opacity: .9;
    z-index: 1;
    position: absolute;
    height: 330px;
    width: 500px;
    left: 50%;
    background: #333;
    box-shadow: 0px 0px 1px 1px #333;
    top: 50%;
    transform: translate(-50%,-50%);
    * {
        user-select: none;
    }
    .typed-cursor {
        display: none !important;
    }
    .typed-cursor.show {
        display: inline;
        color: #fff;
        font-size: 14px;
        line-height: 1.15;
    }
    .start,.edit,.con {
        // caret-color: transparent;
        display: inline-block;
        font-family: monaco;
        outline: none;
        color: #fff;
        font-size: 14px;
        padding: 0;
        line-height: 1.5;
    }
    .con {
        padding-left: 8px;
        span {
            margin-right: 20px;
        }
        .file {
            color: green;
        }
        dl {
            padding: 0; margin: 5px 0; padding-left: 10px;
            dd {width: 50px;}
            dd,dt { display: inline-block; margin: 0px;}
        }
    }
}
</style>



