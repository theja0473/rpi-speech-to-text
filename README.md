# rpi-speech-to-text
Demo of Remote Speech to Text on the Raspberry Pi


# installation
 

Short version: install espeak, check out this code, install deps, run server.js, run speakit.js
 
Long version:

Make sure you have NodeJS installed. [link]

Install ESpeak [link]

```
sudo apt-get install espeak
```

Check out this repo

```
git clone https://github.com/pubnub/rpi-speech-to-text.git
```

Install dependencies

```
npm install
```

run the server in the background

```
node server.js &
```

run the client to speak something

```
node speakit.js "Greetings Earthling! I come from the Planet of Pi"
```


To make your Raspberry Pi speak from somewhere else in the world, put speakit.html on a webserver
somewhere, load it in your browser, and tell it what to say.


