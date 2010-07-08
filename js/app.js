$(function(){
  
  $('#global-spinner').ajaxStart(function() {
    $(this).show();
  });
  $('#global-spinner').ajaxStop(function() {
    $(this).hide();
  });  
  
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

  var config = {
    api_key: '1f31ff222d274de4545ab666dd98d6b6',
    link_to_size: 'm'
  }	      
  
  $("#images a").livequery(function(){
    $(this).lightBox();
  });  
    
  $('#images').flickr(config).photosetsGetPhotos({photoset_id: '72157624202381551', per_page: 10});
    
});