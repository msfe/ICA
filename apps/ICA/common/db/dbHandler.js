function dbHandler(){
	this.db = new FakeDb();
	this.users = this.db.getUsers();
	this.groceries = this.db.getGroceries();
	var util = new Util();
	
	this.getUserFavoriteObjects = function(userId){
		var favoriteList = new Array();
		var userFavorites = this.getUser(userId).userFavorites;		
				for(var listItem in userFavorites) {
					favoriteList.push(this.getUser(userFavorites[listItem]));					
		}
		return favoriteList;
	};

	this.addToRecentList = function(userId) {
		var MAX = 4;
		var userShopList = this.getUser(userId).shoppingList;
		var recentList = this.getUser(userId).recentBoughtGroceries;
		for(var i in userShopList) {
			if(util.contains(recentList, userShopList[i])) {
				var index = recentList.indexOf(userShopList[i]);
				recentList.splice(index, 1);
				recentList.splice(0,0,userShopList[i]);
			}
			else {
				recentList.splice(0,0,userShopList[i]);
				if(recentList.size > MAX) {
					recentList.pop();
				}
			}
		}
	};
	
	this.getUserShoppingList = function(userId){
		var shoppingList = new Array();
		var userShoppingList = this.getUser(userId).shoppingList;		
				for(var listItem in userShoppingList) {
					shoppingList.push(this.getGrocery(userShoppingList[listItem]));					
		}
		return shoppingList;
	};

	this.addGroceryToUserShoppingList = function(userId, grocId){
		var shoppingList = this.getUserShoppingList(userId);
		var exists = false;
		if(!util.contains(shoppingList, this.getGrocery(grocId))){
			this.getUser(userId).shoppingList.push(grocId);
		}
	}

	this.removeGroceryFromUserShoppingList = function(userId, grocId){
		var shoppingList = this.getUserShoppingList(userId);
		for(var groc in shoppingList){
			if(shoppingList[groc].id == grocId){
				this.getUser(userId).shoppingList.splice(groc,1);		
			}
		}
	}
	
	this.getUserRecentGrocery = function(userId){
		var recentList = new Array();
		var userRecents = this.getUser(userId).recentBoughtGroceries;		
				for(var listItem in userRecents) {
					recentList.push(this.getGrocery(userRecents[listItem]));					
		}
		return recentList;
	};
	
	this.getUserFavoriteObjects = function(userId){
		var favoriteList = new Array();
		var userFavorites = this.getUser(userId).userFavorites;		
				for(var listItem in userFavorites) {
					favoriteList.push(this.getUser(userFavorites[listItem]));					
		}
		return favoriteList;
	};
	
	this.getUser = function(userId) {
		for(var user in this.users) {
			if(this.users[user].uid == userId) {
				 return this.users[user];
			}
		}
	};
	
	this.getGrocery = function(grocId) {
		for(var groc in this.groceries) {
			if(this.groceries[groc].id == grocId) {
				 return this.groceries[groc];
			}
		}
	};
	
	this.getAllGroceries = function(){
		return this.groceries;
	};
	
	this.getAllUsers = function(){
		return this.users;
	};
	
	this.getFirstNameUser = function(userObject) {
		return userObject.firstName;
	};
	
	this.getLastNameUser = function(userObject) {
		return userObject.lastName;
	};
	
	this.getAgeUser = function(userObject) {
		return userObject.age;
	};
	
	this.getCategoryGroc = function(grocObject) {
		return grocObject.category;
	};
}