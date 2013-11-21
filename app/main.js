require.config({
	paths: {
		"jquery": "scripts/vendor/jquery-1.10.2",
		"underscore": "scripts/vendor/underscore-min",
		"backbone": "scripts/vendor/backbone-min",
	}
})

require(['views/app'], function(AppView){
	new AppView;
})