define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'views/issues',
	'collections/issues'
], function($, _, Backbone, Router, IssuesView, IssuesCollection) {

	var issuesView = new IssuesView({
		collection: IssuesCollection
	});

	var initialize = function() {
		Router.initialize();
	};

	return {
		initialize: initialize
	};
});
