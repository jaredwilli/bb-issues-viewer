define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	var IssuesModel = Backbone.Model.extend({
		url: 'https://api.github.com/repos/rails/rails',

		defaults: {
			number: 245,
			title: 'Thing'
		},

		initialize: function() {
			this.fetch();
		}

	});

	return IssuesModel;
});
