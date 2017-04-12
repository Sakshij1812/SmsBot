// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC2b4966e2d5a02877a4bdd1cc85920b54';
var authToken = "7d3035bd6b546261a0176c884b22bedd";
var client = require('twilio')(accountSid, authToken);

var filterOpts = {
    //to: '(503) 451-6565',
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

