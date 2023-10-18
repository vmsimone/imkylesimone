function readPoems() {
    $('button#hide').on('click', e => {
        e.preventDefault();
        $('main').css('animation', 'fadeOut 1s forwards');
        $('section.poems').css('animation', 'fadeOut 1s forwards');
        setTimeout(() => {
            readyReturn();
            backToMain();
        }, 1000)
    })
}

function readyReturn() {
    $('section.poems').html(`
        <button type="button" id="unhide">Return</button>
        <button type="button" id="new">New Poem</button>
    `);
    $('section.poems').css('animation', 'fadeIn 1s forwards');

    $('button#new').on('click', e => {
        e.preventDefault();
        clearInterval(typing);
        setTimeout(() => {
            $('.bg > p').css('background', '#222222');
        }, 500);
        setTimeout(() => {
            erasePoem();
        }, 1500);
        setTimeout(() => {
            loadPoem();
        }, 2000);
    })
}

function erasePoem() {
    $('.bg > p').text('');
    visibleText = "";
    cursorPosition = 0;
    $('.bg > p').css('background', 'none');
}

function backToMain() {
    $('button#unhide').on('click', e => {
        e.preventDefault();
        $('section.poems').css('animation', 'fadeOut 1s forwards');
        setTimeout(() => {
            $('section.poems').html(`
                <button type="button" id="hide">Read Poem</button>
            `);
            $('main').css('animation', 'fadeIn 1s forwards');
            $('section.poems').css('animation', 'fadeIn 1s forwards');
            
            readPoems();
        }, 1000);
    })
}

readPoems();