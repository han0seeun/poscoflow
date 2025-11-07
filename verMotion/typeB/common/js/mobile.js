$(function() {
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
            gsap.to("header", 0.1, { top: -80, ease: Power2.easeOut });
          }
        }

        if (_isScrollTop < _thisScroll) {
          // up
          gsap.to("header", 0.1, { top: 0, ease: Power2.easeOut });
        }

        _thisScroll = _isScrollTop;
      });
    }
  }
})();