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
  
//  $(".boxy").boxy({modal:true, closeText: 'cerrar'});

  $('.link-script').livequery('click', function(){
    $.getScript(this.href); return false;
  });

  $(".boxy-wrapper form").livequery(function() {
    boxy_form = this;
    $(this).ajaxForm({ dataType: 'script', success: function() { Boxy.get(boxy_form).hide().unload(); } } );
  });

  
});