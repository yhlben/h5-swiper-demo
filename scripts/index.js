var audio;
$(function(){
  audio=$('#audio')[0];
  var height = document.documentElement.clientHeight;
  var width = document.documentElement.clientWidth;
  changeOrientation($('.body-container'));
  changeOrientation($('.swiper-slide-content'));

  // 绑定点击播放事件
  $('.music-icon').click(function(){
    audio.pause();
  });
});

function showTip(){
  $('.tip').removeClass('tip').addClass('animated fadeIn');
}

function gotoPart2(){
  $('.part1').hide();
  $('.part2').show();
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    freeMode: true,
    on: {
      touchMove(e) {
        // console.log(e.touches[0].screenY);
      },
      slideNextTransitionStart(e) {
        console.log(this.activeIndex);
      },
    }
  });
  audio.play();
}

