//Queue Class
function Queue(){
	var items = [];

	this.enqueue = function(element){
		items.push(element);
	};

	this.dequeue = function(){
		return items.shift();
	};

	this.front = function(){
		return items[0];
	};

	this.isEmpty = function(){
		return items.length == 0;
	};

	this.size = function(){
		return items.length;
	};

	this.print = function(){
		console.log(items.toString());
	};
}
/*
var queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');

queue.print();

console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();
queue.dequeue();

function PriorityQueue(){
	var items[];

	function QueueElement(element, priority){
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority){
		var queueElement = new QueueElement(element, priority);

		if(this.isEmpty()){
			items.push(queueElement);
		} else {
			var added = false
			for(var i = 0; i < items.length; i++){
				if (queueElement.priority < items[i].priority){
					items.spliced(i,0,queueElement);
					added = true;
					break;
				}
			}
			if (!added){
				items.push(queueElement);
			}
		}
	};
}
*/
function hotPotato(nameList, num){
	var queue = new Queue();

	for(var i = 0; i < nameList.length; i++){
		queue.enqueue(nameList[i]);
	}

	var eliminated = '';
	while (queue.size() > 1){
		for (var i = 0; i < num; i++){
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
		console.log(eliminated + ' was eliminated from Hot Potato game.');
	}
		return queue.dequeue();
	}

	var names =['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
	var winner = hotPotato(names, 7);
	console.log('The winner is: ' + winner);
