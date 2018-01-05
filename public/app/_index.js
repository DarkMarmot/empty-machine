Machine.cog({

    aliases: {

        APP: './',
        NET: './net',
        FETCH: 'NET fetch.js',
        API: 'https://www.anapioficeandfire.com/api/',
        JS: './js',

        BOOKS_API: 'API books',
        CHARACTERS_API: 'API characters',
        HOUSES_API: 'API houses',

        // api list -- swap comments to go between json and not

    },

    cogs: {
        main: {url: 'main.js'}
    },

    display: `<div name="main"></div>`,


});