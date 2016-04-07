webApp = angular.module('WebApp', ['ngRoute', 'ui.bootstrap']);

webApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: '/views/template-overview.html',
			controller: 'TemplateListController'
		}).
		when('/about', {
			templateUrl: '/views/about.html',
			controller: function(){}
		}).
		when('/homepage', {
			templateUrl: '/views/homepage.html',
			controller: 'HomepageController'
		}).
		otherwise({
			templateUrl: '/views/template-overview.html',
			controller: 'TemplateListController'

		});
}]);
