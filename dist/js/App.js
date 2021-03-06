const App = {
  init: function() {
    this.initMenu()
    this.initMobileMenu()
  },

  initMenu: function(){
    $(window).on('scroll', update)

    const $menu = $('.js-menu')

    $menu.on('click', '.menu__link', function(e){
      e.preventDefault()
      const id = $(this).attr('href')
      const top = $(id).position().top
      $('html').animate({ scrollTop: top }, 1000)
    })

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
