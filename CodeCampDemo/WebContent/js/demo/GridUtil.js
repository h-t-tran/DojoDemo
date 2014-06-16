function showGrid()
{
			//////////////////////////////////////////////////////
	// Steps to create the grid.
	//
	// 1. Build the data array such as from ajax response
	// 2. Specify the layout telling the grid the name of the columns and size
	// 3. Create a 'store' to contain the data in 1)
	// 4. New up the grid and feed it the store and layout.
	// 
	//////////////////////////////////////////////////////////
	
	// define the data that will be show in the grid.
	var data = 	{
				  // identifier tells dojo grid the property of the item to use as unique ID
				  // the 'id' is a property of the object that is added to items[] array.
    		      identifier: 'id',
	        		      items: []
	        		    };
  
     		 for(var i = 0; i < 5; i++)
     		 {
     		    	// create an object and add it to the array.
	    	data.items.push({
	    		// the id property is important.  It must be unique since we tells dojo grid
	    		// to use id as the identifier above.
	    		id			: i,
	    		firstname	: "John " + i,
	    		lastname	: "Doe " + i*10,
	    		age			:	i * 10
	    	});
	 }
		    
	 //  build a store that dojo Grid will use to get the data.
	 var store = new dojo.data.ItemFileWriteStore({
	    		data: data
	 	});


	 // the 'name' property contains the column header text
	 // the 'field' is the property of the object in the store where the data comes from.
	 // the 'width' is the width of the column.
	 var layout = [[
	      {'name': 'First Name', 	'field': 'firstname',	'width': '100px'},
	      {'name': 'Last Name', 	'field': 'lastname',	'width': '100px'},
	      {'name': 'Age', 			'field': 'age', 		'width': 'auto'},
	      
	    ]];

	var grid = new dojox.grid.DataGrid({
	        store: store,
	        structure: layout,
	        rowSelector: '20px'
	    }, "grid");

	// Must call startup() get the grid to render.
	grid.startup();
}