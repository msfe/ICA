function Matcher(dbHandler){
	var users = dbHandler.getAllUsers();
	var util = new Util();

	this.matchUser = function(userId){
		var user = dbHandler.getUser(userId);
		var THRESHOLD = 2;
		var matches = new Array();
		var userGroceryList = util.naturalJoinArrays(dbHandler.getUserShoppingList(userId), dbHandler.getUserShoppingList(userId));
		for(var i in users){
			var nrMatches = 0;
			if(users[i].uid == userId) continue;
			var groceryList = util.naturalJoinArrays(dbHandler.getUserRecentGrocery(users[i].uid), dbHandler.getUserShoppingList(users[i].uid));
			for (var j in groceryList){
				if(util.contains(userGroceryList, groceryList[j])){
					nrMatches++;
					if(nrMatches> THRESHOLD){
						matches.push(users[i]);
					}
				}
			}
		}
		return matches;
	};
}