function dbHandler(){
	this.db = new FakeDb();
	this.users = db.getUsers();
	this.groceries = db.getGroceries;
	
	this.getUserFavorites = function(userId){
		for(var user in this.users) {
			if(this.users[user].uid == userId) {
				return this.users[user].userFavorites;
			}	
		}
	};
	
	this.getAllGroceries = function(){
		return this.groceries;
	};
	
	this.getAllUsers = function(){
		return this.users;
	};
}