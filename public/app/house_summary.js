Machine.cog({

    display: `
        <div name="summary" class="tile" style="margin: 8px;">
            <h3 name="label"> meow </h3> 
        </div>`,

    nodes: {

        // tile: '@ click | .page > page$',
        label: '.name # TEXT',
        // icon: '.icon * toClasses # CLASSES'

    },

    // toClasses(icon_name){
    //
    //     const name = 'fa-' + icon_name;
    //
    //     const classes = {};
    //     classes[name] = true;
    //     return classes;
    //
    // }

});