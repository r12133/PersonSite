<template>
    <div class="home">
        <video class='homevideo' src="static/video/homevideo.mp4" autoplay="true" loop="true"></video>
        <div class="abs">
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
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
    .abs {
        position: absolute; left: 0; right: 0; top: 0; bottom: 0;
    }
}
</style>








