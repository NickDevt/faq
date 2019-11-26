//
// $("#my_image").bind("click", function() {
//       $("#my_image").attr("src","second.jpg");
// });



// $(document).ready(function() {
// 	$('.accordion').on('click', '.faq-btn', function() {
// 		$(this).toggleClass('greyer').siblings('.whiter').slideToggle(0);
// 	});
// });


$(document).ready(function(){
 $('.whiter').click(function () {
   $(this).toggleClass('greyer');
   });
 });
