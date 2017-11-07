<template>
    <div class="home">
        <terminal></terminal>
        <video class='homevideo' src="static/video/homevideo.mp4" autoplay="true" loop="true"></video>
    </div>
</template>

<script>
export default {
    name: 'home',
    data(){
        return {
            options: {
                strings: ['hello-world','this is a terminal'],
                typeSpeed: 40,
                backSpeed: 40,
                backDelay: 500,
                startDelay: 1000,
                // loop: true,
                fadeOut: true
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.home {
    height: 100%;
    background: #3e4142;
    position: relative;
    .homevideo{
        height: 100%;
        width: 100%;
        object-fit:fill;
        box-sizing: border-box;
        display: block;
    }
}
</style>








