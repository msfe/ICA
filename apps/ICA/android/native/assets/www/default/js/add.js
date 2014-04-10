
/* JavaScript content from js/add.js in folder common */
var db = new dbHandler();
	 var allProducts = new Array();
	 var groceries = db.getAllGroceries();
	 for ( var product in groceries) {
	 allProducts.push(groceries[product].category);
	 }
	 console.log(allProducts);
	 $("#tags").autocomplete({
	 source : allProducts
	 });