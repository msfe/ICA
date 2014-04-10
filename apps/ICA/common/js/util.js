function Util() {

	this.contains = function(array, element){
		for(var i in array){
			if (element == array[i])
				return true
		}
		return false;
	};

	this.naturalJoinArrays = function(array1, array2){
		var array = array1.concat(array2);
		var list = [];
		for(var i in array){
			if(!this.contains(list, array[i])){
				list.push(array[i]);
			}
		}
		return list;
	};
}