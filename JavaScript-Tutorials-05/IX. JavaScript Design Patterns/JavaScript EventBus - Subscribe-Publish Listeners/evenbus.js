function eventBus(){
	let eventTopics = {};

	this.addEventListener = function(evenName, listener){
		if(!eventTopics[evenName] || eventTopics[evenName].length < 1){
			eventTopics[evenName] = [];
		}
		eventTopics[evenName].push(listener);
	};

	this.emitEventListener = function(evenName, parameters){
		if(!eventTopics[evenName] || eventTopics[evenName].length < 1){
			return;
		}
		eventTopics[evenName].forEach(function(listener){
			listener(!!parameters ? parameters : {});
		});
	};

	this.removeListener = function(evenName, listener){
		if(!eventTopics[evenName] || eventTopics[evenName].length < 1){
			return;
		}
		delete eventTopics[evenName];
	};


	this.getListener = function(eventName){
		return eventTopics[eventName];
	};
}

function test(){
	let event = new eventBus();
	let data1 = ' some data';
	let data2 = ' some data';

	event.addEventListener('event1', function(data){
		console.log('listener 1 listen event 1' + data);
	});

	event.addEventListener('event1', function(data){
		console.log('listener 2 listen event 1' + data);
	});

	event.addEventListener('event2', function(data){
		console.log('listener 1 listen event 2' + data);
	});

	event.addEventListener('event2', function(data){
		console.log('listener 2 listen event 2' + data);
	});

	event.emitEventListener('event1', data1);
	event.emitEventListener('event2', data2);
}

test();