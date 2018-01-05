Machine.cog({

    display: `
        <div>
            <div name="page_holder"></div>
        </div>`,

    gears: {
        page_holder: {url: 'page'}
    },

    actions: {

        page$: ' > page'

    },

    states: {

        page: 'home.js',

        page_list: {
            value: () => { return [
                {label: 'Books', icon: 'book', page: 'books.js'},
                {label: 'Houses', icon: 'shield', page: 'houses.js'},
                {label: 'Characters', icon: 'user', page: 'characters.js'}
            ]}
        }
    }
});