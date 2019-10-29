class Events{
	constructor(){
		this.events = {}
	}

	subscribe(eventName, data){
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(data);
	}

	unsubcribe(eventName, data){
		if(this.events[eventName]){
			for(let i = 0; i < this.events[eventName].length; i++){
				if(this.events[eventName][i] === data){
					this.events[eventName].splice(i, 1);
					break;
				}
			}
		}
	}

	publish(eventName, data){
		if(this.events[eventName]){
			this.events[eventName].forEach(function (display){
				display(data);
			});
		}
	}
}


function test(){
	let events = new Events();
	events.subscribe('events1', function(data){
		console.log('subcriber1 -> ' + data);
	});
	events.subscribe('events2', function(data){
		console.log('subcriber2 -> ' + data);
	});

	//publish some data to all subscribers whose were registered to event
	events.publish('events2','some data to sent');
	
}

test();