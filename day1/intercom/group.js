var events = require('events');
//consumer of event
exports.Group = function(PERSON) {
    function handleEvent(args) {
        console.log("Caught event with args in group "+JSON.stringify(args));
    }

    PERSON.personEvents.on("myEvent", function(args) {
        handleEvent(args);
    });
}