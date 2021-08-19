$(document).ready(function () {
  if (localStorage.getItem(location.pathname) != null) {
    $(window).scrollLeft(
      localStorage.getItem(location.pathname)
    )
  }
  
  $(window).on('scroll', function () {
    localStorage.setItem(
      location.pathname,
      $(window).scrollLeft()
      )
  })
})