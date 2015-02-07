var app = {

	
	dibujarRegistrosParam: function(arr) {

    	    		$('.employee-list').append('<li><a href=""><img src="img/Mercantil.jpg"></a></li>');
    	    		$('.employee-list').append('<li><a href=""><img src="img/provincial.jpg"></a></li>');
    	    		$('.employee-list').append('<li><a href=""><img src="img/banesco.jpg"></a></li>');
    	    																	  																	
 
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
