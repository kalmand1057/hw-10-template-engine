// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(mame, id, email)
        this.github = github;
    }
}