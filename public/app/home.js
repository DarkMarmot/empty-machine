Machine.cog({

    display: `
        <div>
            <div>Home of Winter</div>
            <div name="tiles"></div>
        </div>`,

    chains: {
        tiles: {url: 'tile_button.js', source: 'page_list'}
    }

});