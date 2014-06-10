
require(
  [ 
    "demo/Animal" 
  ], 
function( _Animal )
{
	dojo.declare("demo.Cat", [ demo.Animal ],
	{
		
	    constructor: function(args)
	    {
	    	console.debug("Cat ctor().  Name = ", args.name);
	    },	    

	    makeSound: function(sound)
	    {
	    	this.inherited(arguments);
	    	console.debug("Cat.makeSound() sound ", sound);
	    }
	});
});
