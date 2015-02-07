var app = {

	
	dibujarRegistrosParam: function(arr) {
	
				/*$('.employee-list').append('<li>'
				+'<div class="banner">'
				    +'<ul>'
				        +'<li><img src="img/bibas.png"></li>'
				        +'<li><img src="img/bibas.png"></li>'
				        +'<li><img src="img/bibas.png"></li>'
				    +'</ul>'
				+'</div>'
				+'</il>');*/
    	    		
    	    	var out = "";
    	    	var i;
    	    	for(i = 0; i<arr.length; i++) 
    	    	{
    	    		e = arr[i];
    	    		
    	    		$('.employee-list').append('<li><a href="' + e.title + '"><img src="'+e.image+'"><br><span class="categoria" style="width: 100%">'+e.lastName+'</span></a></il>');
    	    																	  																	
    	    	}
	},
	
	 renderHomeView: function() {
               
                $('body').html(this.homeTpl());
 
    },
	
	  
    initialize: function() {
    	this.homeTpl = Handlebars.compile($("#home-tpl").html());
    	this.renderHomeView();
    	this.dibujarRegistrosParam(registrosJson);
	}
};

app.initialize();



//app.dibujarRegistrosParam(registrosJson);
