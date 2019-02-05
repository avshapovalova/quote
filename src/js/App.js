const App = {
  init: function() {
    this.initMenu()
  },

  initMenu: function(){
    $(window).on('scroll', update)

    const $menu = $('.js-menu')
    let requestId
    function update() {
      requestId && cancelAnimationFrame(requestId)
      requestId = requestAnimationFrame(function(){
        $menu.toggleClass('m-bg', window.scrollY > 0)
      })
    }
    update()
  },
}
