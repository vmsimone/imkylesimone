var typing;
var poem = `Yes it is contradictory,
    at the same time re learning how to communicate directly
    with advice soaked in therapy is what is deemed necessary for progress
    regardless of this being cathartic catalyst in the depths of
    worrying an anxious avoidant seeks to find inner peace
    some sort of release
    when time and space seem to be elliptical spirals constantly bringing on new lessons
    to see a breed of love created a sum of one
    that brought belief in finally shedding this disease

    May the connection never cease, 
    entwined by time there is no other outcome ebsides meeting each other in dreams
`
var visibleText = "";
var poemArray = poem.split("");
var cursorPosition = 0;
var cursorShown = true;

var typing = setInterval(function() {
    if(poemArray[cursorPosition] == '\n') {
        visibleText += `<br>`
    }
    if (cursorPosition < poemArray.length) {
        visibleText += poemArray[cursorPosition];
        $('div.bg > p').html(visibleText);
        cursorPosition++;
  }
  else {
      clearInterval(typing);
  }
}, 80);

function blink() {
  if (cursorShown === true) {
    $('div.bg > p').append('<span class="bg-cursor"></span>');
    cursorShown = false;
    setTimeout(blink, 600);
  } else {
    $('div.bg > p').find("span").remove();
    cursorShown = true;
    setTimeout(blink, 400);
  }
}

blink();