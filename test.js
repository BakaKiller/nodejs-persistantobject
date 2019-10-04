persistantobject = require('./persistantobject.js');

class test extends persistantobject {
    static superval = "Yeah, very super";
    constructor(val, val2) {
        super();
        this.value = val;
        this.value2 = val2;
        this.save_data();
    }
}

let supertest = new test("Check", "This");
