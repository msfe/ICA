
/* JavaScript content from js/matcher.js in folder common */
function Matcher(dbHandler){
	users = dbHandler.getAllUsers();


	this.matchUser = function(userId){
		var user = dbHandler.getUser(userId);
		var THRESHOLD = 2;
		var matches = new Array();
		var userGroceryList = naturalJoinArrays(dbHandler.getUserShoppingList(userId), dbHandler.getUserShoppingList(userId));
		for(var i in users){
			var nrMatches = 0;
			if(users[i].uid == userId) continue;
			var groceryList = naturalJoinArrays(dbHandler.getUserRecentGrocery(users[i].uid), dbHandler.getUserShoppingList(users[i].uid));
			for (var j in groceryList){
				if(contains(userGroceryList, groceryList[j])){
					nrMatches++;
					if(nrMatches> THRESHOLD){
						matches.push(users[i]);
					}
				}
			}
		}
		return matches;
	};

	function contains(array, element){
		for(var i in array){
			if (element == array[i])
				return true
		}
		return false;
	}

	function naturalJoinArrays(array1, array2){
		var array = array1.concat(array2);
		var list = [];
		for(var i in array){
			if(!contains(list, array[i])){
				list.push(array[i]);
			}
		}
		return list;
	}
}