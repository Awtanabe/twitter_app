(function () {
  $(window).scroll(()=>{
    let header = $("#header-title")
    let height = $(window).scrollTop()
    if (height > 30) {
      header.addClass("fixed")
    } else {
      header.removeClass("fixed")
    }
  })
}());