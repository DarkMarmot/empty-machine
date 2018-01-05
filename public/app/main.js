Machine.cog({

    display: `
        <div>
            <div name="tiles"></div>
        </div>`,

    chains: {
        tiles: {url: 'tile_button.js', source: 'page_list'}
    },

    states: {
        page_list: {
            value: () => { return [
                {label: 'Books', icon: 'book'},
                {label: 'Houses', icon: 'shield'},
                {label: 'Characters', icon: 'user'}
            ]}
        }
    }
});