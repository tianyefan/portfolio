const twilio = require('twilio');
const accountSid = 'AC9fdd425423cf54b7e27bedacc0d0d06c'
const authToken = '178a8dec66f8dcd46a115afb12021400'

export function handleTwilio(){
    const client = new twilio(accountSid, authToken);
    client.messages.create({
    body: 'Hello from Node. Just a test',
    to: '+4085966270', // Text this number
    from: '+8304452762', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
}