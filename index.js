function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

//Say Hi to Grandma Variables
var uppercase = "HELLO!"
var lowercase = "hello"
var mixedcase = "Hi there!"


function sayHiToGrandma(string){
  if(uppercase.toUpperCase() === uppercase){
  return 'I can\'t hear you!';
  } else if(lowercase.toLowerCase() === lowercase){
    return ""
  }
}