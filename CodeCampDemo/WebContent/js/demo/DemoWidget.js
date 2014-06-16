
require(
  [
   "dojo/dom"
   , "dijit/_Widget"       
   , "dijit/_Templated" 
   , "dijit/form/TextBox"
   , "dijit/form/Button"
  ], 
function
( 
  dom, 
  _Widget, 
  _Templated,
  _Textbox,
  _Button
)
{

	// Give the name of this dojo "class" to be "demo.DemoWidget". 
	// This must match the physical path js/demo/DemoWidget
	dojo.declare("demo.DemoWidget", [  _Widget  , _Templated  ],
	{
		// the path to the HTML template associated with the demo.DemoWidget class.
	    templateString: dojo.cache("demo", "templates/DemoWidget.html"),
	   
	    title : "",
	    
	    _firstname: "",
	    _lastname: "",
	    
	    constructor: function(args)
	    {
	    	this.inherited(arguments);
	    },	    
	    
	    postCreate: function() 
	    {
	    	this.inherited(arguments);	 
	    	
		    this._firstname = new dijit.form.TextBox({	
		    	  	value: "John"
			    }, this.firstnameAnchor);
		      
		    this._lastname = new dijit.form.TextBox({	
		    	  	value: "Doe"
			    }, this.lastnameAnchor);
		    
		    var btn = new dijit.form.Button({	
		    	  	label: "Submit"
			    }, this.buttonAnchor);
	    }, 
	    
	    changeName: function(newfirstName, newLastName)
	    {
	    	this._firstname.setValue(newfirstName);
	    	this._lastname.setValue(newLastName);
	    }
	});
});
