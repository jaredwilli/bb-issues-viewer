define([
	'jquery',
	'underscore',
	'backbone'

], function($, _, Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'/issues': 'showIssues',
			'/issues/:id': 'showIssue',

			'*actions': 'defaultAction'
		}
	});

	var initialize = function() {
		var router = new Router;

		router.on('showIssues', function() {
			var issuesListView = new IssuesListView();
			issuesListView.render();
		});

		router.on('showIssue', function() {
			var issueView = new IssueView();
			issueView.render();
		});

		router.on('defaultAction', function(actions) {
			console.log('No route', actions);
		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});
