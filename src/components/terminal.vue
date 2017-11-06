<template>
    <div id="terminal">
        <div class="topbar">
            <div class="close">x</div>
            <div class="title">hello guys</div>
        </div>
        <div>
            <span class="start">&nbsp;$&nbsp;</span>
            <div class="edit" contenteditable="true">&nbsp;</div>
        </div>
    </div>
</template>

<script>
import Typed from 'typed.js'
export default {
    name: 'terminal',
    data(){
        return {
        }
    },
    props: ['options'],
    mounted() {
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
                var _this = e.target;
                _this.removeAttribute('contenteditable');
                var dir = _this.innerText;
                this.handleDir(dir, function(){
                    var content = document.createElement('div');
                    content.innerHTML = `
                        <span class="start">&nbsp;$&nbsp;</span>
                        <div class="edit" contenteditable="true">&nbsp;</div>
                    `;
                    terminal.appendChild(content);
                    terminal.click();
                });
            }
        })
    },
    methods: {
        handleDir(dir,fn){
            var msg;
            switch(dir){
                case 'ls':
                break;
                default: 
                    msg = '-bash:' + dir + ' : command not found';
            }
            console.log(msg);
            fn && fn();
        }
    }
}
</script>

<style lang='scss'>

#terminal {
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
    .topbar {
        height: 30px;
        background:#f3f2f2;
        cursor: move;
        position: relative;
        .close {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 10px;
            border-radius: 50%;
            background: #dc7a7a;
            width: 16px;
            height: 16px;
            font-size: 0px;
            line-height: 17px;
            text-align: center;
            cursor: pointer;
        }
        .close:hover {
            font-size: 14px;
        }
        .title {
            text-align: center;
            line-height: 30px;
        }
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
    .start,.edit {
        // caret-color: transparent;
        display: inline-block;
        font-family: monaco;
        outline: none;
        color: #fff;
        font-size: 14px;
        padding: 0;
        line-height: 1.5;
    }
}
</style>



