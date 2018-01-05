Machine.cog({

    display: `
        <div>
            <div name="summaries"></div>
        </div>`,

    traits: [

        {url: 'FETCH', api: 'HOUSES_API', response: 'house_list', auto: true}

    ],

    buses: [
        'house_list # LOG house'
    ],

    states: {
        house_list: {}
    },

    chains: {
        summaries: {url: 'house_summary.js', source: 'house_list'}
    }

});