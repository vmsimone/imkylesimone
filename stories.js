const stories = [
]

function printStories() {
    stories.forEach(story => {
        $('section.stories ul').append(`<li>${story}</li>`)
    })
}

printStories();