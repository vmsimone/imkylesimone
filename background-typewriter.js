const poems = [
    `Is it afternoon or does gloom loom around corners
    edge every break of day when memories stain all the pieces of a puzzle
    you've yet to complete
    justifying explanations why it isn't in a frame
    how can arcane meanings of magik lead to tangents ruled as tactics used backwards
    in a mirror reflecting self
    ready to receive a grave explaining as you're sinking under oceans 
    tidal faced simultaneously existing in a completely different state cycling back as interpersonal conflicts
    Schrodinger's cat
    expounding faith 
    fondly amounting to encountering
    interpretation of wether or not your drowning
    or just trying to wave`,

    `Yes it is contradictory,
    at the same time re learning how to communicate directly
    with advice soaked in therapy is what is deemed necessary for progress
    regardless of this being cathartic catalyst in the depths of
    worrying an anxious avoidant seeks to find inner peace
    some sort of release
    when time and space seem to be elliptical spirals constantly bringing on new lessons
    to see a breed of love created a sum of one
    that brought belief in finally shedding this disease

    May the connection never cease, 
    entwined by time there is no other outcome 
    besides meeting each other in dreams`,

    `Familiar space sat back
    rested rideshare Etiquette begets small talk rhetoric
    until silence arrives here 
    couldn't feel better about letting this go
    moving on
    seemed like it was doing harm until realizations lead to finding peace within own arms
    how long a timeframe to switch mind states
    dig into deepest of holes
    some say god shaped
    but who in hell knows
    prescribed ideals of how to feel
    daily spills over into throws of conniption fits
    mixed with this misanthropic vision of what it means to exist`
]

let visibleText = "";

let cursorPosition = 0;
let cursorShown = true;

let typing;

function loadPoem() {
  const poem = getRandomPoem();
  const poemArray = poem.split("");
  
  typePoem(poemArray);
}

function getRandomPoem() {
    const index = Math.floor(Math.random() * poems.length);
    return poems[index];
}

function typePoem(poemArray) {
  typing = setInterval(() => {
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
}

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
loadPoem();