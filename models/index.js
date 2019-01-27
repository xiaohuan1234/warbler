const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://warbler:warbler2019@ds211275.mlab.com:11275/abbey-los-altos", {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
