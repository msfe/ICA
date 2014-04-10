
/* JavaScript content from db/db.js in folder common */
function FakeDb(){
	this.groceriesDb =
		[
		 {"id":0, "category":"Pasta"},
		 {"id":1, "category":"Bacon"},
		 {"id":2, "category":"Grädde"},
		 {"id":3, "category":"Kryddor"},
		 {"id":4, "category":"Mjölk"},
		 {"id":5, "category":"Banan"}
		 ];
	
	this.userDb =
		[
			{"uid":"0","firstName":"Robin", "lastName":"Chowdhury", "age":25, "userFavorites":[1,2], "recentBoughtGroceries":[0,1], "favoriteGroceries":[1,2]},
			{"uid":"1","firstName":"Mitra", "lastName":"Khorsand", "age":23, "userFavorites":[0], "recentBoughtGroceries":[0,1], "favoriteGroceries":[1,2]},
			{"uid":"2","firstName":"Martin", "lastName":"Andersen", "age":15, "userFavorites":[0,3], "recentBoughtGroceries":[0,1], "favoriteGroceries":[1,2]},
			{"uid":"3","firstName":"Mattias", "lastName":"Folke", "age":72, "userFavorites":[2], "recentBoughtGroceries":[0,1], "favoriteGroceries":[1,2]}
		];

	this.getGroceries = function (){
		return this.groceriesDb;
	};
	
	this.getUsers = function(){
		return this.userDb;
	};
}