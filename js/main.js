
//SweetAlert External Link Warning Box

 $('a.externalLink').click(function(e) {
   e.preventDefault();  //Prevent the href from redirecting directly
   var linkURL = $(this).attr("href");
   warnBeforeRedirect(linkURL);
 });

 function warnBeforeRedirect(linkURL) {
   swal({
     title: "Leave this site?",
     text: "If you click 'OK', you will be redirected to an external site",
     type: "warning",
     showCancelButton: true
   }, function() {
      //Redirect the user
     window.open(linkURL);
   });
}

//SweetAlert Welcome Box

$(document).ready(function(){
   swal("Hello, Welcome!", "Enter the site with the button below", "success")
});


//Animate CSS - Bounce Down Name
$('#intro-name').addClass('animated bounceInDown');

//Animate CSS - Fades in profile picture
$('.headshot').addClass('animated fadeIn');
