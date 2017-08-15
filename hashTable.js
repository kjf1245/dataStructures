//hashTable/hashMap
function HashTable(){
	var table = [];

	var loseloseHashCode = function(key){
		var hash = 0;
		for(var i = 0; i < key.length; i++){
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};

	var djb2HashCode = function(key){
		var hash = 5381;
		for(var i = 0; i < key.length; i++){
			hash = hash * 33 + key.charCodeAt(i);
		}
		return hash % 1013;
	};

	//separate chaining technique

	var ValuePair = function(key, vale){
		this.key = key;
		this.value = value;

		this.toString = function(){
			return '[' + this.key + ' - ' + this.value + ']';
		}
	};

	/*
	this.put = function(key, value){
		var position = loseloseHashCode(key);
		console.log(position + ' - ' + key);
		table[position] = value;
	};
	

//seperate chaining technique
	this.put = function(key, value){
		var position = loseloseHashCode;

		if(table[position] == undefined){
			table[position] = new LinkedList();
		}
		table[position].append(new ValuePair(key, value));
	};
	*/

//Linear probing
	this.put = function(key, value){
		var position = loseloseHashCode(key);

		if(table[position] == undefined){
			table[position] = new ValuePair(key, value);
		} else {
			var index = ++position;
			while (table[index] != undefined){
				index++;
			}
			table[index] = new ValuePair(key, value);
		}
	};
	

	/*
	this.get = function(key){
		return table[loseloseHashCode(key)];
	};
	

	//seperate chainning technique
	this.get = function(key){
		var position = loseloseHashCode(key);

		if(table[position] !== undefined){
			//iterate linked list to find key/value
			var current = table[position].getHead();

			while(current.next){
				if(current.element.key === key){
					return current.element.value;
				}
				current = current.next;
			}

			//check in case first or last element
			if(current.element.key === key){
				return current.element.value;
			}
		}
		return undefined;
	}
	*/

//Linear probing
	this.get = function(key){
		var position = loseloseHashCode(key);

		if(table[position] !== undefined){
			if(table[position].key === key){
				return table[position].value;
			} else {
				var index = ++position;
				while(table[index] === undefined || table[index].key !== key){
					index++;
				}
				if(table[index].key === key){
				return table[index].value;
				}
			}
		}
		return undefined;
	};
	
	/*
	this.remove = function(key){
		table[loseloseHashCode(key)] = undefined;
	};
	

//seperate chainning
	this.remove = function(key){
		var position = loseloseHashCode(key);

		if(table[position] !== undefined){
			var current = table[position].getHead();
			while(current.next){
				if(current.element.key === key){
					table[position].remove.(current.element);

					if(table[position].isEmpty()){
						table[position] = undefined;
					}
					return true;
				}
				current = current.next;
			}
			if(current.element.key === key){
				table[position].remove(current.element);
				if(table[position].isEmpty()){
					table[position] = undefined;
				}
				return true;
			}
		}
		return false;
	};
	*/

//linear probing
	this.remove = function(key){
		var position = loseloseHashCode(key);

		if(table[position] !== undefined){
			if(table[position].key === key){
				table[index] = undefined;
			} else {
				var index = ++position;
				while(table[index] === undefined || table[index].key !== key){
					index++;
				}
				if(table[index].key === key){
					table[index] = undefined;
				}
			}
		}
		return undefined;
	};
 	

	
	this.print = function(){
		for(var i = 0; i < table.length; i++){
			if(table[i] !== undefined){
				console.log(i + ": " + table[i]);
			}
		}
	};
}

//Test HashTable
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

hash.put('Aaron', 'aaron@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');

hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');

hash.put('Paul', 'pauld@email.com');
hash.put('Nathan', 'nathan@email.com');

//Test get method
console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));

//Test remove method
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

hash.print();