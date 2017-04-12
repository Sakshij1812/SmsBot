var accountSid = 'AC2b4966e2d5a02877a4bdd1cc85920b54'; 
var authToken = '7d3035bd6b546261a0176c884b22bedd'; 
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

