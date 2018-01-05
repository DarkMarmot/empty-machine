Machine.cog({

    display: `
        <div>
            <div name="summaries"></div>
        </div>`,

    buses: [
        'house_list # LOG house'
    ],

    chains: {
        summaries: {url: 'house_summary.js', source: 'house_list'}
    }

});