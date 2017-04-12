var accountSid = 'AC2b4966e2d5a02877a4bdd1cc85920b54';
var authToken = "7d3035bd6b546261a0176c884b22bedd";
var client = require('twilio')(accountSid, authToken);

var filterOpts = {
     from: '919740877787',
    //dateSent: new Date(2017, 04, 11)
};

client.messages.list(filterOpts, function(err, data) {
 data.messages.forEach(function(message) {
  //  (function (message) {
        console.log(message.body);
   // });
 });
});

