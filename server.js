'use strict';

var serveIndex = require('serve-index'),

    express = require('express'),

    colors = require('colors'),

    app = express(),

    publicDirectory = __dirname + '/src',

    port = process.argv.length >= 3 && parseInt(process.argv[2], 10),

    onError = function (err) {
        // Log server error
        console.log('[server]'.red, ('Can not start server with port ' + port).grey);

        // Quit process
        process.exit(1);
    };

// Bind error handler
process.on('uncaughtException', onError);

// Ensure port to be number
if (typeof port !== 'number') {
    port = 80;
}

// Serve static files middleware
app.use(express.static(publicDirectory, {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '0',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}));

// Serve directory listing middleware
app.use(serveIndex(publicDirectory, {'icons': true}))

// Start server
app.listen(port);

// Delay to catch errors on server start
setTimeout(function () {
    // Remove error handler
    process.removeListener('uncaughtException', onError);

    // Log server status
    console.log('[server]'.green, ('http://localhost:' + port).grey);
}, 1);
