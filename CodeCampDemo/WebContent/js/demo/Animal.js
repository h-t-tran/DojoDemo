
require(
  [  ], 
function( )
{
	dojo.declare("demo.Animal", [ ],
	{
		
	    constructor: function(args)
	    {
	    	console.debug("Animal ctor().  Name = ", args.name);
	    },	    

	    makeSound: function(sound)
	    {
	    	console.debug("Animal.makeSound() sound ", sound);
	    }
	});
});
