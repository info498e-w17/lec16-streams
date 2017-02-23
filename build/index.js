"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//import * as Filter from './filters'
var pigLatinWord = require("./piglatin");
var stream = require("stream"); //import stream classes
var PigLatinFilter = (function (_super) {
    __extends(PigLatinFilter, _super);
    function PigLatinFilter() {
        return _super.call(this, { objectMode: true }) || this;
    }
    PigLatinFilter.prototype._transform = function (chunk, encoding, callback) {
        var data = chunk.toString().trim();
        //process the data
        var words = data.split(' ');
        words = words.map(pigLatinWord);
        var transformed = words.join(' ') + '\n';
        this.push(transformed); //output the data
        callback(); //do the next thing
    };
    PigLatinFilter.prototype._flush = function (callback) {
        callback();
    };
    return PigLatinFilter;
}(stream.Transform));
var pigFilter = new PigLatinFilter();
console.log("Running program...");
process.stdin
    .pipe(pigFilter)
    .pipe(process.stdout);
