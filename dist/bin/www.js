"use strict";
/**
 * Module dependencies.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const dotenv_1 = require("dotenv");
const debug_1 = __importDefault(require("debug"));
const http_1 = __importDefault(require("http"));
const console_1 = __importDefault(require("console"));
const app_1 = __importDefault(require("@/app"));
(0, dotenv_1.config)();
const debug = (0, debug_1.default)('express-typescript-skeleton2:server');
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (Number.isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app_1.default.set('port', port);
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console_1.default.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console_1.default.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Create HTTP server.
 */
const server = http_1.default.createServer(app_1.default);
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr === null || addr === void 0 ? void 0 : addr.port}`;
    debug(`Listening on ${bind}`);
}
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console_1.default.log('🚀 ~ server launch  ~ port', port));
server.on('error', onError);
server.on('listening', onListening);
