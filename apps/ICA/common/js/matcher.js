function Matcher(dbHandler){
	users = dbHandler.getAllUsers();

	this.matchUser = function(uid){
		var THRESHOLD = 5;
		var matches = new Array();
		for(var user in users){
			var recent = dbHandler.
		}

	}
}