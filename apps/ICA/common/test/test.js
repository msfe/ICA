
function tests(){
	var handler = new dbHandler();
	var matcher = new Matcher(handler);
	testGetAllGroceries(handler);
	testGetAllUsers(handler);
	testGetUser(handler);
	testGetGrocery(handler);
	testGetUserFavoriteObjects(handler);
	testGetUserShoppingList(handler);
	testAddGroceryToUserShoppingList(handler);
	testRemoveGroceryFromUserShoppingList(handler);
	testMatchUser(matcher);
	testAddToRecentList(handler);
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

function testGetUserShoppingList(handler){
	console.log("Runs: testGetUserShoppingList");
	console.log(handler.getUserShoppingList(0));
}

function testAddGroceryToUserShoppingList(handler){
	console.log("Runs: testAddGroceryToUserShoppingList");
	console.log(handler.getUser(0).shoppingList);
	console.log("Adds id 5");
	handler.addGroceryToUserShoppingList(0, 5);
	console.log(handler.getUser(0).shoppingList);
	console.log("Adds id 2");
	handler.addGroceryToUserShoppingList(0, 2);
	console.log(handler.getUser(0).shoppingList);
}

function testRemoveGroceryFromUserShoppingList(handler){
	console.log("Runs: testRemoveGroceryFromUserShoppingList");
	console.log(handler.getUser(0).shoppingList);
	console.log("Remove id 0");
	handler.removeGroceryFromUserShoppingList(0, 0);
	console.log(handler.getUser(0).shoppingList);
	console.log("Remove id 2");
	handler.removeGroceryFromUserShoppingList(0, 2);
	console.log(handler.getUser(0).shoppingList);	
}

function testMatchUser(matcher){
	console.log("Run testMatchUser");
	console.log(matcher.matchUser(0));
}

function testAddToRecentList(handler){
	console.log("Run testAddToRecentList");
	console.log(handler.getUser(0).recentBoughtGroceries);
	console.log("Add grocery id 5,4,1 to recentList");
	handler.addToRecentList(0);
	console.log(handler.getUser(0).recentBoughtGroceries);
	console.log("Add grocery 3 to shoppingList");
	handler.addGroceryToUserShoppingList(0, 3);
	console.log(handler.getUser(0).recentBoughtGroceries);
	console.log("Add grocery 3 to recentList");
	handler.addToRecentList(0);
	console.log(handler.getUser(0).recentBoughtGroceries);
}

tests();