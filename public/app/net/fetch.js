

Machine.cog({

    relays: {
        params: '.params',
        response$: '.response'
    },

    buses: [
        'params, .api * makeRequest',
        '.auto % isTrue | params, .api * makeRequest'
    ],

    isTrue: function(v) { return !!v;},


    makeRequest: function(msg){

        const self = this;
        const scope = this.cog.scope;
        const api = this.cog.aliasContext.resolveUrl(msg.api);

        const myHeaders = new Headers();

        const myInit = { method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default' };

        const paramString = this.toParamString(msg.params);
        const myRequest = new Request(api + '?' + paramString); //, myInit);


        fetch(myRequest).then(function(response) {
            const contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
            .then(function(json) {
                const d = scope.find('response$');
                d.write(json);
            })
            .catch(function(error) { console.log(error); });

    },

    toParamString: function(params){

        params = params || {};
        const esc = encodeURIComponent;
        const query = Object.keys(params)
            .map(function(k){ return esc(k) + '=' + esc(params[k]); })
            .join('&');

        return query;
    }

});