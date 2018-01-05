Machine.cog({

    display: `
        <div name="tile" class="tile" style="margin: 8px;">
            <h3 name="label"></h3> 
            <div name="icon" class="fa fa-4x fa-book"></div>
        </div>`,

    nodes: {

        tile: '@ click | .page > page$',
        label: '.label # TEXT',
        icon: '.icon * toClasses # CLASSES'

    },

    toClasses(icon_name){

        const name = 'fa-' + icon_name;

        const classes = {};
        classes[name] = true;
        return classes;

    }

});