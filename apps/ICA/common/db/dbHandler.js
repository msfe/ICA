function dbHandler(){
	this.db = new FakeDb();
	var users = db.getUsers();
	this.groceries = db.getGroceries;
	
	this.getUserFavorites = function(userId){
		for(var user in users) {
			if(users[user].uid == userId) {
				return users[user].userFavorites;
			}	
		}
	};
}