$(function () {
  mobile.common();
});

const mobile = (function () {
  return {
    common() {
      let _thisScroll;
      let _isScrollTop;

      $("#mobileWrap .content .scroll").on("scroll", function () {
        _isScrollTop = $("#mobileWrap .content .scroll").scrollTop();

        if (_isScrollTop > _thisScroll) {
          // down
          if (_isScrollTop > 100) {
            gsap.to("header", 0.6, { top: -70, ease: Power2.easeOut });
            $("header").addClass("hide");
          }
        }

        if (_isScrollTop <= _thisScroll) {
          // up
          gsap.to("header", 0.6, { top: 0, ease: Power2.easeOut });
          $("header").removeClass("hide");
          $("header").addClass("on");

          if (_isScrollTop < 10) {
            $("header").removeClass("on");
          }
        }

        _thisScroll = _isScrollTop;
      });
    }
  }
})();