
function tests(){
	var handler = new dbHandler();
	testGetAllGroceries(handler);
	testGetAllUsers(handler);
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

tests();