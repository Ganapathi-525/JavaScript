
var request = require('request');

var options = {
  'method': 'POST',
  'url': 'https://api.sendchamp.com/api/v1/verification/create',
  'headers': {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer SECRET_KEY'
  },
  body: JSON.stringify({"channel":"sms","token_type":"numeric",
"sender": "Sendchamp",
"token_length":"5","expiration_time":6,
"customer_email_address":"muktar@sprinble.co",
"customer_mobile_number":"2348119974190",
"meta_data":{"first_name":"segun"}})

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

