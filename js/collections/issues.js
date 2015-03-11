define([
	'underscore',
	'backbone',
	'models/issues'
], function(_, Backbone, Issue) {
	var IssuesCollection = Backbone.Collection.extend({
		model: Issue,

		url: 'https://api.github.com/repos/rails/rails',

		initialize: function() {
			console.log(this.models);
			this.fetch();
		}

	});

	return IssuesCollection;
});
