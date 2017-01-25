const nconf = require('nconf');
const ENV = process.env.NODE_ENV;

const configDev = {
    "port": 5000,
    "mongoose": {
        "uri": "mongodb://localhost/comedy",
        "options": {
            "server": {
                "socketOptions": {
                    "keepAlive": 1
                }
            }
        },
        "db": "comedy"
    },
    "session": {
        "keys": {
            "secret1": "secret1",
            "secret2": "secret2"
        },
        "secret": "bookmark secret key",
        "key": "sid",
        "cookie": {
            "path": "/",
            "httpOnly": true,
            "maxAge": null
        }
    }
};

nconf.argv().env();
if (ENV == 'development') {
    nconf.defaults(configDev);
} else {
    nconf.defaults(configDev);
}

export default nconf;