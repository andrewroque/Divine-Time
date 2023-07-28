console.log('Hello');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
voices = window.speechSynthesis.getVoices()

let voicemails = [];
voicemails.push("Hi babe. How are you? I just missed you. Hope you could call me tonight. Thank you. I love you, babe.");
voicemails.push("Hi babe. Just wanna say how you two guys are doing. Okay. Love you");
voicemails.push("Babe, I meant to, um, greet you. Happy anniversary. I forgot all about it. I've been wanting to call you. Okay. Hope you had a really good anniversary. It's been like three years. Wow. Okay. See you. I'm happy you could stay a little longer with me this time. All right. Bye.");
voicemails.push("Hi, babe. Okay. Thank you.");
voicemails.push("Babe, please call me again.");
voicemails.push("Hi, baby. You called me. Call me again, please. I can't remember the song. Maybe if I could hear it from you maybe. Bye bye.");
voicemails.push("I just go straight five, right? So I don't go to one 10 and all that. Bye.");
voicemails.push("Hey, where are you? Are you coming for lunch? I'm preparing for you to come to lunch. Let me know.");
voicemails.push("Hello? Katie, you called me. I, sorry, I messed up. I just got in in my room. Okay, bye.");
voicemails.push("How are you? Happy Thanksgiving. I don't know what you're doing. Bye. Call me when you can.");
voicemails.push("Hi, babe. Sorry I missed your call. Bye");
voicemails.push("Babe. Happy birthday. I know you're busy. Okay, take care. I love you. Bye.");
voicemails.push("Hi, babe. Call me when you can.");
voicemails.push("Babe, did you call me, babe? Call me back.");
voicemails.push("Hi, babe. You called me. Call me back. Thank you.");

// document.addEventListener("keydown", (event) =>{
//   if(event.key === 'a'){
//     recognition.start();
//     let random = voicemails[Math.floor(Math.random() * voicemails.length)];

//     recognition.onstart = function (){
//       console.log("Speech Recognition Started!");
//     };

//     recognition.onresult = function (event) {
//       console.log(event);

//       const spokenwords = event.results[0][0].transcript;

//       console.log("spoken words are", spokenwords);
//       computerSpeech(spokenwords);
//     };

//     function computerSpeech(words) {
//       const speech = new SpeechSynthesisUtterance();
//       speech.lang = "en-US";
//       speech.pitch = 2;
//       speech.volume = 1;
//       speech.rate = 1;
//       speech.voice = voices[1];

//       determineWords(speech, words);

//       window.speechSynthesis.speak(speech);
//     }

//     function determineWords(speech,words) {
//       if(words.includes("how are you")) {
//         speech.text = "I am fine";
//       }

//       if(words.includes("hi Mom sorry I can't talk")) {
//         speech.text = random;
//         console.log(speech.text);
//       }
//     }
//   }
// });


setInterval(function() {
  const dt = new Date();
  const minutes = dt.getMinutes();
  const seconds = dt.getSeconds();

  if (seconds == 0 || seconds == 15 || seconds == 30 || seconds == 45) {
    recognition.start();
    let random = voicemails[Math.floor(Math.random() * voicemails.length)];

    recognition.onstart = function (){
      console.log("Speech Recognition Started!");
    };

    recognition.onresult = function (event) {
      console.log(event);

      const spokenwords = event.results[0][0].transcript;

      console.log("spoken words are", spokenwords);
      computerSpeech(spokenwords);
    };

    function computerSpeech(words) {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "en-US";
      speech.pitch = 2;
      speech.volume = 1;
      speech.rate = 1;
      speech.voice = voices[1];

      determineWords(speech, words);

      window.speechSynthesis.speak(speech);
    }

    function determineWords(speech,words) {
      if(words.includes("how are you")) {
        speech.text = "I am fine";
      }

      if(words.includes("hi Mom sorry I can't talk")) {
        speech.text = random;
        console.log(speech.text);
      }
    }
  }
}, 1000);
