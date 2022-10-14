const tabs = $('.tabs');
const selector = $('.tabs').find('a').length;
//const selector = $(".tabs").find(".selector");
const activeItem = tabs.find('.active');
const activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px",
  "width": activeWidth + "px"
});

$(".tabs").on("click", "a", function (e) {
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  let activeWidth = $(this).innerWidth();
  let itemPos = $(this).position();
  $(".selector").css({
    "left": itemPos.left + "px",
    "width": activeWidth + "px"
  });
});
