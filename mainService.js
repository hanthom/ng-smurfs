angular.module('smurfsApp').service('mainService', function($http) {

	this.getSmurfs = function() {
		return $http({
			method: 'GET',
			url: "http://smurfs.devmounta.in/smurfs/",
		});
	}

	this.addSmurf = function(smurfObj) {
		console.log(smurfObj);
		return $http({
			method: 'POST',
			url: "http://smurfs.devmounta.in/smurfs/",
			data : {name: smurfObj, img: 'http://i.imgur.com/Lgs3nTf.jpg'},
			
		})
	}

})