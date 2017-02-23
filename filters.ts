//adapted from https://strongloop.com/strongblog/new-io-js-features-you-may-not-be-using/
//const stream = require('stream');

import * as stream from 'stream'
import through = require('through2');

export class Upper extends stream.Transform {

  constructor() {
    super({objectMode:true}); //pass default arguments
  }

  //method to be called on each chunk of data
  //could also pass as `tranform` property to options
  _transform(chunk, encoding, done) { // overwriting method
    let data = chunk.toString(); //read in data
 
    let transformed = data.toUpperCase(); //process data

    this.push(transformed); //pipe out data
    done(); //callback for when finished
  }

  //called when remaining data is emptied
  //could also pass as `flush` property to options
  _flush(done) { // overwriting method
    //any final processing occurs here
    done();
  }
}

export const Bolder = through.obj(function (chunk, enc, callback) {
  let data:string = chunk.toString(); //read in data

  let transformed = '**'+data.trim()+'**\n';

  this.push(transformed);
  callback()
})