exports.testModel = require("appengine/google/appengine/ext/db/model");

if (module === require.main) {
    require("test").run(exports);
    system.exit(0);
}    
