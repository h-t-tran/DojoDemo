//
// to run this demo.profile.js
// 1. cd to the directory containing dojo.profile.js (eg. c:\codecamp\DojoDemo\CodeCampDemo\WebContent)
// 2. Execute the build.bat that comes with dojo and specify demo.profile.js as input. 
//    build.bat is in dojo\util\buildscripts\
//	  (eg. .\js\dojo\util\buildscripts\build.bat  --profile demo.profile.js)
// 3. Once complete, there should be a directory app_rel\app created containing the
//	  compressed dojo.js
// 4. Replace .\js\dojo\dojo.js with the optimized dojo.js and dojo_en-us.js.
//
var profile = (function(){
    return {
    	
    	// the location where we run demo.profile.js
        basePath: ".",
        
        // the directory where we want the optimized dojo layer to reside.
        releaseDir: "./app_rel",  
        
        // the name of the directory within 'releaseDir' where the the dojo layer will be stored.
        releaseName: "app",   	
        						
        action: "release",
        //layerOptimize: "shrinksafe",
        //optimize: "shrinksafe",
        //optimize: "comment.keeplines",
        //cssOptimize: "comments",
        
        packages:[
	        {
	            name: "dojo",
	            location: "./js/dojo/dojo"
	        },     
	        {
	            name: "dijit",
	            location: "./js/dojo/dijit"
	        },
	        {
	            name: "dojox",
	            location: "./js/dojo/dojox"
	        },
	        {
	        	// this name should match the last directory name of the location.
	            name: "demo",
	            
	            // location is starting from the basePath where all the JS files go.
	            location: "./js/demo"
	        }
        ],
 
        layers:        
        {
       

		////////////////////////////////////////////////
		//
		// include everything we want to aggregate.  This will create a single dojo layer
        // containing all these JS files concatenate together into a file dojo.js
		//
		////////////////////////////////////////////////

	    "dojo/dojo": {
                include: [ 

					"dojo/has",
					"dojo/_base/kernel",
					"dojo/_base/config",
					"dojo/sniff",
					"dojo/_base/lang",
					"dojo/_base/array",
					"dojo/ready",
					"dojo/domReady",
					"dojo/_base/declare",
					"dojo/_base/connect",
					"dojo/on",
					"dojo/topic",
					"dojo/Evented",
					"dojo/aspect",
					"dojo/_base/event",
					"dojo/dom-geometry",
					"dojo/_base/window",
					"dojo/dom",
					"dojo/dom-style",
					"dojo/mouse",
					"dojo/_base/sniff",
					"dojo/keys",
					"dojo/_base/Deferred",
					"dojo/Deferred",
					"dojo/errors/CancelError",
					"dojo/errors/create",
					"dojo/promise/Promise",
					"dojo/promise/instrumentation",
					"dojo/promise/tracer",
					"dojo/when",
					"dojo/_base/json",
					"dojo/json",
					"dojo/_base/Color",
					"dojo/_base/browser",
					"dojo/_base/unload",
					"dojo/_base/html",
					"dojo/dom-attr",
					"dojo/dom-prop",
					"dojo/dom-construct",
					"dojo/dom-class",
					"dojo/_base/NodeList",
					"dojo/query",
					"dojo/selector/_loader",
					"dojo/selector/acme",
					"dojo/NodeList-dom",
					"dojo/_base/xhr",
					"dojo/io-query",
					"dojo/dom-form",
					"dojo/request/watch",
					"dojo/request/util",
					"dojo/errors/RequestError",
					"dojo/errors/RequestTimeoutError",
					"dojo/request/xhr",
					"dojo/request/handlers",
					"dojo/_base/fx",
					"dojo/_base/loader",
					"dijit/form/TextBox",
					"dojo/text",
					"dojo/request",
					"dojo/request/default",
					"dijit/form/_FormValueWidget",
					"dijit/form/_FormWidget",
					"dijit/_Widget",
					"dijit/registry",
					"dijit/main",
					"dijit/_WidgetBase",
					"dojo/Stateful",
					"dijit/Destroyable",
					"dijit/_OnDijitClickMixin",
					"dijit/a11yclick",
					"dojo/touch",
					"dijit/_FocusMixin",
					"dijit/focus",
					"dojo/window",
					"dijit/a11y",
					"dojo/uacss",
					"dijit/hccss",
					"dojo/hccss",
					"dijit/_CssStateMixin",
					"dijit/_TemplatedMixin",
					"dojo/cache",
					"dojo/string",
					"dijit/_AttachMixin",
					"dijit/form/_FormWidgetMixin",
					"dijit/form/_FormValueMixin",
					"dijit/form/_TextBoxMixin",
					"dijit/form/Button",
					"dijit/form/_ButtonMixin",
					"dijit/_base/manager",
					"dijit/_base",
					"dijit/WidgetSet",
					"dijit/_base/focus",
					"dijit/selection",
					"dijit/_base/place",
					"dijit/place",
					"dijit/Viewport",
					"dijit/_base/popup",
					"dijit/popup",
					"dijit/BackgroundIframe",
					"dijit/_base/scroll",
					"dijit/_base/sniff",
					"dijit/_base/typematic",
					"dijit/typematic",
					"dijit/_base/wai",
					"dijit/_base/window",
					"dijit/form/DropDownButton",
					"dijit/_Container",
					"dijit/_HasDropDown",
					"dijit/form/ComboButton",
					"dijit/form/ToggleButton",
					"dijit/form/_ToggleButtonMixin",
	
					//
					// Our application custom JS
					//
					"demo/Animal",
					"demo/Cat",
					"demo/DemoButton",
					"demo/DemoWidget"					
            	  ],
                customBase: true,
                boot: true
            },

        }
    };
})();