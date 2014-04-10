function dbHandler(){
	this.db = new FakeDb();
	this.users = this.db.getUsers();
	this.groceries = this.db.getGroceries();
	
	this.getUserFavoriteObjects = function(userId){
		var favoriteList = new Array();
		var userFavorites = this.getUser(userId).userFavorites;		
				for(var listItem in userFavorites) {
					favoriteList.push(this.getUser(userFavorites[listItem]));					
		}
		return favoriteList;
	};
	
	this.getUserFavoriteGrocery = function(userId){
		var favoriteList = new Array();
		var userFavorites = this.getUser(userId).favoriteGroceries;		
				for(var listItem in userFavorites) {
					favoriteList.push(this.getGrocery(userFavorites[listItem]));					
		}
		return favoriteList;
	};
	
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