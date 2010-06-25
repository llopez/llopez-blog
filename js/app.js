$(function(){
  $("form#search input[type=text]").click(function(){
    $(this).val("");
  });
  
	$("#twitter").getTwitter({
		userName: "luigibyte",
		numTweets: 5,
		loaderText: "Cargando tweets...",
		slideIn: true,
		showHeading: true,
		headingText: "Ultimos tweets",
		showProfileLink: true
	});  
  
  $("#proyectos").accordion();
  
  
});