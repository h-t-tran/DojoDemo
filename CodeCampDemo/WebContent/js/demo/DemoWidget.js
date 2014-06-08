
require(
  [
   "dojo/dom"
   , "dijit/_Widget"       
   , "dijit/_Templated" 
  ], 
function
( 
  dom, 
  _Widget, 
  _Templated
)
{

	// Give the name of this dojo "class" to be "demo.DemoWidget". 
	// This must match the physical path js/demo/DemoWidget
	dojo.declare("demo.DemoWidget", [  _Widget  , _Templated  ],
	{
		// the path to the HTML template associated with the demo.DemoWidget class.
	    templateString: dojo.cache("demo", "templates/DemoWidget.html"),
	   
	    myValue : "",
	    
	    constructor: function(args)
	    {
	    	this.inherited(arguments);
	    	console.debug("demo.DemoWidget ctor");
	    },	    
	    
	    postCreate: function() 
	    {
	    	this.inherited(arguments);	  	    
	  	    console.debug("this.myValue ", this.myValue)
	    }, 
	    
	    changeText: function(newValue)
	    {
	    	
	    }
	});
});
