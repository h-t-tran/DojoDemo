
require(
  [ 
	"dijit/form/Button", 
  ], 
function( _Button )
{
	dojo.declare("demo.DemoButton", [ _Button ],
	{
		
	    constructor: function(args)
	    {
	    	
	    },	    

	    postCreate: function() 
	    {
	    	this.inherited(arguments);	
	    },
	    
	    setLabel: function(/*String*/ content)
	    {
	    	
	    	//this.inherited(arguments);
	    	
	    	this.set("label", "<h1>This is large</h1>");
	    }
	    
	});
});
