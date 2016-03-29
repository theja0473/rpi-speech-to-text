var ch = require('child_process');
var PubNub = require('pubnub');

var pubnub = PubNub.init({
    subscribe_key: "sub-c-692c1e9c-f564-11e5-ba5f-0619f8945a4f",
    publish_key:   "pub-c-850db8b0-39a4-40e3-bc37-cc35782d5a20"
});

pubnub.subscribe({
    channel:"text-to-speech",
    message: (msg) => speak(msg.text)
});

var speaking = false;
function speak(spk) {
    if(speaking) return;
    speaking = true;
    var proc = ch.spawn('espeak',[spk]);
    proc.on('close', () =>  speaking = false);
}
