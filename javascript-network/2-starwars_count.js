// Script to print all the series were Wedge Antllies is present

//movies by a character
const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;

//function
request.get(apiUrl, (error, response, body) => {
    if (error){
        console.error(error.message);
    }else if (response.statusCode !== 200){
        console.error(response.statusCode);
    }else {
        const movieData = JSON.parse(body)
        movieData.results.forEach((film) => {
            film.characters.forEach((character) => {
                if (character.includes(characterId)){
                    count += 1;
                }
            })
        })
        console.log(count);
    }
});