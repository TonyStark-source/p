$(document).ready(function () {
  if (localStorage.getItem(location.pathname) != null) {
    $(window).scrollLeft(
      localStorage.getItem(location.pathname)
    )
    console.log($(window).scrollLeft())
  }
  
  $(window).on('scroll', function () {
    localStorage.setItem(
      location.pathname,
      $(window).scrollLeft()
      )
      console.log('saving...')
      console.log($(window).scrollLeft())
  })
})