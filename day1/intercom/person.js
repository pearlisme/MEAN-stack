var events = require('events');
//Producer of event
exports.Person = function() {
    var personEvents = new events.EventEmitter();

    function generateEvent(args) {
        console.log("Emitting event with args from person "+JSON.stringify(args));
        personEvents.emit("myEvent", args);
    }

    return {
        personEvents: personEvents,
        generateEvent: generateEvent
    };
}