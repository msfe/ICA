
function tests(){
	var handler = new dbHandler();
	testGetAllGroceries(handler);
	testGetAllUsers(handler);
	testGetUser(handler);
	testGetGrocery(handler);
	testGetUserFavoriteObjects(handler);
}

function testGetAllGroceries(handler){
	console.log("Runs: testGetAllGroceries");
	var groceries = handler.getAllGroceries();
	console.log(groceries);
};

function testGetAllUsers(handler){
	console.log("Runs: testGetAllUsers");
	var users = handler.getAllUsers();
	console.log(users);	
}

function testGetUser(handler){
	console.log("Runs: testGetUser");
	console.log(handler.getUser(0));
}

function testGetGrocery(handler){
	console.log("Runs: testGetGrocery");
	console.log(handler.getGrocery(0));
}

function testGetUserFavoriteObjects(handler){
	console.log("Runs: testGetUserFavoriteObjects")
	console.log(handler.getUserFavoriteObjects(0));
}


tests();