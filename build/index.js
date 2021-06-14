"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// best preactice to set port as variable
var port = 3000;
//Default handler for the home page
app.get('/api', function (req, res) {
    res.send('The server is working');
});
//start the express server
app.listen(port, function () {
    console.log(`server started at http://localhost:${port}`);
});
