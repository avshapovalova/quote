const App = {
  init: function() {
    this.initMenu()
    this.initMobileMenu()
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

  initMobileMenu: function(){
    const $burger = $('.js-burger')
    const $shader = $('.js-shader')
    const $mobileMenu = $('.js-mobile-menu')
    const $menu = $('.js-menu')

    $burger.on('click', function(){
      $shader.addClass('m-active')
      $mobileMenu.addClass('m-active')
    })

    $shader.on('click', function(){
      $shader.removeClass('m-active')
      $mobileMenu.removeClass('m-active')
    })

    $menu.on('click', 'a', function(){
      $shader.removeClass('m-active')
      $mobileMenu.removeClass('m-active')
    })
  }
}
