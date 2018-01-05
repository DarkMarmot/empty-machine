Machine.cog({

    aliases: {

        APP: './',
        API: '../api',
        JS: '../js',
        JSON: '../json',


        FETCH: 'APP fetch.js',

        // api list -- swap comments to go between json and not

        TOPOLOGY_API: 'API topology',
        SERVER_STATUS_API: 'API serverStatus',
        PATIENT_SAMPLE_API: 'API patientSample',
        PATIENT_MESSAGES_API: 'API patientMessages'

        // TOPOLOGY_API: 'JSON topology.json',
        // SERVER_STATUS_API: 'JSON serverStatus.json',
        // PATIENT_SAMPLE_API: 'JSON patientSample.json'

    },

    cogs: {
        main: {url: 'hello.js'}
    },

    display: `<div name="main"></div>`,


});