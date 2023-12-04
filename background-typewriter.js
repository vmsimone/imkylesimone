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
    mixed with this misanthropic vision of what it means to exist`,

    `Dissonance disappearance of any semblance that this even existed
    any chance to resit connection of the ocular nervous
    tension sparks
    no talks
    sitting silent
    awkward distance
    feels immense considering proximity of flesh
    never mind those thin white hairs that ouline and grace your neck
    how incredible if only to be able to engage
    Hold embrace your every cresting wave
    take me back face to face when we sat
    third eyes wide needing nothing more than that
    present moments space fires burning living life
    love warmed by this twin flames embers glowing light`,

    `Anti lethargic during catharsis 
    persistent election selecting masochistic catalyst for change
    breaking down patterns repeating cyclical states
    same example 
    definition insane
    so making mistakes takes humility in process
    regardless of magnituted of love that was lost
    cross between codependency living idealistic reaps cost within dreams
    rapid eye movement states take away to fantasy
    beliving reality still exists when we shared interconnectedness mixed bliss
    plus saliva from our lips`,

    `Funny how regrets left with giving everyone else my best instead of investing in this broken body
    and whatever of a sooul that's left
    how far gone off a path that at one time felt heaven sent
    beyond cosmos
    personifying purpose
    in a world of misdirection elected to pass on dreams and fantasies
    rather be a masochistic glutton for punishment
    consistently working jobs
    searching answers
    ending up with none`,

    `Speaks of December cold
    kneeling down counting bodies
    sifting through old bones
    contemplating magic
    it happens
    fantastic damage imagining throws of passion
    could relapse on an addiction to lips hips breasts
    call it combining a couple savages
    maybe it's the mystery from first sight till late night
    star counts calculating infinity or just that
    when eyes meet there's a secret meaning between the distance
    felt left wondering how skin is felt
    push the sheets upon flooboards
    amassing physicality towards crafting folk lore
    based upon feeding of seething for lorn
    forgotten wants needs desires and meaning
    waiting on arriving at the destination
    is only reminding of the credence`
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