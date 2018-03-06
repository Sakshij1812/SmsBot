var accountSid = '*************'; 
var authToken = '************'; 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+919740877787", 
    from: "(503)451-6565", 
    body: "Test Message",
}, function(err, message) { 
    if(err) {
        console.error(err.message);
    } 
});

