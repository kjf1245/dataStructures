function Dictionary(){
	var items = {};

	this.has = function(key){
		return key in items;
	};

	this.set = function(key, value){
		items[key] = value;
	};

	this.remove = function(key){
		if (this.has(key)){
			delete items[key];
			return true;
		}
	};

	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	};

	this.values = function() {
		var values = [];
		for (var k in items){
			if (this.has(k)){
				values.push(items[k]);
			}
		}
		return values;
	};

	this.getItems = function(){
		return items;
	};
}



//Testing
var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf')); //True

console.log(dictionary.keys()); //["Gandalf", "John", "Tyrion"]
console.log(dictionary.values());//["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(dictionary.get('Tyrion'));//tyrion@email.com

dictionary.remove('John');

console.log(dictionary.keys());
console.log(dictionary.valus());
console.log(dictionary.getItems());