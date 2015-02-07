var app = {

	
	dibujarRegistrosParam: function(arr) {
    	    	var out = "";
    	    	var i;
    	    	for(i = 0; i<arr.length; i++) 
    	    	{
    	    		e = arr[i];
    	    		$('.employee-list').append('<li><img src="img/s'+ e.id +'.jpg"><a href=""><span class="titulo" style="width: 100%">' + e.firstName  +'</span><br><span class="categoria" style="width: 100%">'+e.lastName+'</span><br><span class="titulo" style="width: 100%">'+e.title+' Bfs</span><br><span class="categoria" style="width: 100%"> Ropa deportiva</span></a></li>');
    	    																	  																	
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
