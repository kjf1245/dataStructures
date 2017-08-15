//Linked List

function LinkedList(){
	var node = funtion(element){
		this.element = element;
		this.next = null;
	};

	var length = 0;
	var head = null;

	this.append = function(element){
		var node = new Node(element), current;

		if (head === null){//first node on list
			head = node;
		} else {
			current = head;
			//loop the list until find last item
			while(current.next){
				current = current.next;
			}
			//get last item and assign next to node to make the link
			current.next = node;
		}
		length++; //update size of list
	};




}