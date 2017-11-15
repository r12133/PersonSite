<template>
    <div id="aboutme">
        <div class="content">
            <img src="/static/img/paper.jpg" alt="paper" class="paper">
            <article>
                <span class="top"></span> <p class="top_br"><br></p>
                <span class="title"></span> 
                <div @click='play' class="btn"></div>
            </article>
        </div>
    </div>
</template>

<script>
    import Typed from 'typed.js';
    export default {
        name: 'aboutme',
        data() {
            return {
                tag: false
            }
        },
        mounted(){
            var typed_one = new Typed('#aboutme .top',{
                strings: [
                    "Starting Typing...<br/> ^500 `waiting...`<br/> ^500 `ready...`",                  
                ],
                typeSpeed: 60,
                backSpeed: 60,
                backDelay: 100,
                startDelay: 700,
             });

            setTimeout(() => {
                typed_one.destroy();
                var top_br = document.querySelector('.top_br');
                top_br.parentNode.removeChild(top_br);
                var typed_two = new Typed('#aboutme .title',{
                    strings: [
                        "Hi gays",
                        "Hi guys<br/>\
                        <i class='indent'></i>I am a <i>front-end engineer</i> and <span class='underline'>hope to become a <strong>front-end architect</strong> in the future</span>.<br/>\
                        <i class='indent'></i>I have a persistent pursuit of new technologies and will solve the front end problems with strange ideas.<br/>\
                        <i class='indent'></i>Sometimes I can write code addiction and have a certain understanding of the reuse of vue code.<br>\
                        <i class='indent'></i>This is me, an attitude farmer.<br/>\
                        <span class='fr'>Your's Mr.zhou</span><br/>\
                        <span class='fr qq'>2609826031@qq.com</span>",                   
                    ],
                    typeSpeed: 60,
                    backSpeed: 60,
                    backDelay: 100,
                    startDelay: 700,
                 });
            },5000)

            setTimeout(() => {
                document.querySelector('.typed-cursor').style.display = 'none';
            },41660)
        },
        methods: {
            play() {
                this.tag = !this.tag;
                var utterThis = new window.SpeechSynthesisUtterance();
                utterThis.text = `
                    Hi Guys,I am a front-end engineer and hope to become a front-end architect in the future.
                    I have a persistent pursuit of new technologies and will solve the front end problems with strange ideas.
                    Sometimes I can write code addiction and have a certain understanding of the reuse of vue code.
                    This is me, an attitude farmer.
                `;
                utterThis.lang = 'en-us';
                utterThis.rate = .7;
                window.speechSynthesis.speak(utterThis);
                if(this.tag) {
                    window.speechSynthesis.resume();
                }else {
                    window.speechSynthesis.pause();
                }
            }
        }
    }
</script>

<style lang='scss'>
#aboutme {
    p {margin: 0;}
    height: 100%;
    background: #ebebeb;
    text-align: center;
    .content {
        display: inline-block;
        position: relative;
        margin-top: 70px;
        cursor: url('/static/img/pencil.png'),auto;
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
        color: #463535;
        // text-decoration: underline;
    }
    .fr {
        float: right;
        display: inline-block;
        width: 115px;
        text-align: left;
    }
    .qq {
        width: 150px !important;
    }
    .underline {
        text-decoration: underline;
    }
    .indent {
        padding:0 10px;
    }
    .btn {
        position: absolute;
        bottom: 30px;
        right: 30px;
        width: 10px; height: 10px; background: #fff;
        border: 10px double #333;
        border-radius: 50%;
    }
    .btn:hover {
        background: #f9f9f9;
        border-color: #b9832a;
    }
}
</style>