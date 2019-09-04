let PERSON = require("./person").Person();
let GROUP = require("./group").Group(PERSON);

PERSON.generateEvent({ type: "Welcome to node" });