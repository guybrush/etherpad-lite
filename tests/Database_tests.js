var database = require("../node/Database");

/**
 * Tests if we can create a nstore in /tmp
 */
exports.testNstore = function(test)
{
  test.expect(2);
  
  //check if everything is fine and there is no exception
  test.doesNotThrow(function() {
   database.init("nstore",{path:"/tmp/nstore.db"});
  });
  
  //Did it create the store variable?
  test.notEqual(database.store, null, "The store attribute is still null");

  test.done();
}
