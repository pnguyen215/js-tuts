// 
let events = {
	events: {},
	subscribe: function (eventName, content){
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(content);
	},
	unsubcribe: function (eventName, content){
		if(this.events[eventName]){
			for(let i = 0; i < this.events[eventName].length; i++){
				if(this.events[eventName][i] === content){
					this.events[eventName].splice(i, 1);
					break;
				}
			}
		}
	},
	publish: function (eventName, content){
		if(this.events[eventName]){
			this.events[eventName].forEach(function (display){
				display(content);
			});
		}
	}
};


function test(){
	
	events.subscribe('events', function(data){
		console.log('subcriber -> ' + data);
	});
	events.subscribe('events', function(data){
		console.log('subcriber -> ' + data);
	});

	//publish some data to all subscribers whose were registered to event
	events.publish('events','some data to sent');
	
}

test();