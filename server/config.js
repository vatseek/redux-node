const nconf = require('nconf');
const ENV = process.env.NODE_ENV;

const configDev = {
    "port": 5000,
    "mongoose": {
        "uri": "mongodb://localhost/testing",
        "options": {
            "server": {
                "socketOptions": {
                    "keepAlive": 1
                }
            }
        },
        "db": "testing"
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

if (process.env.NODE_ENV === 'production') {
    configDev.mongoose.uri = "mongodb://testuser:testuser@ds131139.mlab.com:31139/heroku_3l24sqpc";
}

nconf.argv().env();
if (ENV == 'development') {
    nconf.defaults(configDev);
} else {
    nconf.defaults(configDev);
}

export default nconf;