var PubNub = require('pubnub');

var pubnub = PubNub.init({
    subscribe_key: "sub-c-692c1e9c-f564-11e5-ba5f-0619f8945a4f",
    publish_key:   "pub-c-850db8b0-39a4-40e3-bc37-cc35782d5a20"
});

pubnub.publish({
    channel:"text-to-speech",
    message: {
        text:process.argv[2]
    },
    callback: () => process.exit(0)
});