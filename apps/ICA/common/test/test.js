
function tests(){
	var handler = new dbHandler();
	testGetAllGroceries(handler);
	testGetAllUsers(handler);
	testGetUser(handler);
	testGetGrocery(handler);
	testGetUserFavoriteObjects(handler);
	testGetUserShoppingList(handler);
	testAddGroceryToUserShoppingList(handler);
	testRemoveGroceryFromUserShoppingList(handler);
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
	console.log("testRemoveGroceryFromUserShoppingList");
	console.log(handler.getUser(0).shoppingList);
	console.log("Remove id 0");
	handler.removeGroceryFromUserShoppingList(0, 0);
	console.log(handler.getUser(0).shoppingList);
	console.log("Remove id 2");
	handler.removeGroceryFromUserShoppingList(0, 2);
	console.log(handler.getUser(0).shoppingList);	
}

tests();