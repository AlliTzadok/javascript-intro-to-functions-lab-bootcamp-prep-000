function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log('HELLO')
}
function logWhisper(string){
  console.log('hello')
}

function sayHiToGrandma(string){
  if (string === whisper(string)){
    return string("I can't hear you")}
    else if (string === shout(string)){
      return string("YES INDEED!")}
      else return string("I love you, Grandma.")
}