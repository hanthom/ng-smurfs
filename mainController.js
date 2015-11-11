angular.module('smurfsApp').controller('mainCtrl', function($scope, mainService) {

	var getSmurfs = function() {
		return mainService.getSmurfs().then(function(res) {
			console.log(res);
			$scope.smurfs = res.data;
		})
	}

	$scope.smurf = '';

	getSmurfs();

	$scope.addSmurf = function(smurfObj) {
		mainService.addSmurf(smurfObj).then(function(res) {
			console.log(res);
			getSmurfs();
			$scope.smurf = '';
		}, function(err) {
			console.log(err);
		});
	}

})