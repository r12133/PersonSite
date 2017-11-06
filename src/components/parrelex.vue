<template>
<div class="parrlex">
  <div class="loading">
    <div class="lds-css ng-scope" style="width: 200px; height: 200px;">
      <div style="width:100%;height:100%" class="lds-eclipse">
        <div></div>
      </div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
  <div class="control">
    <span class="status">AUTOPLAY  OFF</span>
    <span> | </span>
    <span class="sound">SOUND ON</span>
    <audio style="display: none;" class="bg_audio"></audio>
  </div>
  <div class="page"></div>
  <div class="page page_one">
    <img src="/static/img/desk.png" alt="desk" class="girl">
    <img src="/static/img/chair.png" alt="chair" class="chair">
  </div>
  <div class="page page_two">
    <img src="/static/img/girl.png" alt="girl" class="girl">
  </div>
  <div class="page"></div>
  <div class="page page_three">
    <img src="/static/img/verre.png" alt="verre" class="verre">
    <img src="/static/img/girl(1).png" alt="girl" class="girl">
  </div>
  <div class="page page_four">
    <img src="/static/img/girl(2).png" alt="girl" class="girl">
  </div>
  <div class="page page_five">
    <img src="/static/img/dog1.png" alt="dog1" class="dog_left">
    <img src="/static/img/dog2.png" alt="dog1" class="dog_right">
  </div>
  <div class="change_first">
    <div class="page" style="z-index: -2;"></div>
    <div class="page page_six">
      <img src="/static/img/girl_hide.png" alt="girl_hide" class="girl">
    </div>
    <div class="page page_seven"></div>
    <div class="page left_left"></div>
    <div class="page page_eight"></div>
    <div class="page page_nine">
      <img src="/static/img/girl(3).png" alt="girl" class="girl">
    </div>
    <div class="page page_battle">
      <img src="/static/img/1.jpg" alt="battle">
    </div>
    <!-- 展示多次 9-10 11-12  -->
    <div class="page left_left_end"></div>
    <div class="page page_ten">
      <img src="/static/img/girl(4).png" alt="girl" class="girl">
    </div>
    <div class="page page_eleven">
      <img src="/static/img/girl(5).png" alt="girl" class="girl">
    </div>
    <!-- 单纯增加高度 -->
    <div class="page"></div>
    <div class="page page_twelve">
      <img src="/static/img/girl(6).png" alt="girl" class="girl">
      <img src="/static/img/car.png" alt="car" class="car">
    </div>
    <div class="page page_thirteen">
      <img src="/static/img/girl(7).png" alt="girl" class="girl">
    </div>
    <div class="page page_fourteen">
      <img src="/static/img/girl(8).png" alt="girl" class="girl">
    </div>
    <div class="page page_fiveteen"></div>
    <div class="page page_sixteen"></div>
    <div class="page page_seventeen"></div>
    <div class="page page_eightteen page_light_on">
      <img src="/static/img/girl(9).png" alt="girl" class="girl">
    </div>
    <div class="page page_nineteen"></div>
    <div class="page page_end"></div>
  </div>
</div>
</template>

<script>
    // import '../adapter/pc/js/skrollr.stylesheet.min.js';
    import '../adapter/pc/js/experience.min.js';
</script>

<style scoped>
    @import '../adapter/pc/css/experience.min.css';
</style>
