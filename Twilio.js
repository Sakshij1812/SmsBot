var accountSid = '*************'; 
var authToken = '************'; 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "************", 
    from: "(503)451-6565", 
    body: "Test Message",
}, function(err, message) { 
    if(err) {
        console.error(err.message);
    } 
});

