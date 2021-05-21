var accountSid = '**********';
var authToken = "*********";
var client = require('twilio')(accountSid, authToken);

var filterOpts = {
     //phone number
     from: '**********',
    //dateSent: new Date(2017, 04, 11)
};

client.messages.list(filterOpts, function(err, data) {
 data.messages.forEach(function(message) {
  //  (function (message) {
        console.log(message.body);
   // });
 });
});

